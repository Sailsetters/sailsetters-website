'use client'

import type { DefaultCellComponentProps, SelectFieldClient } from 'payload'
import type { ComponentProps } from 'react'

import { Pill } from '@payloadcms/ui'

type PillStyle = NonNullable<ComponentProps<typeof Pill>['pillStyle']>

/** Colour per pipeline stage, using Payload's own theme-aware pill styles. */
const STYLE: Record<string, PillStyle> = {
  neu: 'white',
  'in-pruefung': 'light',
  eingeladen: 'warning',
  'gespraech-geplant': 'warning',
  angenommen: 'success',
  onboarding: 'success',
  mitglied: 'dark',
  abgelehnt: 'error',
  zurueckgezogen: 'light-gray',
}

export const StatusCell = ({ cellData, field }: DefaultCellComponentProps<SelectFieldClient>) => {
  const value = typeof cellData === 'string' ? cellData : ''
  const option = field.options.find((o) => typeof o === 'object' && o.value === value)
  const label = option && typeof option === 'object' ? String(option.label) : value
  return <Pill pillStyle={STYLE[value] ?? 'light'}>{label}</Pill>
}
