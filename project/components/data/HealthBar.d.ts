import * as React from 'react';

export interface HealthBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Name of the distribution area (e.g. "Onboarding"). */
  label: React.ReactNode;
  /** Score 0–100. */
  value?: number;
  /** Override the auto tone (leak < 40, watch < 70, healthy ≥ 70). */
  tone?: 'auto' | 'leak' | 'watch' | 'healthy';
  /** Show the numeric "n/100" readout. @default true */
  showValue?: boolean;
  /** Optional uppercase status caption under the bar. */
  statusText?: React.ReactNode;
  /** Render for a dark (ink) surface. */
  onDark?: boolean;
}

/**
 * The diagnostic leak meter — visualizes the health of one distribution
 * area on a 0–100 scale, color-coded by severity. The core visual of the
 * Distribution Leak Diagnostic.
 *
 * @startingPoint section="Diagnostics" subtitle="0–100 leak meter, auto-colored by severity" viewport="700x120"
 */
export function HealthBar(props: HealthBarProps): JSX.Element;
