import React from 'react'

const inputStyle =
  'w-full rounded-xl border border-driftwood/30 bg-paper px-4 py-3 text-ink ' +
  'placeholder:text-driftwood/70 transition-colors ' +
  'focus:border-port focus:outline-none focus:ring-2 focus:ring-port/25 ' +
  'aria-[invalid=true]:border-port aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-port/25'

type BaseProps = {
  name: string
  label: string
  error?: string
  required?: boolean
  hint?: string
}

function Wrapper({
  name,
  label,
  error,
  required,
  hint,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[15px] font-medium text-ink">
        {label}
        {required && (
          <span className="text-port" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {hint && <p className="text-sm text-driftwood">{hint}</p>}
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="text-sm text-port">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextField({
  type = 'text',
  defaultValue,
  ...props
}: BaseProps & { type?: string; defaultValue?: string }) {
  return (
    <Wrapper {...props}>
      <input
        id={props.name}
        name={props.name}
        type={type}
        required={props.required}
        defaultValue={defaultValue}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${props.name}-error` : undefined}
        className={inputStyle}
      />
    </Wrapper>
  )
}

export function TextAreaField({
  rows = 5,
  defaultValue,
  ...props
}: BaseProps & { rows?: number; defaultValue?: string }) {
  return (
    <Wrapper {...props}>
      <textarea
        id={props.name}
        name={props.name}
        rows={rows}
        required={props.required}
        defaultValue={defaultValue}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${props.name}-error` : undefined}
        className={inputStyle}
      />
    </Wrapper>
  )
}

export function ConsentField({ error }: { error?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="consent" className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'consent-error' : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-port"
        />
        <span className="text-sm leading-relaxed text-ink">
          Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner
          Anfrage gespeichert werden. Weitere Informationen findest du in der{' '}
          <a href="/datenschutz" className="underline hover:text-port">
            Datenschutzerklärung
          </a>
          .
        </span>
      </label>
      {error && (
        <p id="consent-error" role="alert" className="text-sm text-port">
          {error}
        </p>
      )}
    </div>
  )
}
