import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

interface SectionCardProps extends ComponentPropsWithoutRef<'div'> {}

export const SectionCard = ({ className, ...props }: SectionCardProps) => (
  <div className={clsx('p-8 bg-white rounded-2xl shadow-lg', className)} {...props} />
);
