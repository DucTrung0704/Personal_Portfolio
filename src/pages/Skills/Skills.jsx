import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillBar from '../../components/SkillBar/SkillBar';
import { technicalSkills, softSkills, languages } from '../../data/skills';
import { FiCheckCircle, FiGlobe } from 'react-icons/fi';

export default function Skills() {
  return (
    <AnimatedPage variant="fadeSlideUp">
      <div className="section-container pt-28">
        <SectionTitle
          title="Kỹ Năng Chuyên Môn"
          subtitle="Các công nghệ, ngôn ngữ lập trình và kỹ năng mềm mình đã và đang tích lũy."
        />

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technicalSkills.map((category) => (
            <div key={category.category} className="card">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 border-b border-light-border dark:border-dark-border pb-2">
                {category.category}
              </h3>
              <div>
                {category.skills.map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={idx * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soft Skills */}
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FiCheckCircle className="text-primary-500" /> Kỹ Năng Mềm
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-dark-surface text-gray-800 dark:text-gray-200 text-sm font-medium border border-light-border dark:border-dark-border shadow-sm hover:border-primary-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FiGlobe className="text-primary-500" /> Ngoại Ngữ
            </h3>
            <div className="space-y-3 pt-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="tag text-xs">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
