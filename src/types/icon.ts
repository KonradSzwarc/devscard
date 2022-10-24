import type { StringKeyOf, ValueOf } from 'type-fest';

type IconSets = {
  'fa6-brands': typeof import('@iconify/json/json/fa6-brands.json');
  'fa6-solid': typeof import('@iconify/json/json/fa6-solid.json');
  'simple-icons': typeof import('@iconify/json/json/simple-icons.json');
  'circle-flags': typeof import('@iconify/json/json/circle-flags.json');
};

export type IconName = ValueOf<{
  [IconSet in keyof IconSets]: `${IconSet}:${StringKeyOf<IconSets[IconSet]['icons']>}`;
}>;
