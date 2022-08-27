import type { SectionConfig } from './common';

interface Book {
  title: string;
  cover: string;
  author: string;
  url?: string;
}

interface Person {
  name: string;
  image: string;
  url?: string;
}

interface Video {
  title: string;
  thumbnail: string;
  url: string;
}

interface Media {
  title: string;
  type: string;
  image: string;
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
