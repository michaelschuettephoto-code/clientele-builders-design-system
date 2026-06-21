import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color of the label and tick. @default 'accent' */
  tone?: 'accent' | 'neutral' | 'onDark' | 'leak';
  /** Show the leading tick mark. @default true */
  tick?: boolean;
  children?: React.ReactNode;
}

/**
 * Small uppercase mono label placed above a heading — the
 * instrument-readout signature of the system. Keep it 1–4 words.
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
