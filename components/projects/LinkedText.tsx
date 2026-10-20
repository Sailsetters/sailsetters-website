/**
 * Project texts are plain text fields. A link is written as
 * [LESEZEICHEN](https://lesezeichen-muenchen.de/); only http and https
 * addresses become links, anything else stays exactly as typed. Free of
 * hooks, so it renders on the server and in the application form alike.
 */
const LINK = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g

/** The text with links reduced to their label, e.g. inside a radio label. */
export function stripLinks(text: string): string {
  return text.replace(LINK, '$1')
}

export default function LinkedText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(LINK)) {
    parts.push(text.slice(last, m.index))
    parts.push(
      <a
        key={m.index}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:decoration-2"
      >
        {m[1]}
      </a>,
    )
    last = m.index + m[0].length
  }
  parts.push(text.slice(last))
  return <>{parts}</>
}
