import { useState, useCallback } from 'react';

/**
 * Custom form validation hook
 * @param {Object} initialValues - Initial form field values
 * @param {Function} validate - Validation function that returns errors object
 * @param {Function} onSubmit - Submit handler called when form is valid
 */
export function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(prev => {
        const newErrors = { ...prev };
        if (validationErrors[name]) {
          newErrors[name] = validationErrors[name];
        } else {
          delete newErrors[name];
        }
        return newErrors;
      });
    }
  }, [values, touched, validate]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const validationErrors = validate(values);
    setErrors(prev => {
      const newErrors = { ...prev };
      if (validationErrors[name]) {
        newErrors[name] = validationErrors[name];
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  }, [values, validate]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Touch all fields
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        setIsSubmitted(true);
        // Reset form after successful submit
        setValues(initialValues);
        setTouched({});
        setErrors({});
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validate, onSubmit, initialValues]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setIsSubmitted,
  };
}
