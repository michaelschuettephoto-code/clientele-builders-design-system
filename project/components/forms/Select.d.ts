import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Options as plain strings or {value,label} objects. */
  options?: SelectOption[];
  /** Disabled first option used as a prompt. */
  placeholder?: string;
  style?: React.CSSProperties;
}

/**
 * Labelled dropdown built on the native <select> for reliability and
 * accessibility, styled to match Input with a custom chevron.
 */
export function Select(props: SelectProps): JSX.Element;
