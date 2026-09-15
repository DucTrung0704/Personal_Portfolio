import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { personalInfo } from '../../data/personal';

export default function Home() {
  return (
    <AnimatedPage variant="fadeSlideUp">
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background decorative glowing orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/15 dark:bg-primary-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Avatar / Profile Image */}
          <div className="relative mb-8 group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-accent-gradient shadow-glow group-hover:shadow-glow-lg transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-light-surface dark:bg-dark-surface flex items-center justify-center">
                <img
                  src={personalInfo.avatar || 'https://via.placeholder.com/160'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback avatar if local image not found
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(personalInfo.name) + '&background=8b5cf6&color=fff&size=160';
                  }}
                />
              </div>
            </div>
            {/* Online badge */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-dark-bg rounded-full animate-pulse" />
          </div>

          {/* Intro tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            <span>Sẵn sàng cho cơ hội thực tập mới</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
            <span className="block mb-2">Xin chào, mình là</span>
            <span className="gradient-text whitespace-nowrap pb-3 pt-1">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-6">
            {personalInfo.title}
          </p>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            {personalInfo.profile}
          </p>

          {/* Action CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link to="/projects" className="btn-primary">
              Xem Dự Án <FiArrowRight />
            </Link>
            <Link to="/resume" className="btn-secondary">
              Xem Hồ Sơ Chi Tiết
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-all font-medium"
            >
              <FiDownload /> Tải CV
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
            {personalInfo.social?.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-500 transition-colors p-2"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
            )}
            {personalInfo.social?.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-500 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
