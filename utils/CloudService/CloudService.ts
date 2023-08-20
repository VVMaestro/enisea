import {UploadApiOptions, v2 as cloudinary} from 'cloudinary';

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

  public async uploadMedia(file: string, mediaTag?: string) {
    const options: UploadApiOptions = {
      use_filename: true,
      unique_filename: true,
      folder: 'media',
      resource_type: 'image'
    };

    if (mediaTag) {
      options.tags = [mediaTag];
    }
  
    try {
      const response = await cloudinary.uploader.upload(file, options);
  
      const mediaId = response.public_id;
  
      return mediaId;
    } catch (error) {
      console.error(error);
    }
  }
}
