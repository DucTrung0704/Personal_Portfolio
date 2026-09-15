import medicalImg from '../assets/medical.png';
import flashLearnImg from '../assets/flashcard.png';

export const projects = [
  {
    id: 1,
    title: 'TriageFlowOPD',
    role: 'Frontend Developer',
    period: '06/2026 – 09/2026',
    description:
      'Nền tảng quản lý và điều phối luồng bệnh nhân ngoại trú. Phát triển luồng khám bệnh của bác sĩ, phân quyền RBAC và cập nhật hàng đợi thời gian thực',
    thumbnail: medicalImg,
    tags: ['Next.js', 'Zustand', 'Tailwind CSS', 'Socket.IO', 'Fetch API', 'TypeScript'],
    githubFE: 'https://github.com/Triage-Co/triageflow_fe',
    githubBE: 'https://github.com/Triage-Co/TriageFlowOPD_BE',
    demo: 'https://www.triageflow.systems',
  },
  {
    id: 2,
    title: 'FlashLearn',
    role: 'Fullstack Developer',
    period: '10/2025 – 12/2025',
    description:
      'Nền tảng học tập trực tuyến. Phát triển tính năng học tập, quản lý khóa học, và tương tác giữa giảng viên và học viên.',
    thumbnail: flashLearnImg, 
    tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Fetch API', 'Tailwind CSS'],
    githubFE: 'https://github.com/DucTrung0704/FlashMath_FE',
    githubBE: 'https://github.com/DucTrung0704/FlashMath_BE',
    demo: null,
  },
];
