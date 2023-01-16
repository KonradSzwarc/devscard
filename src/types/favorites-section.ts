import type { Photo, SectionConfig } from './common';

export interface Book {
  title: string;
  cover: Photo;
  author: string;
  url?: string;
}

export interface Person {
  name: string;
  image: Photo;
  url?: string;
}

export interface Video {
  title: string;
  thumbnail: Photo;
  url: string;
}

export interface Media {
  title: string;
  type: string;
  image: Photo;
  url: string;
}

interface SubSection<Data> {
  title: string;
  data: Data[];
}

export interface FavoritesSection {
  config: SectionConfig;
  books: SubSection<Book>;
  people: SubSection<Person>;
  videos: SubSection<Video>;
  medias: SubSection<Media>;
}
