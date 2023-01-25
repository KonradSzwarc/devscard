import type { Photo, Section } from '../shared';

export interface Book {
  /**
   * [WEB] Book title.
   */
  title: string;

  /**
   * [WEB] Book cover.
   *
   * **Ratio**: 3:4
   *
   * **Display size**: 300x400px
   */
  image: Photo;

  /**
   * [WEB] Full name of the book author.
   */
  author: string;

  /**
   * [WEB] Website to buy the book or read more about it.
   */
  url: string;
}

export interface Person {
  /**
   * [WEB] Full name of the person.
   */
  name: string;

  /**
   * [WEB] Photo of the person.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 200x200px
   */
  image: Photo;

  /**
   * [WEB] Main website related to the person.
   */
  url?: string;
}

export interface Video {
  /**
   * [WEB] Title of the video.
   */
  title: string;

  /**
   * [WEB] Thumbnail of the video.
   *
   * **Ratio**: 16:9
   *
   * **Display size**: 448x252px
   */
  image: Photo;

  /**
   * [WEB] Link to the video.
   */
  url: string;
}

export interface Media {
  /**
   * [WEB] Title of the media.
   */
  title: string;

  /**
   * [WEB] Type of the media (e.g. podcast, blog, newsletter, YouTube channel, .etc).
   */
  type: string;

  /**
   * [WEB] Logo of the media.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 200x200px
   */
  image: Photo;

  /**
   * [WEB] URL to the main website related to the media.
   */
  url: string;
}

export interface SubSection<Data = unknown> {
  /**
   * [WEB] Title that will be displayed above the list of items.
   */
  title: string;

  /**
   * [WEB] List of items to display within the subsection.
   */
  data: Data[];
}

export interface FavoritesSection extends Section {
  /**
   * [WEB] List of your favorite books.
   */
  books?: SubSection<Book>;

  /**
   * [WEB] List of the people that inspire you.
   */
  people?: SubSection<Person>;

  /**
   * [WEB] List of the videos you learned the most from.
   */
  videos?: SubSection<Video>;

  /**
   * [WEB] List of other media types that helps you to growth in your field.
   */
  medias?: SubSection<Media>;
}
