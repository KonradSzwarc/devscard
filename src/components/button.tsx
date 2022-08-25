import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      'inline-flex items-center px-4 h-10 text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
      className
    )}
    {...props}
  />
);
