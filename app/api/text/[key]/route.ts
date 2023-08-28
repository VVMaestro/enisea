import {kv} from '@vercel/kv';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest, {params}: {params: {key: string};}) {
  try {
    const {key} = params;

    if (!key) {
      return new NextResponse(null, {status: 400, statusText: 'Missing query parameter: key'});
    }

    const text = await kv.get(key);

    return NextResponse.json({text});
  } catch (error) {
    console.error(error);

    return new NextResponse(null, {status: 500, statusText: 'Failed to receive text'});
  }
}
