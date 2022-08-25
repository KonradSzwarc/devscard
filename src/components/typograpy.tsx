import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type TypographyVariant =
  | 'item-title'
  | 'item-subtitle'
  | 'tile-title'
  | 'tile-subtitle'
  | 'main-title'
  | 'main-subtitle'
  | 'section-title'
  | 'section-subtitle'
  | 'paragraph';

interface TypographyProps extends ComponentPropsWithoutRef<'div'> {
  variant?: TypographyVariant;
}

const variantToElement = {
  'main-title': 'h1',
  'main-subtitle': 'h2',
  'section-title': 'h2',
  'section-subtitle': 'h3',
  'item-title': 'h3',
  'item-subtitle': 'p',
  'tile-title': 'h4',
  'tile-subtitle': 'p',
  paragraph: 'p',
} as const;

const variantToClassName = {
  'main-title': 'text-4xl font-extrabold text-gray-900',
  'main-subtitle': 'text-lg font-medium text-gray-700',
  'section-title': 'text-3xl font-extrabold text-gray-900',
  'section-subtitle': 'text-lg font-extrabold text-gray-900',
  'item-title': 'text-xl font-extrabold text-gray-900',
  'item-subtitle': 'text-md font-medium text-gray-700',
  'tile-title': 'text-sm font-medium text-gray-700',
  'tile-subtitle': 'text-sm font-normal text-gray-500',
  paragraph: 'text-base leading-relaxed font-normal text-gray-500',
};

export const Typography = ({ variant = 'paragraph', className, ...props }: TypographyProps) => {
  const Element = variantToElement[variant];

  return <Element className={clsx(variantToClassName[variant], className)} {...props} />;
};
