import {NextRequest, NextResponse} from 'next/server';
import {ITimeBasedOffer} from '../../../types/ITimeBasedOffer';
import {CloudService} from '../../../utils/CloudService/CloudService';
import {DataStorage} from '../../../utils/DataStorage';
import {DATA_KEY, PHOTO_TAG} from '../../../consts';
import crypto from 'crypto';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const storage = new DataStorage();
  const cloudService = new CloudService();

  const offersList = await storage.jsonGetDataWithIndex<ITimeBasedOffer>(DATA_KEY.TIME_BASED_OFFER_DATA, 'offerId');

  if (!offersList.length) {
    console.warn('No offers data found');

    return NextResponse.json({programs: []}, {status: 404, statusText: 'No programs data found'});
  }

  const offersMedia = await cloudService.searchMedia({tags: [PHOTO_TAG.TIME_BASED_OFFER_PHOTO]});

  const offersWithMedia = offersList.map((offer) => {
    const media = offersMedia.find((media) => media.publicId === offer.mediaId)

    return {
      ...offer,
      photoURL: media?.secureUrl ?? media?.url
    } as ITimeBasedOffer;
  });

  return NextResponse.json({offers: offersWithMedia});
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const {cost, time, photoURL}: ITimeBasedOffer = await request.json();

  if (!cost || !time || !photoURL) {
    return new NextResponse(null, {status: 400, statusText: 'Missing body parameters'});
  }

  const cloudService = new CloudService();
  const storage = new DataStorage();

  const mediaId = await cloudService.uploadMedia(photoURL, PHOTO_TAG.TIME_BASED_OFFER_PHOTO);

  if (!mediaId) {
    return new NextResponse(null, {status: 500, statusText: 'Failed to upload the photo'});
  }

  const offerUUID = crypto.randomUUID();

  const jsonResponse = await storage.jsonSetDataWithIndex(
    DATA_KEY.TIME_BASED_OFFER_DATA,
    offerUUID,
    {cost, time, mediaId}
  );

  if (jsonResponse !== 'OK') {
    await cloudService.deleteMedia([mediaId]);

    return new NextResponse(null, {status: 500, statusText: `Failed to create an offer with cost and time: ${cost}, ${time}`});
  }

  return NextResponse.json({offerUUID});
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const {searchParams} = new URL(request.url);

  const offerId = searchParams.get('offerId');

  if (!offerId) {
    return new NextResponse(null, {status: 400, statusText: 'No offer id received'});
  }

  const storage = new DataStorage();
  const cloudService = new CloudService();

  const [offerData]: ITimeBasedOffer[] = await storage.jsonGet(
    DATA_KEY.TIME_BASED_OFFER_DATA,
    `$["${offerId}"]`
  ) ?? [];

  if (!offerData) {
    return new NextResponse(null, {status: 404, statusText: 'No offer data found'});
  }

  const deleteResponse = await storage.jsonDelete(DATA_KEY.TIME_BASED_OFFER_DATA, `$["${offerId}"]`);

  if (!deleteResponse) {
    return new NextResponse(null, {status: 500, statusText: 'Failed to delete the data'});
  }

  const mediaDeleteResponse = await cloudService.deleteMedia([offerData.mediaId]);

  if (!mediaDeleteResponse) {
    await storage.jsonSet(DATA_KEY.PROGRAMS_DATA, `$["${offerId}"]`, {...offerData});

    return new NextResponse(null, {status: 500, statusText: 'Failed to delete the media'});
  }

  return new NextResponse(null, {status: 200, statusText: 'Data successfully deleted'});
}
