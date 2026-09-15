import { motion } from 'framer-motion';

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-dark-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-gradient rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
