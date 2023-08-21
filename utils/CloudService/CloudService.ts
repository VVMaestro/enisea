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

export class CloudService {
  constructor() {
    cloudinary.config({
      secure: true
    });
  }

  public async searchMedia(searchFilter: ISearchFilter): Promise<string[]> {
    try {
      const {tags} = searchFilter;

      const response: ISearchResponse = await cloudinary.search
        .expression(`tags=${tags.join(' AND ')}`)
        .with_field('tags')
        .execute();

      const mediaURLs = response.resources.map(({public_id}) => this.receiveMediaLink(public_id));

      return mediaURLs;
    } catch (error) {
      console.error(error);

      return [];
    }
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
