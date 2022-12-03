export interface Seo {
  /**
   * Title that will be displayed in Google search results and as tab name. To be fully visible in search results, it should be no longer than 60 characters.
   */
  title: string;

  /**
   * Description that will be displayed in Google search results. To be fully visible in search results, it should be no longer than 160 characters.
   */
  description: string;
  /**
   * Path to the image inside the public folder that will be used as page icon and as a preview image in site links.
   */
  image?: string;
}
