import type { CircleFlags, Fa6Brands, Fa6Solid, Ri, SimpleIcons } from 'iconify-icon-names';

/**
 * Name of the icon from the iconify library.
 *
 * @see https://icon-sets.iconify.design
 */
export type IconName = Fa6Brands | Fa6Solid | SimpleIcons | CircleFlags | Ri;

/**
 * - Dynamic import of the image from `src/assets` folder. Recommended as it enables image optimization.
 * - Path to the image placed in the `public` folder.
 * - URL of the image stored online.
 */
export type Photo = Promise<{ default: ImageMetadata }> | string;

/**
 * Two date objects representing some time period.
 *
 * If the second date is `null`, it means that the period is still ongoing.
 * In such case, the translation from `config.i18n.translations.now` will be used.
 */
export type DateRange = [from: Date, to: Date | null];

export interface SectionConfig {
  /**
   * Name displayed as a section header (except for the main section).
   *
   * [WEB] Content of the tooltip displayed when someone hovers over the section in the sidebar.
   */
  title: string;

  /**
   * [WEB] URL hash used to navigate to the section.
   */
  slug: string;

  /**
   * [WEB] Icon used in sidebar navigation to represent the section.
   */
  icon: IconName;

  /**
   * Should section be displayed on the page.
   */
  visible: boolean;
}

export interface Section {
  /**
   * Base information about the section.
   */
  config: SectionConfig;
}

export interface LabelledValue {
  /**
   * Bolder text displayed on the left side of the value.
   */
  label: string;

  /**
   * Text displayed on the right side.
   * If a list of strings provided, they will be separated by a comma.
   */
  value: string | string[];

  /**
   * URL that will be opened, when the value is clicked.
   */
  url?: string;

  /**
   * [PDF] When labelled value is displayed in a grid, it will span the whole row.
   */
  fullRow?: boolean;
}

export interface Tag {
  /**
   * Text displayed within the tag.
   */
  name: string;

  /**
   * [WEB] Icon displayed next to the tag text.
   */
  icon?: IconName;

  /**
   * [WEB] Color of the icon. By default, the color is inherited from the text.
   */
  iconColor?: string;

  /**
   * [WEB] URL that will be opened in a new tab, when the tag is clicked.
   */
  url?: string;

  /**
   * [WEB] Text displayed in the tooltip when someone hovers over the tag.
   */
  description?: string;
}

export interface TagsList {
  /**
   * [PDF] Text displayed before the list of tags.
   */
  title: string;

  /**
   * Tags to be displayed within the list.
   * [WEB] Tags are displayed as gray blocks. All tag properties are used.
   * [PDF] Tags are displayed comma separated list. Only the `name` property are used.
   */
  tags: Tag[];
}

export interface DownloadButton {
  /**
   * [WEB] Text displayed within the download button.
   */
  label: string;

  /**
   * [WEB] URL or path to the CV file.
   */
  url: string;

  /**
   * [WEB] Name of the file that will be downloaded.
   *
   * If not specified, the original file name will be used and file will open in a PDF viewer in some browsers.
   *
   * If specified, the file will be downloaded immediately (without preview) in all browsers.
   */
  downloadedFileName?: string;
}

export interface LinkButton {
  /**
   * [WEB] Name displayed in the tooltip when someone hovers over the button.
   */
  name: string;

  /**
   * [WEB] Icon displayed within the button.
   */
  icon: IconName;

  /**
   * [WEB] URL that will be opened in a new tab, when the button is clicked.
   */
  url: string;
}
