import type { LinkButton } from '@/types/shared';
import type { Merge } from 'type-fest';

type LinkWithoutUrl = Omit<LinkButton, 'url'>;
type PartialLinkWithUrl = Partial<LinkButton> & { url: string };

const createLinkFactory =
  <Link extends LinkWithoutUrl>(defaultData: Readonly<Link>) =>
  <Override extends PartialLinkWithUrl>(override: Readonly<Override>) =>
    ({
      ...defaultData,
      ...override,
    } as Readonly<Merge<Link, Override>>);

export default createLinkFactory;
