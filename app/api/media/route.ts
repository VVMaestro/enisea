import {NextRequest, NextResponse} from 'next/server';
import {CloudService} from '../../../utils/CloudService/CloudService';

interface PostMediaBody {
  mediaTag?: string;
  mediaURL: string;
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
