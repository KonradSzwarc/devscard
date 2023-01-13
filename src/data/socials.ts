import type { Social } from '../types/common';

type SocialWithoutUrl = Omit<Social, 'url'>;

const socials = {
  facebook: { name: 'Facebook', icon: 'fa6-brands:facebook-f' },
  github: { name: 'GitHub', icon: 'fa6-brands:github' },
  linkedin: { name: 'LinkedIn', icon: 'fa6-brands:linkedin-in' },
  twitter: { name: 'Twitter', icon: 'fa6-brands:twitter' },
  instagram: { name: 'Instagram', icon: 'fa6-brands:instagram' },
  youtube: { name: 'YouTube', icon: 'fa6-brands:youtube' },
  twitch: { name: 'Twitch', icon: 'fa6-brands:twitch' },
  discord: { name: 'Discord', icon: 'fa6-brands:discord' },
  stackoverflow: { name: 'Stack Overflow', icon: 'fa6-brands:stack-overflow' },
  codepen: { name: 'CodePen', icon: 'fa6-brands:codepen' },
  dev: { name: 'Dev', icon: 'fa6-brands:dev' },
  behance: { name: 'Behance', icon: 'fa6-brands:behance' },
  dribbble: { name: 'Dribbble', icon: 'fa6-brands:dribbble' },
  medium: { name: 'Medium', icon: 'fa6-brands:medium' },
  reddit: { name: 'Reddit', icon: 'fa6-brands:reddit' },
  quora: { name: 'Quora', icon: 'fa6-brands:quora' },
  spotify: { name: 'Spotify', icon: 'fa6-brands:spotify' },
  soundcloud: { name: 'SoundCloud', icon: 'fa6-brands:soundcloud' },
  lastfm: { name: 'Last.fm', icon: 'fa6-brands:lastfm' },
  vimeo: { name: 'Vimeo', icon: 'fa6-brands:vimeo' },
  pinterest: { name: 'Pinterest', icon: 'fa6-brands:pinterest' },
  tumblr: { name: 'Tumblr', icon: 'fa6-brands:tumblr' },
  flickr: { name: 'Flickr', icon: 'fa6-brands:flickr' },
  figma: { name: 'Figma', icon: 'fa6-brands:figma' },

  website: { name: 'Website', icon: 'fa6-solid:globe' },
  demo: { name: 'App demo', icon: 'fa6-solid:desktop' },
  mockups: { name: 'Mockups', icon: 'fa6-solid:image' },
  repository: { name: 'Repository', icon: 'fa6-solid:code-branch' },
} satisfies Record<string, SocialWithoutUrl>;

const getSocial = (name: keyof typeof socials, url: string, overrides?: Partial<SocialWithoutUrl>): Social => ({
  url,
  ...socials[name],
  ...overrides,
});

export default getSocial;
