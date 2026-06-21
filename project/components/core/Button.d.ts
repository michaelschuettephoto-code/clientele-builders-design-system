import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `primary` = ink-navy fill (default CTA), `accent` = brand blue, `secondary` = outline, `ghost` = text-only. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** Control size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Optional element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Optional element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

/**
 * Primary action element. Pill-shaped. Use `primary` for the main
 * conversion CTA ("Take the Assessment"); reserve `accent` for
 * secondary emphasis and `ghost` for low-priority actions.
 *
 * @startingPoint section="Core" subtitle="Pill button — primary, accent, secondary, ghost" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
