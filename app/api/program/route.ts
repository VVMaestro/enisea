import {NextRequest, NextResponse} from 'next/server';
import {CloudService} from '../../../utils/CloudService/CloudService';
import {DATA_KEY, PHOTO_TAG} from '../../../consts';
import {DataStorage} from '../../../utils/DataStorage';
import crypto from 'crypto';
import {IProgramData, ProgramCreateData, ProgramsDataResponse} from '../../../types/IProgram';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const storage = new DataStorage();
  const cloudService = new CloudService();

  const programsList = await storage.jsonGetDataWithIndex<IProgramData>(DATA_KEY.PROGRAMS_DATA, 'programId');

  if (!programsList.length) {
    console.warn('No programs data found');

    return NextResponse.json({programs: []}, {status: 404, statusText: 'No programs data found'});
  }

  const programsMedia = await cloudService.searchMedia({tags: [PHOTO_TAG.PROGRAM_ICON]});

  const programsWithMedia = programsList.map((program) => {
    const media = programsMedia.find((media) => media.publicId === program.mediaId)

    return {
      ...program,
      iconURL: media?.secureUrl ?? media?.url
    } as IProgramData;
  });

  return NextResponse.json({programs: programsWithMedia});
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const {en, cz, iconURL}: ProgramCreateData = await request.json();

  if (!en.title || !en.desc || !cz.title || !cz.desc || !iconURL) {
    return new NextResponse(null, {status: 400, statusText: 'Missing body parameters'});
  }

  const cloudService = new CloudService();
  const storage = new DataStorage();

  const mediaId = await cloudService.uploadMedia(iconURL, PHOTO_TAG.PROGRAM_ICON);

  if (!mediaId) {
    return new NextResponse(null, {status: 500, statusText: 'Failed to upload the icon'});
  }

  const programUUID = crypto.randomUUID();

  const jsonResponse = await storage.jsonSetDataWithIndex(DATA_KEY.PROGRAMS_DATA, programUUID, {en, cz, mediaId});

  if (jsonResponse !== 'OK') {
    await cloudService.deleteMedia([mediaId]);

    return new NextResponse(null, {status: 500, statusText: `Failed to create an advantage with title and desc: ${en.title}, ${en.desc}`});
  }

  return NextResponse.json({programUUID});
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const {searchParams} = new URL(request.url);

  const programId = searchParams.get('programId');

  if (!programId) {
    return new NextResponse(null, {status: 400, statusText: 'No program id received'});
  }

  const storage = new DataStorage();
  const cloudService = new CloudService();

  const [programData]: IProgramData[] = await storage.jsonGet(DATA_KEY.PROGRAMS_DATA, `$["${programId}"]`) ?? [];

  if (!programData) {
    return new NextResponse(null, {status: 404, statusText: 'No program data found'});
  }

  const deleteResponse = await storage.jsonDelete(DATA_KEY.PROGRAMS_DATA, `$["${programId}"]`);

  if (!deleteResponse) {
    return new NextResponse(null, {status: 500, statusText: 'Failed to delete the data'});
  }

  const mediaDeleteResponse = await cloudService.deleteMedia([programData.mediaId]);

  if (!mediaDeleteResponse) {
    await storage.jsonSet(DATA_KEY.PROGRAMS_DATA, `$["${programId}"]`, {...programData});

    return new NextResponse(null, {status: 500, statusText: 'Failed to delete the media'});
  }

  return new NextResponse(null, {status: 200, statusText: 'Data successfully deleted'});
}
