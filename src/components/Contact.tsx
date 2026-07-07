import { useState, type FormEvent } from 'react'
import { siteContent } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'
import { Icon } from './Icon'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { ref, isVisible } = useFadeIn()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    const { form } = siteContent.contact

    if (!formData.name.trim()) {
      newErrors.name = form.errors.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = form.errors.emailRequired
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = form.errors.emailInvalid
    }

    if (!formData.message.trim()) {
      newErrors.message = form.errors.messageRequired
    } else if (formData.message.trim().length < 10) {
      newErrors.message = form.errors.messageMin
    }

    return newErrors
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
    if (isSuccess) setIsSuccess(false)
  }

  const { contact } = siteContent

  return (
    <section id="contact" className="section section--light" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{contact.title}</span>
          <h2 id="contact-title" className="section-title">
            {contact.subtitle}
          </h2>
        </div>

        <div
          ref={ref}
          className={`contact__grid fade-in ${isVisible ? 'fade-in--visible' : ''}`}
        >
          <div>
            {isSuccess ? (
              <div className="form-success" role="status">
                {contact.form.success}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {contact.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder={contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {contact.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder={contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
                    placeholder={contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? contact.form.sending : contact.form.submit}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Icon name="location" />
              </div>
              <div>
                <div className="contact-info__label">Адрес</div>
                <div className="contact-info__value">{contact.info.address}</div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Icon name="phone" />
              </div>
              <div>
                <div className="contact-info__label">Телефон</div>
                <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="contact-info__value">
                  {contact.info.phone}
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Icon name="email" />
              </div>
              <div>
                <div className="contact-info__label">Email</div>
                <a href={`mailto:${contact.info.email}`} className="contact-info__value">
                  {contact.info.email}
                </a>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <Icon name="clock" />
              </div>
              <div>
                <div className="contact-info__label">Часы работы</div>
                <div className="contact-info__value">{contact.info.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
