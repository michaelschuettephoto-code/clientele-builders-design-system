import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. @default 'surface' */
  variant?: 'surface' | 'outline' | 'ink' | 'sunken';
  /** Resting shadow depth (ignored for `ink`). @default 'sm' */
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** Add hover-lift behaviour for clickable cards. */
  interactive?: boolean;
  /** Inner padding scale. @default 'lg' */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

/**
 * Base surface container. Compose diagnostic categories, metrics, and
 * content blocks inside it. Use `ink` for dark instrument panels.
 *
 * @startingPoint section="Core" subtitle="Surface container — light, ink, outline" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
