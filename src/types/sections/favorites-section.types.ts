import type { Photo, Section } from '../shared';

export interface Book {
  title: string;
  image: Photo;
  author: string;
  url: string;
}

export interface Person {
  name: string;
  image: Photo;
  url?: string;
}

export interface Video {
  title: string;
  image: Photo;
  url: string;
}

export interface Media {
  title: string;
  type: string;
  image: Photo;
  url: string;
}

export interface SubSection<Data = unknown> {
  title: string;
  data: Data[];
}

export interface FavoritesSection extends Section {
  books?: SubSection<Book>;
  people?: SubSection<Person>;
  videos?: SubSection<Video>;
  medias?: SubSection<Media>;
}
