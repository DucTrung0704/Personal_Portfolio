import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const { title, description, thumbnail, tags, github, githubFE, githubBE, demo } = project;

  return (
    <article className="card group overflow-hidden">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-gray-100 dark:bg-dark-surface">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        {project.period && (
          <span className="text-xs font-mono text-primary-500 dark:text-primary-400 shrink-0">
            {project.period}
          </span>
        )}
      </div>
      {project.role && (
        <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
          {project.role}
        </p>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="tag text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2 border-t border-light-border dark:border-dark-border flex-wrap">
        {githubFE && (
          <a
            href={githubFE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FiGithub size={16} /> GitHub FE
          </a>
        )}
        {githubBE && (
          <a
            href={githubBE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FiGithub size={16} /> GitHub BE
          </a>
        )}
        {github && !githubFE && !githubBE && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FiGithub size={16} /> GitHub
          </a>
        )}
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors ml-auto"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        ) : (
          <span
            className="tooltip inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 cursor-not-allowed ml-auto"
            data-tooltip="Chưa triển khai"
          >
            <FiExternalLink size={16} /> Demo
          </span>
        )}
      </div>
    </article>
  );
}