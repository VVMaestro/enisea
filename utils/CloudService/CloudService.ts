import {UploadApiOptions, v2 as cloudinary} from 'cloudinary';

export interface ISearchFilter {
  tags: string[];
}

export interface ISearchResponse {
  total_count: number;
  resources: {
    asset_id: string;
    public_id: string;
    secure_url: string;
    url: string;
  }[];
}

export interface IMediaData {
  publicId: string;
  url: string;
  secureUrl: string;
  assetId: string;
}

export class CloudService {
  constructor() {
    cloudinary.config({
      secure: true
    });
  }

  public async searchMedia(searchFilter: ISearchFilter): Promise<IMediaData[]> {
    try {
      const {tags} = searchFilter;

      const response: ISearchResponse = await cloudinary.search
        .expression(`tags=${tags.join(' AND ')}`)
        .with_field('tags')
        .execute();

      return response.resources.map(({public_id, url, secure_url, asset_id}) => {
        return {
          publicId: public_id,
          url,
          secureUrl: secure_url,
          assetId: asset_id
        };
      });
    } catch (error) {
      console.error(error);

      throw new Error(error.message);
    }
  }

  public receiveMediaLink(mediaId: string): string {
    try {
      return cloudinary.url(mediaId);
    } catch (error) {
      console.error(error);

      throw new Error(error.message);
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

      return response.public_id;
    } catch (error) {
      console.error(error);

      throw new Error(error.message);
    }
  }

  public async deleteMedia(mediaIds: string[]) {
    try {
      return await cloudinary.api.delete_resources(mediaIds);
    } catch (error) {
      console.log(error);
    }
  }
}
