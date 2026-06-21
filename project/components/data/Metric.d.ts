import * as React from 'react';

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure (string so you control formatting: "$1.2M", "37%", "4.1×"). */
  value: React.ReactNode;
  /** Uppercase mono caption under the value. */
  label: React.ReactNode;
  /** Optional sentence of context beneath the label. */
  context?: React.ReactNode;
  /** Color of the value. @default 'default' */
  tone?: 'default' | 'accent' | 'leak' | 'healthy' | 'onDark';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Single instrument readout — big mono value + mono label. The numeric
 * backbone of diagnostic reports and the revenue-leak calculator.
 */
export function Metric(props: MetricProps): JSX.Element;
