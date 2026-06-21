import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Maps to the brand signal system. @default 'neutral' */
  tone?: 'neutral' | 'scan' | 'leak' | 'healthy' | 'brand';
  /** `soft` = tinted background, `solid` = filled. @default 'soft' */
  variant?: 'soft' | 'solid';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Compact status/label pill in mono caps. Use to flag system state
 * (Healthy / Leak / Critical) or to tag a small piece of metadata.
 */
export function Badge(props: BadgeProps): JSX.Element;
