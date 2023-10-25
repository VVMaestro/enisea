import {NextRequest, NextResponse} from 'next/server';
import crypto from 'crypto';
import {DataStorage} from '../../../utils/DataStorage';
import {DATA_KEY} from '../../../consts';
import {AdvantageCreateData, AdvantagesDataResponse, IAdvantageData} from '../../../types/IAdvantage';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const storage = new DataStorage();

  const advantagesResponse: AdvantagesDataResponse = await storage.jsonGet(DATA_KEY.ADVANTAGES_DATA, '$');

  if (!advantagesResponse || advantagesResponse === 'nil') {
    return new NextResponse(null, {status: 404, statusText: 'No advantages data found'});
  }

  const [advantagesRecord] = advantagesResponse;
  const advantagesList: IAdvantageData[] = [];

  for (const [advantageId, advantage] of Object.entries(advantagesRecord)) {
    advantagesList.push({
      ...advantage,
      advantageId
    });
  }

  return NextResponse.json({advantages: advantagesList});
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const {en, cz}: AdvantageCreateData = await request.json();

  if (!en.title || !en.desc || !cz.title || !cz.desc) {
    return new NextResponse(null, {status: 400, statusText: 'Missing body parameters: title, desc'});
  }

  const advantageUUID = crypto.randomUUID();
  const storage = new DataStorage();

  const existStructure: AdvantagesDataResponse = await storage.jsonGet(DATA_KEY.ADVANTAGES_DATA, '$');

  let jsonResponse: 'OK' | null | undefined;

  if (!existStructure || existStructure === 'nil') {
    jsonResponse = await storage.jsonSet(DATA_KEY.ADVANTAGES_DATA, '$', {[advantageUUID]: {en, cz}});
  } else {
    let lastAdvantageIndex = 0;
    let lastAdvantage: IAdvantageData | null = null;

    for (const advantage of Object.values(existStructure[0])) {
      if (advantage.index > lastAdvantageIndex) {
        lastAdvantageIndex = advantage.index;
        lastAdvantage = advantage;
      }
    }

    jsonResponse = await storage.jsonSet(DATA_KEY.ADVANTAGES_DATA, `$["${advantageUUID}"]`, {en, cz, index: lastAdvantageIndex + 1});
  }

  if (jsonResponse !== 'OK') {
    return new NextResponse(null, {status: 500, statusText: `Failed to create an advantage with title and desc: ${en.title}, ${en.desc}`});
  }

  return NextResponse.json({advantageUUID});
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const {searchParams} = new URL(request.url);

  const advantageId = searchParams.get('advantageId');

  if (!advantageId) {
    return new NextResponse(null, {status: 400, statusText: 'No advantage id received'});
  }

  const deleteResponse = await new DataStorage().jsonDelete(DATA_KEY.ADVANTAGES_DATA, `$["${advantageId}"]`);

  if (!deleteResponse) {
    return new NextResponse(null, {status: 500, statusText: 'No data was deleted'});
  }

  return new NextResponse(null, {status: 200, statusText: 'Data successfully deleted'});
}