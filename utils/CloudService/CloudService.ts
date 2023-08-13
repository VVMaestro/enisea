import {v2 as cloudinary} from 'cloudinary';

export class CloudService {
  constructor() {
    cloudinary.config({
      secure: true
    });
  }

  public receiveMediaLink(mediaId: string): string {
    try {
      const response = cloudinary.url(mediaId);

      return response;
    } catch (error) {
      console.error(error);

      return '';
    }
  }
}
