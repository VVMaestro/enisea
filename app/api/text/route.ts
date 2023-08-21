import {NextRequest, NextResponse} from 'next/server';
import {DataStorage} from '../../../utils/DataStorage';

interface IPostTextBody {
  key: string;
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const {key, text}: IPostTextBody = await request.json();

    await new DataStorage().set(key, text);

    return NextResponse.json({}, {status: 200});
  } catch (error) {
    console.log(error);
  }
}
