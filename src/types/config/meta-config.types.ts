export interface MetaConfig {
  /**
   * [WEB] Page title.
   *
   * Displayed as browser tab title and in search results.
   * It's recommended to keep it between 30 and 60 characters.
   *
   * @see https://www.screamingfrog.co.uk/learn-seo/page-title
   */
  title: string;

  /**
   * [WEB] Page description.
   *
   * Displayed under the title in search results.
   * It's recommended to keep it between 70 and 155 characters.
   *
   * @see https://www.screamingfrog.co.uk/learn-seo/meta-description
   */
  description: string;

  /**
   * [WEB] Absolute path to the image used for favicons generation.
   *
   * Specified icon will be displayed next to the page title in browser tab.
   */
  faviconPath: string;

  /**
   * [WEB] Title used in open graph links.
   *
   * If not specified, the title property will be used.
   *
   * @see https://ahrefs.com/blog/open-graph-meta-tags
   */
  ogTitle?: string;

  /**
   * [WEB] Description used in open graph links.
   *
   * If not specified, the description property will be used.
   *
   * @see https://ahrefs.com/blog/open-graph-meta-tags
   */
  ogDescription?: string;

  /**
   * [WEB] Image used in open graph links.
   *
   * It's recommended to keep it between 30 and 60 characters.
   *
   * @see https://ahrefs.com/blog/open-graph-meta-tags
   */
  ogImage?: string;
}
