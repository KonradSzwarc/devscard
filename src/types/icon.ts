type IconSets = {
  'fa6-brands': typeof import('@iconify/json/json/fa6-brands.json');
  'fa6-solid': typeof import('@iconify/json/json/fa6-solid.json');
  'simple-icons': typeof import('@iconify/json/json/simple-icons.json');
  'circle-flags': typeof import('@iconify/json/json/circle-flags.json');
};

type CreateFullIconName<IconSetName extends keyof IconSets, IconNames> = IconNames extends string
  ? `${IconSetName}:${IconNames}`
  : never;

type ValueOf<T> = T[keyof T];
type ExtractedIcons = {
  [IconSetName in keyof IconSets]: CreateFullIconName<IconSetName, keyof IconSets[IconSetName]['icons']>;
};

export type Icon = ValueOf<ExtractedIcons>;
