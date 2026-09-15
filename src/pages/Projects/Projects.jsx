import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    projects.forEach((p) => p.tags.forEach((tag) => tagsSet.add(tag)));
    return ['All', ...Array.from(tagsSet)];
  }, []);

  // Filter projects by search query and tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        selectedTag === 'All' || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <AnimatedPage variant="scaleFade">
      <div className="section-container pt-28">
        <SectionTitle
          title="Dự Án Nổi Bật"
          subtitle="Những sản phẩm thực tế mình đã xây dựng và đóng góp."
        />

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search input */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Tìm kiếm dự án theo tên hoặc từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-11"
            />
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2 pt-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-primary-600 text-white shadow-glow'
                    : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 card max-w-md mx-auto">
            <p className="text-gray-500 dark:text-gray-400">
              Không tìm thấy dự án nào phù hợp với từ khóa & bộ lọc đã chọn.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('All');
              }}
              className="mt-4 text-primary-500 hover:underline text-sm font-medium"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}
