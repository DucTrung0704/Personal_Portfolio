import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

export default function NotFound() {
  return (
    <AnimatedPage variant="fadeSlideUp">
      <div className="min-h-[70vh] flex items-center justify-center text-center px-4 pt-20">
        <div className="card max-w-lg p-8 sm:p-12">
          <div className="text-7xl font-extrabold gradient-text mb-4">404</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Trang Không Tồn Tại
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm sm:text-base">
            Đường dẫn bạn truy cập có thể đã bị thay đổi, xóa hoặc không khả dụng. Vui lòng quay lại trang chủ.
          </p>
          <Link to="/" className="btn-primary inline-flex">
            <FiHome /> Về Trang Chủ
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}
