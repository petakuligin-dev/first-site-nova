export const siteContent = {
  company: {
    name: 'НоваТех',
    tagline: 'Цифровые решения для бизнеса',
  },

  nav: [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Проекты', href: '#portfolio' },
    { label: 'Преимущества', href: '#features' },
    { label: 'Контакты', href: '#contact' },
  ],

  images: {
    hero: 'images/hero-office.jpg',
    about: 'images/about-team.jpg',
    servicesBanner: 'images/services-banner.jpg',
  },

  hero: {
    title: 'Создаём технологии, которые двигают ваш бизнес вперёд',
    subtitle:
      'Разрабатываем веб-приложения, автоматизируем процессы и помогаем компаниям расти с помощью современных IT-решений.',
    primaryCta: 'Наши услуги',
    secondaryCta: 'Связаться с нами',
  },

  about: {
    title: 'О компании',
    subtitle: 'Надёжный партнёр в цифровой трансформации',
    description:
      'НоваТех — команда инженеров, дизайнеров и аналитиков с более чем 10-летним опытом. Мы помогаем среднему и крупному бизнесу внедрять технологии, которые реально работают: от корпоративных порталов до сложных интеграций.',
    mission:
      'Наша миссия — делать технологии доступными и понятными, чтобы каждый клиент получал измеримый результат.',
    highlights: [
      'Индивидуальный подход к каждому проекту',
      'Прозрачные сроки и фиксированная стоимость',
      'Поддержка 24/7 после запуска',
    ],
  },

  services: {
    title: 'Услуги',
    subtitle: 'Полный цикл разработки — от идеи до запуска и поддержки',
    items: [
      {
        icon: 'code',
        image: 'images/portfolio-web.jpg',
        title: 'Веб-разработка',
        description:
          'Современные сайты и веб-приложения на React, Vue и Node.js с упором на скорость и UX.',
      },
      {
        icon: 'mobile',
        image: 'images/portfolio-mobile.jpg',
        title: 'Мобильные приложения',
        description:
          'Кроссплатформенные и нативные приложения для iOS и Android с единой кодовой базой.',
      },
      {
        icon: 'cloud',
        image: 'images/services-banner.jpg',
        title: 'Облачная инфраструктура',
        description:
          'Миграция в облако, настройка CI/CD, мониторинг и масштабирование под нагрузку.',
      },
      {
        icon: 'design',
        title: 'UI/UX дизайн',
        description:
          'Прототипы, дизайн-системы и интерфейсы, которые повышают конверсию и удержание.',
      },
      {
        icon: 'analytics',
        title: 'Аналитика и BI',
        description:
          'Дашборды, отчёты и интеграция данных для принятия решений на основе фактов.',
      },
      {
        icon: 'support',
        title: 'Техподдержка',
        description:
          'Сопровождение проектов, исправление инцидентов и развитие функционала по SLA.',
      },
    ],
  },

  portfolio: {
    title: 'Проекты',
    subtitle: 'Реальные кейсы, которые мы реализовали для клиентов',
    items: [
      {
        image: 'images/portfolio-web.jpg',
        tag: 'Веб-приложение',
        title: 'Платформа аналитики для ритейла',
        description:
          'Дашборд с KPI в реальном времени, интеграция с 1С и автоматические отчёты для 200+ магазинов.',
      },
      {
        image: 'images/portfolio-mobile.jpg',
        tag: 'Мобильное приложение',
        title: 'Финтех-приложение для инвестиций',
        description:
          'iOS и Android с биометрией, push-уведомлениями и синхронизацией портфеля в реальном времени.',
      },
      {
        image: 'images/about-team.jpg',
        tag: 'Корпоративный портал',
        title: 'Внутренний портал логистической компании',
        description:
          'Единая система для 500+ сотрудников: документооборот, трекинг грузов и HR-модуль.',
      },
    ],
  },

  features: {
    title: 'Почему выбирают нас',
    subtitle: 'Цифры и факты, которые говорят сами за себя',
    stats: [
      { value: '10+', label: 'лет на рынке' },
      { value: '150+', label: 'реализованных проектов' },
      { value: '98%', label: 'довольных клиентов' },
      { value: '24/7', label: 'техподдержка' },
    ],
    items: [
      {
        title: 'Экспертиза',
        description: 'Сертифицированные специалисты с опытом в финтехе, ритейле и логистике.',
      },
      {
        title: 'Скорость',
        description: 'Agile-подход: первый рабочий прототип уже через 2 недели.',
      },
      {
        title: 'Безопасность',
        description: 'Соответствие стандартам ISO 27001 и регулярные аудиты кода.',
      },
      {
        title: 'Партнёрство',
        description: 'Работаем как часть вашей команды, а не как внешний подрядчик.',
      },
    ],
  },

  contact: {
    title: 'Свяжитесь с нами',
    subtitle: 'Расскажите о вашем проекте — мы ответим в течение одного рабочего дня',
    form: {
      nameLabel: 'Имя',
      namePlaceholder: 'Иван Иванов',
      emailLabel: 'Email',
      emailPlaceholder: 'ivan@company.ru',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Опишите задачу или задайте вопрос...',
      submit: 'Отправить сообщение',
      sending: 'Отправка...',
      success: 'Спасибо! Мы получили ваше сообщение и скоро свяжемся с вами.',
      errors: {
        nameRequired: 'Укажите ваше имя',
        emailRequired: 'Укажите email',
        emailInvalid: 'Введите корректный email',
        messageRequired: 'Напишите сообщение',
        messageMin: 'Сообщение должно содержать не менее 10 символов',
      },
    },
    info: {
      address: 'г. Москва, ул. Тверская, 12, офис 405',
      phone: '+7 (495) 123-45-67',
      email: 'hello@novatech.ru',
      hours: 'Пн–Пт: 9:00 – 18:00',
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} НоваТех. Все права защищены.`,
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Услуги', href: '#services' },
      { label: 'Проекты', href: '#portfolio' },
      { label: 'Контакты', href: '#contact' },
    ],
    social: [
      { label: 'Telegram', href: 'https://t.me', icon: 'telegram' },
      { label: 'VK', href: 'https://vk.com', icon: 'vk' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    ],
  },
} as const
