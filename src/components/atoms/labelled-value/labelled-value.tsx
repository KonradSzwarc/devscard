import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

interface LabelledValueProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
}

export const LabelledValue = ({ label, children, className, ...props }: LabelledValueProps) => (
  <div className={clsx('text-base space-x-1', className)} {...props}>
    <span className="font-medium text-gray-700">{label}:</span>
    <span className="font-normal text-gray-500">{children}</span>
  </div>
);
