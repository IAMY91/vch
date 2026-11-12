import { profileSources, type ProfileSourceKey } from '@/lib/profileSources';

export default function SourceLinks({ sources, label }: { sources: ProfileSourceKey[]; label: string }) {
  return (
    <ul className="source-links" aria-label={label}>
      {sources.map(key => {
        const source = profileSources[key];
        return (
          <li key={key}>
            <a href={source.href}>
              <span className="source-publisher">{source.publisher}</span>
              <span className="source-title">{source.title}</span>
              <span className="source-format">{source.format}<span className="sr-only"> · External source</span></span>
              <span className="source-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
