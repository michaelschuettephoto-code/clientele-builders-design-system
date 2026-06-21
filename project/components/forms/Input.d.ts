import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Visible field label. */
  label?: React.ReactNode;
  /** Helper text shown below (mono). */
  hint?: React.ReactNode;
  /** Error message — turns the field red and overrides the hint. */
  error?: React.ReactNode;
  /** Icon rendered inside, on the left. */
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Labelled text field for assessment and contact forms. Calm hairline
 * border, brand-blue focus ring, mono hint/error text.
 */
export function Input(props: InputProps): JSX.Element;
