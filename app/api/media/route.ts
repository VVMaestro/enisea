import {NextRequest, NextResponse} from 'next/server';
import {CloudService} from '../../../utils/CloudService/CloudService';

interface PostMediaBody {
  mediaTag?: string;
  mediaURL: string;
}

export async function GET(request: NextRequest) {
  try {
    const {searchParams} = new URL(request.url);
    const tag = searchParams.get('tag');

    if (!tag) {
      return new NextResponse('No tag parameter received', {status: 400});
    }

    const mediaURLs = await new CloudService().searchMedia({tags: [tag]});

    return NextResponse.json({medias: mediaURLs});
  } catch (error) {
    console.error(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const {mediaTag, mediaURL}: PostMediaBody = await request.json();
  
    const cloudService = new CloudService();
  
    const mediaId = await cloudService.uploadMedia(mediaURL, mediaTag);
  
    return NextResponse.json({mediaId}, {status: 200});
  } catch (error) {
    return NextResponse.error();
  }
}
