import type { LinkButton } from '@/types/shared';

type SocialWithoutUrl = Omit<LinkButton, 'url'>;

// GENERAL

export const facebook = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Facebook',
  icon: 'fa6-brands:facebook-f',
  url,
  ...override,
});

export const linkedin = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'LinkedIn',
  icon: 'fa6-brands:linkedin-in',
  url,
  ...override,
});

export const twitter = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Twitter',
  icon: 'fa6-brands:twitter',
  url,
  ...override,
});

export const pinterest = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Pinterest',
  icon: 'fa6-brands:pinterest',
  url,
  ...override,
});

// CODE

export const github = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'GitHub',
  icon: 'fa6-brands:github',
  url,
  ...override,
});

export const codepen = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'CodePen',
  icon: 'fa6-brands:codepen',
  url,
  ...override,
});

export const stackblitz = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'StackBlitz',
  icon: 'simple-icons:stackblitz',
  url,
  ...override,
});

export const codesandbox = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'CodeSandbox',
  icon: 'simple-icons:codesandbox',
  url,
  ...override,
});

// BLOG

export const dev = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Dev',
  icon: 'fa6-brands:dev',
  url,
  ...override,
});

export const medium = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Medium',
  icon: 'fa6-brands:medium',
  url,
  ...override,
});

// FORUM / CHAT

export const reddit = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Reddit',
  icon: 'fa6-brands:reddit',
  url,
  ...override,
});

export const quora = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Quora',
  icon: 'fa6-brands:quora',
  url,
  ...override,
});

export const stackoverflow = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Stack Overflow',
  icon: 'fa6-brands:stack-overflow',
  url,
  ...override,
});

// DESIGN

export const instagram = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Instagram',
  icon: 'fa6-brands:instagram',
  url,
  ...override,
});
export const behance = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Behance',
  icon: 'fa6-brands:behance',
  url,
  ...override,
});

export const dribbble = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Dribbble',
  icon: 'fa6-brands:dribbble',
  url,
  ...override,
});

export const figma = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Figma',
  icon: 'fa6-brands:figma',
  url,
  ...override,
});

// MUSIC

export const spotify = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Spotify',
  icon: 'fa6-brands:spotify',
  url,
  ...override,
});

export const soundcloud = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'SoundCloud',
  icon: 'fa6-brands:soundcloud',
  url,
  ...override,
});

// VIDEO

export const youtube = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'YouTube',
  icon: 'fa6-brands:youtube',
  url,
  ...override,
});

export const twitch = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Twitch',
  icon: 'fa6-brands:twitch',
  url,
  ...override,
});

export const vimeo = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Vimeo',
  icon: 'fa6-brands:vimeo',
  url,
  ...override,
});

// PROJECT TYPE

export const website = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Website',
  icon: 'fa6-solid:globe',
  url,
  ...override,
});

export const demo = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'App demo',
  icon: 'fa6-solid:desktop',
  url,
  ...override,
});

export const mockups = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Mockups',
  icon: 'fa6-solid:image',
  url,
  ...override,
});

export const repository = (url: string, override?: Partial<SocialWithoutUrl>): LinkButton => ({
  name: 'Repository',
  icon: 'fa6-solid:code-branch',
  url,
  ...override,
});
