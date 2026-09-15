import { useState } from 'react';
import { FiDownload, FiUser, FiBookOpen, FiBriefcase, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import { personalInfo } from '../../data/personal';
import { education, workExperience, certifications } from '../../data/experience';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Thông Tin Cá Nhân', icon: FiUser },
    { id: 'education', label: 'Học Vấn', icon: FiBookOpen },
    { id: 'experience', label: 'Kinh Nghiệm', icon: FiBriefcase },
    { id: 'certifications', label: 'Chứng Chỉ', icon: FiCheckCircle },
  ];

  return (
    <AnimatedPage variant="fadeSlideUp">
      <div className="section-container pt-28">
        <SectionTitle
          title="Hồ Sơ Năng Lực"
          subtitle="Tổng hợp chi tiết về học vấn, mục tiêu, kinh nghiệm và quá trình phát triển của bản thân."
        />

        <div className="flex justify-center mb-8">
          <a
            href="/resume.pdf"
            download
            className="btn-primary"
          >
            <FiDownload /> Tải Bản CV PDF
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 dark:bg-dark-card border border-light-border dark:border-dark-border">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-white dark:bg-dark-surface text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'personal' && (
            <div className="card space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-light-border dark:border-dark-border pb-3">
                Thông Tin Chi Tiết
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Họ và tên</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.name}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Ngày sinh</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.birthday}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Giới tính</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.gender}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Địa chỉ</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.address}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Email</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.email}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Điện thoại</span>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-light-border dark:border-dark-border">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Mục tiêu nghề nghiệp</span>
                <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {personalInfo.objective}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="card animate-fade-in">
              {education.map((edu, idx) => (
                <TimelineItem key={edu.id || idx} item={edu} index={idx} />
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="card animate-fade-in">
              {workExperience && workExperience.length > 0 ? (
                <div className="space-y-2">
                  {workExperience.map((exp) => (
                    <TimelineItem key={exp.id} item={exp} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>Hiện tại đang tập trung học tập và rèn luyện các dự án thực tế.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="card animate-fade-in space-y-6">
              <div className="border-b border-light-border dark:border-dark-border pb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Chứng Chỉ Chuyên Môn
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Các khóa học và chứng chỉ quốc tế đã hoàn thành.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications && certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-xl border border-light-border dark:border-dark-border bg-gray-50/50 dark:bg-dark-surface/50 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-1">
                          <FiCheckCircle />
                          <span>{cert.issuer}</span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {cert.description}
                        </p>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 hover:bg-primary-100 dark:hover:bg-primary-900/60 transition-colors shrink-0 self-start sm:self-auto mt-2 sm:mt-0"
                        >
                          <span>Xem chứng chỉ</span>
                          <FiExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}
