import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from '../../hooks/useForm';
import { personalInfo } from '../../data/personal';

const validateContact = (values) => {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = 'Vui lòng nhập họ và tên';
  }

  if (!values.email?.trim()) {
    errors.email = 'Vui lòng nhập email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Định dạng email không hợp lệ';
  }

  if (!values.subject?.trim()) {
    errors.subject = 'Vui lòng nhập tiêu đề';
  }

  if (!values.message?.trim()) {
    errors.message = 'Vui lòng nhập nội dung tin nhắn';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Nội dung tin nhắn tối thiểu 20 ký tự';
  }

  return errors;
};

export default function Contact() {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSendMessage = async (formValues) => {
    // Simulate async API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted successfully:', formValues);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setIsSubmitted,
  } = useForm(initialValues, validateContact, handleSendMessage);

  return (
    <AnimatedPage variant="scaleFade">
      <div className="section-container pt-28">
        <SectionTitle
          title="Liên Hệ"
          subtitle="Hãy để lại lời nhắn hoặc liên hệ trực tiếp với mình qua các kênh dưới đây."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Column */}
          <div className="card lg:col-span-1 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Thông Tin Trực Tiếp
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-gray-400">Email</span>
                    <p className="text-gray-900 dark:text-white font-medium text-sm break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-gray-400">Điện Thoại</span>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-gray-400">Địa Chỉ</span>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                      {personalInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-light-border dark:border-dark-border">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Mình sẽ cố gắng phản hồi lại bạn sớm nhất có thể trong vòng 24 giờ làm việc.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="card lg:col-span-2">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <FiCheckCircle className="mx-auto text-green-500" size={54} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Gửi Tin Nhắn Thành Công!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm">
                  Cảm ơn bạn đã liên hệ. Mình đã nhận được thông tin và sẽ phản hồi qua email sớm nhất.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary mt-4"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${touched.name && errors.name ? 'border-red-500 focus:ring-red-400' : ''}`}
                    />
                    {touched.name && errors.name && (
                      <p className="error-message">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nguyenvana@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${touched.email && errors.email ? 'border-red-500 focus:ring-red-400' : ''}`}
                    />
                    {touched.email && errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Tiêu đề <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Cơ hội thực tập Frontend Developer"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field ${touched.subject && errors.subject ? 'border-red-500 focus:ring-red-400' : ''}`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="error-message">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Nội dung tin nhắn (tối thiểu 20 ký tự) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Chào bạn, mình muốn trao đổi thêm về..."
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input-field resize-none ${touched.message && errors.message ? 'border-red-500 focus:ring-red-400' : ''}`}
                  />
                  {touched.message && errors.message && (
                    <p className="error-message">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="btn-primary w-full justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Đang gửi...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FiSend /> Gửi Tin Nhắn
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
