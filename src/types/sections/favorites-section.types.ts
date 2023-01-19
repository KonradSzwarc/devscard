import type { Photo, Section } from '../shared';

export type Book = Readonly<{
  title: string;
  image: Photo;
  author: string;
  url: string;
}>;

export type Person = Readonly<{
  name: string;
  image: Photo;
  url?: string;
}>;

export type Video = Readonly<{
  title: string;
  image: Photo;
  url: string;
}>;

export type Media = Readonly<{
  title: string;
  type: string;
  image: Photo;
  url: string;
}>;

export type SubSection<Data = unknown> = Readonly<{
  title: string;
  data: Readonly<Data[]>;
}>;

export type FavoritesSection = Section &
  Readonly<{
    books?: SubSection<Book>;
    people?: SubSection<Person>;
    videos?: SubSection<Video>;
    medias?: SubSection<Media>;
  }>;
