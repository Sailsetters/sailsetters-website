import LinkedText from '@/components/projects/LinkedText'

/**
 * A project's note for applicants (`bewerbung.hinweis`), entered in the admin
 * as plain text: a blank line starts a new paragraph, a single line break
 * stays one, and [Text](https://…) becomes a link. Used on the project cards
 * and in the application form, so it must stay free of hooks.
 */
export default function ProjectHinweis({ text, className = '' }: { text: string; className?: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
  return (
    <div className={`flex flex-col gap-3 leading-relaxed ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className="whitespace-pre-line">
          <LinkedText text={p} />
        </p>
      ))}
    </div>
  )
}
