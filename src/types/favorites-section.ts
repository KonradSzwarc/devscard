import type { LocalImage, SectionConfig } from './common';

interface Book {
  title: string;
  cover: LocalImage;
  author: string;
  url?: string;
}

interface Person {
  name: string;
  image: LocalImage;
  url?: string;
}

interface Video {
  title: string;
  thumbnail: LocalImage;
  url: string;
}

interface Media {
  title: string;
  type: string;
  image: LocalImage;
  url: string;
}

interface SubSection<Data> {
  title: string;
  data: Data;
}

export interface FavoritesSection {
  config: SectionConfig;
  books: SubSection<Book>;
  people: SubSection<Person>;
  videos: SubSection<Video>;
  medias: SubSection<Media>;
}
