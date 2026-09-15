export default function TimelineItem({ item }) {
  return (
    <div className={`relative flex items-start gap-4 pb-8 last:pb-0`}>
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent-gradient shadow-glow shrink-0 mt-1.5" />
        <div className="w-0.5 flex-1 bg-gray-200 dark:bg-dark-border" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <span className="inline-block text-xs font-mono text-primary-500 dark:text-primary-400 mb-1">
          {item.period}
        </span>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          {item.institution || item.company || item.organization}
        </h3>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
          {item.degree || item.position || item.role}
        </p>
        {item.gpa && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">GPA: {item.gpa}</p>
        )}
        {item.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
        )}
        {item.highlights && (
          <ul className="mt-2 space-y-1">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                <span className="text-primary-500 mt-1">▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
