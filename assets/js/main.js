(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const langButtons = [...document.querySelectorAll('.lang-btn')];

  if (year) year.textContent = new Date().getFullYear();

  // -----------------------------
  // Theme
  // -----------------------------
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme =
        root.dataset.theme === 'dark' ? 'light' : 'dark';

      root.dataset.theme = nextTheme;
      localStorage.setItem('portfolio-theme', nextTheme);
    });
  }

  // -----------------------------
  // Mobile navigation
  // -----------------------------
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');

      body.classList.toggle('nav-open', isOpen);

      menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!nav || !menuToggle) return;

      nav.classList.remove('open');
      body.classList.remove('nav-open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });

  // -----------------------------
  // Translation helpers
  // -----------------------------
  const setText = (selector, values) => {
    const elements = [
      ...document.querySelectorAll(selector)
    ];

    if (!Array.isArray(values)) {
      values = [values];
    }

    elements.forEach((element, index) => {
      const value = values[index];

      if (typeof value !== 'undefined') {
        element.textContent = value;
      }
    });
  };

  const setHTML = (selector, html) => {
    const element = document.querySelector(selector);

    if (element) {
      element.innerHTML = html;
    }
  };

  // -----------------------------
  // Translations
  // -----------------------------
  const translations = {
    en: {
      metaDescription:
        'Portfolio of Anis Ayari, Data Engineer specializing in cloud data platforms, Spark, AWS and Azure.',

      nav: [
        'Experience',
        'Projects',
        'Certifications',
        'Education',
        'Contact'
      ],

      heroEyebrow:
        'Data Engineer · Cloud & Data Platforms',

      heroTitle:
        'Building data platforms that are <span>reliable, scalable</span> and useful.',

      heroLead:
        'I build, industrialize and optimize cloud data platforms and data pipelines, combining data engineering expertise with a strong software development foundation.',

      heroActions: [
        'Explore my work ↘',
        'Let’s talk ↗'
      ],

      metrics: [
        'Years of experience',
        'Cloud ecosystems',
        'Major projects',     
      ],

      focus: [
        'Cloud Data Platforms',
        'Data Engineering',
        'Orchestration',
        'Automation',
        'Data Quality',
        'Backend & APIs'
      ],

      expertiseTitles: [
        'Cloud Data Platforms',
        'Data Workflows',
        'Software Engineering'
      ],

      expertiseText: [
        'Design and industrialization of robust data platforms on AWS and Azure.',
        'Automated, observable and maintainable pipelines from ingestion to serving.',
        'Backend development, APIs, testing and clean engineering practices applied to data.'
      ],

      experienceKicker:
        'Work experience',

      experienceTitle:
        'From data ingestion to business impact.',

      experienceIntro:
        'Client missions and product-oriented projects where engineering decisions translated into measurable operational improvements.',

      currentPosition:
        'Current position',

      jemsDescription:
        'Cloud data platforms, pipeline industrialization, workflow automation and data quality for client missions and internal projects.',

      presentDate:
        'Nov. 2024 — Present',

      clientMission: [
        'Client mission · JEMS',
        'Client mission · JEMS'
      ],

      dates: [
        'Oct. 2025 — May 2026',
        'Jan. 2025 — Aug. 2025',
        'Mar. 2022 — Feb. 2024',
        'Feb. 2020 — May 2021',
        'Feb. 2018 — Jun. 2018'
      ],

      summaries: [
        'Territorial data platform centralizing and exposing reliable geospatial datasets for local authorities and cartographic use cases.',

        'Operational data platform centralizing ERP data across the JUSSIEU secours network and automating curated datasets for Power BI reporting.',

        'E-commerce data workflows focused on product catalog ingestion, enrichment, quality control and operational automation.',

        'Development of a web application for telecom network quality-of-service monitoring, combining data processing, REST APIs, machine-learning models and interactive dashboards for performance analysis and anomaly detection.',

        'Web application centralizing fiber-optic project data, field interventions and operational progress tracking.'
      ],

      impactTexts: [
        'Faster ingestion after Spark optimizations',

        'Ingestion errors automatically detected and routed to SQS',

        'Automated reporting instead of weekly manual production',

        'Reduction in analytical processing time through Spark optimization',

        'Reduction in product listing errors through automated controls',

        'Of previously manual catalog-update work automated',

        'Continuous automated anomaly detection',

        'Faster incident response through real-time alerts',

        'Estimated reduction in manual project-data consolidation',

        'Estimated improvement in project status update turnaround'
      ],

      daily:
        'Daily',

      deliveredHeading:
        'What I delivered',

      stackHeading:
        'Core stack',

      deliveredLists: [
        [
          'Multi-source ingestion pipelines with AWS Glue.',
          'Bronze, Silver and Gold layers processing for geospatial datasets.',
          'Orchestration with Step Functions and EventBridge.',
          'Automated data-quality controls and rejected-record workflows.',
          'Curated data exposure through GeoServer.'
        ],

        [
          'Azure Synapse ingestion from Lomaco and Synovo ERP systems.',
          'Transformation jobs with PySpark and Spark SQL.',
          'End-to-end workflow automation from ingestion to curated layers.',
          'Performance optimization for analytical processing and reporting.',
          'Reliable datasets for business and operational steering.'
        ],

        [
          'Python-based scripts for product extraction from B2B and B2C websites.',
          'Cleaning, transformation and integration of product data.',
          'Anomaly, duplicate and inconsistency detection.',
          'Automated quality controls and catalog reliability monitoring.'
        ],

        [
          'Web application backend and REST APIs using Django and Django Rest Framework.',
          'Data processing workflows for network performance data collection, cleaning and transformation.',
          'Integration of machine-learning models for network anomaly detection and performance prediction.',
          'Interactive dashboards for KPI monitoring, real-time alerts and model outputs.'
        ],

        [
          'Business requirements and technical specifications.',
          'Application architecture and database model.',
          'Backend components and RESTful APIs.',
          'Project and intervention tracking features.'
        ]
      ],

      projectsKicker:
        'Personal projects',

      projectsTitle:
        'Engineering beyond client delivery.',

      projectsIntro:
        'A selection of projects covering distributed processing, forecasting, machine learning and backend development.',

      projectDescriptions: [
        'Distributed processing workflow for scalable log-data analysis.',

        'Time-series modeling for operational performance prediction.',

        'Distributed machine-learning implementation with Spark MLlib.',

        'Regression modeling and experimentation in Python.',

        'Backend web-development project built with Django.'
      ],

      learningKicker:
        'Continuous learning',

      certificationsTitle:
        'Certifications & accreditations.',

      certificationsIntro:
        'Focused on analytics engineering, data pipelines, governance and distributed data systems.',

      certificationDescriptions: [
        'Modeling, testing, documentation, debugging, CI/CD and analytics engineering workflows.',

        'Core dbt concepts, models, tests, documentation and workflow.',

        'Data governance, risk, compliance and security foundations.',

        'Pipeline orchestration and automation.',

        'Foundational tools used across data-science projects.',

        'Python ecosystem, data-science concepts and project foundations.',

        'Big-data and distributed-processing concepts and tools.'
      ],

      academicKicker:
        'Academic background',

      academicTitle:
        'A foundation spanning data, technology and business.',

      educationTitles: [
        'MBA Data Solutions Architect',
        'Master’s Degree in Big Data Analytics and E-commerce',
        'Bachelor’s Degree in Business Information Systems'
      ],

      contactKicker:
        'Get in touch',

      contactTitle:
        'Let’s build something useful with data.',

      contactText:
        'Open to Data Engineering opportunities, cloud data-platform projects and technically ambitious environments.',

      phone:
        'Phone',

      location:
        'Location',

      backTop:
        'Back to top ↑',

      themeLabel:
        'Switch color theme',

      menuLabel:
        'Open navigation',

      navLabel:
        'Main navigation',

      langLabel:
        'Language selector',

      profileLabel:
        'Professional profile summary',

      coreTechLabel:
        'Core technologies',

      expertiseLabel:
        'Expertise'
    },

    // =============================
    // FRENCH
    // =============================
    fr: {
      metaDescription:
        'Portfolio d’Anis Ayari, Data Engineer spécialisé dans les plateformes data cloud, Spark, AWS et Azure.',

      nav: [
        'Expérience',
        'Projets',
        'Certifications',
        'Formation',
        'Contact'
      ],

      heroEyebrow:
        'Data Engineer · Cloud & Plateformes Data',

      heroTitle:
        'Je construis des plateformes data <span>fiables, scalables</span> et utiles.',

      heroLead:
        'Je conçois, industrialise et optimise des plateformes data cloud et des pipelines de données, en combinant une expertise en Data Engineering avec une solide expérience en développement logiciel.',

      heroActions: [
        'Découvrir mon parcours ↘',
        'Échangeons ↗'
      ],

      metrics: [
        'Écosystèmes cloud',
        'Projets majeurs',
        'Gain maximal d’ingestion'
      ],

      focus: [
        'Plateformes Data Cloud',
        'Data Engineering',
        'Orchestration',
        'Automatisation',
        'Qualité des données',
        'Backend & APIs'
      ],

      expertiseTitles: [
        'Plateformes Data Cloud',
        'Workflows Data',
        'Software Engineering'
      ],

      expertiseText: [
        'Conception et industrialisation de plateformes data robustes sur AWS et Azure.',

        'Pipelines automatisés, observables et maintenables, de l’ingestion jusqu’à l’exposition des données.',

        'Développement backend, APIs, tests et bonnes pratiques d’ingénierie appliquées à la data.'
      ],

      experienceKicker:
        'Expérience professionnelle',

      experienceTitle:
        'De l’ingestion des données à l’impact métier.',

      experienceIntro:
        'Missions client et projets orientés produit où les choix d’ingénierie se traduisent par des améliorations opérationnelles mesurables.',

      currentPosition:
        'Poste actuel',

      jemsDescription:
        'Plateformes data cloud, industrialisation de pipelines, automatisation des workflows et qualité des données pour des missions client et des projets internes.',

      presentDate:
        'Nov. 2024 — Aujourd’hui',

      clientMission: [
        'Mission client · JEMS',
        'Mission client · JEMS'
      ],

      dates: [
        'Oct. 2025 — Mai 2026',
        'Janv. 2025 — Août 2025',
        'Mars 2022 — Fév. 2024',
        'Fév. 2020 — Mai 2021',
        'Fév. 2018 — Juin 2018'
      ],

      summaries: [
        'Plateforme data territoriale centralisant et exposant des jeux de données géospatiales fiables pour les collectivités et les usages cartographiques.',

        'Plateforme data opérationnelle centralisant les données ERP du réseau JUSSIEU secours et automatisant les jeux de données préparés pour le reporting Power BI.',

        'Workflows data e-commerce dédiés à l’ingestion, l’enrichissement, au contrôle qualité et à l’automatisation opérationnelle du catalogue produit.',

        'Développement d’une application web de supervision de la qualité de service des réseaux télécoms, combinant traitement de données, APIs REST, modèles de machine learning et dashboards interactifs pour l’analyse des performances et la détection d’anomalies.',

        'Application web centralisant les données des projets fibre optique, les interventions terrain et le suivi de l’avancement opérationnel.'
      ],

      impactTexts: [
        'Ingestion plus rapide grâce aux optimisations Spark',

        'Des erreurs d’ingestion détectées automatiquement et envoyées vers SQS',

        'Reporting automatisé quotidien au lieu d’une production manuelle hebdomadaire',

        'Réduction du temps de traitement analytique grâce aux optimisations Spark',

        'Réduction des erreurs de fiches produit grâce aux contrôles automatisés',

        'Du travail manuel de mise à jour du catalogue automatisé',

        'Détection automatisée et continue des anomalies',

        'Réaction aux incidents plus rapide grâce aux alertes en temps réel',

        'Réduction estimée de la consolidation manuelle des données projet',

        'Amélioration estimée du délai de mise à jour de l’avancement projet'
      ],

      daily:
        'Quotidien',

      deliveredHeading:
        'Réalisations',

      stackHeading:
        'Stack technique',

      deliveredLists: [
        [
          'Développement de pipelines d’ingestion multi-sources avec AWS Glue.',

          'Traitement de données géospatiales à travers les couches Bronze, Silver et Gold.',

          'Orchestration des workflows avec Step Functions et EventBridge.',

          'Mise en place de contrôles qualité automatisés et de workflows de gestion des rejets.',

          'Exposition des données préparées via GeoServer.'
        ],

        [
          'Ingestion via Azure Synapse depuis les ERP Lomaco et Synovo.',

          'Développement de traitements de transformation avec PySpark et Spark SQL.',

          'Automatisation end-to-end des workflows, de l’ingestion aux couches préparées.',

          'Optimisation des performances pour les traitements analytiques et le reporting.',

          'Mise à disposition de jeux de données fiables pour le pilotage métier et opérationnel.'
        ],

        [
          'Développement de scripts Python pour extraire les données produit de sites B2B et B2C.',

          'Nettoyage, transformation et intégration des données produit.',

          'Détection des anomalies, doublons et incohérences.',

          'Automatisation des contrôles qualité et du suivi de la fiabilité du catalogue.'
        ],

        [
          'Développement du backend de l’application web et des APIs REST avec Django et Django Rest Framework.',

          'Création de workflows de traitement pour la collecte, le nettoyage et la transformation des données de performance réseau.',

          'Intégration de modèles de machine learning pour la détection d’anomalies réseau et la prédiction des performances.',

          'Développement de dashboards interactifs pour le suivi des KPIs, des alertes en temps réel et des résultats des modèles.'
        ],

        [
          'Recueil des besoins métier et rédaction des spécifications techniques.',

          'Définition de l’architecture applicative et du modèle de données.',

          'Développement des composants backend et des APIs RESTful.',

          'Développement des fonctionnalités de suivi des projets et des interventions.'
        ]
      ],

      projectsKicker:
        'Projets personnels',

      projectsTitle:
        'L’ingénierie au-delà des missions client.',

      projectsIntro:
        'Une sélection de projets couvrant le traitement distribué, la prévision, le machine learning et le développement backend.',

      projectDescriptions: [
        'Workflow de traitement distribué pour l’analyse scalable de données de logs.',

        'Modélisation de séries temporelles pour la prédiction de métriques de performance opérationnelle.',

        'Implémentation de machine learning distribué avec Spark MLlib.',

        'Modélisation par régression et expérimentation en Python.',

        'Projet de développement web backend réalisé avec Django.'
      ],

      learningKicker:
        'Apprentissage continu',

      certificationsTitle:
        'Certifications & accréditations.',

      certificationsIntro:
        'Un parcours axé sur l’Analytics Engineering, les pipelines data, la gouvernance et les systèmes de données distribués.',

      certificationDescriptions: [
        'Modélisation, tests, documentation, debugging, CI/CD et workflows d’Analytics Engineering.',

        'Concepts fondamentaux de dbt, modèles, tests, documentation et workflow.',

        'Fondamentaux de la gouvernance, des risques, de la conformité et de la sécurité des données.',

        'Orchestration et automatisation de pipelines.',

        'Outils fondamentaux utilisés dans les projets de data science.',

        'Écosystème Python, concepts de data science et bases de réalisation de projets.',

        'Concepts et outils du Big Data et du traitement distribué.'
      ],

      academicKicker:
        'Parcours académique',

      academicTitle:
        'Une formation à l’intersection de la data, de la technologie et du business.',

      educationTitles: [
        'MBA Data Solutions Architect',
        'Master en Big Data Analytics et E-commerce',
        'Licence en Informatique de Gestion'
      ],

      contactKicker:
        'Me contacter',

      contactTitle:
        'Construisons quelque chose d’utile avec la data.',

      contactText:
        'Ouvert aux opportunités en Data Engineering, aux projets de plateformes data cloud et aux environnements techniquement ambitieux.',

      phone:
        'Téléphone',

      location:
        'Localisation',

      backTop:
        'Retour en haut ↑',

      themeLabel:
        'Changer le thème de couleur',

      menuLabel:
        'Ouvrir la navigation',

      navLabel:
        'Navigation principale',

      langLabel:
        'Sélecteur de langue',

      profileLabel:
        'Résumé du profil professionnel',

      coreTechLabel:
        'Technologies principales',

      expertiseLabel:
        'Expertise'
    }
  };

  // -----------------------------
  // Apply language
  // -----------------------------
  function applyLanguage(lang) {
    const t =
      translations[lang] || translations.en;

    root.lang = lang;

    document.title =
      'Anis AYARI — Data Engineer';

    const metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        t.metaDescription
      );
    }

    // Navigation
    setText(
      '.nav-links a',
      t.nav
    );

    // Hero
    setText(
      '.eyebrow',
      t.heroEyebrow
    );

    setHTML(
      '.hero-copy h1',
      t.heroTitle
    );

    setText(
      '.hero-lead',
      t.heroLead
    );

    setText(
      '.hero-actions .button',
      t.heroActions
    );

    setText(
      '.profile-metrics div span',
      t.metrics
    );

    setText(
      '.profile-focus span',
      t.focus
    );

    // Expertise
    setText(
      '.intro-strip article h3',
      t.expertiseTitles
    );

    setText(
      '.intro-strip article p',
      t.expertiseText
    );

    // Experience heading
    setText(
      '#experience .section-heading .section-kicker',
      t.experienceKicker
    );

    setText(
      '#experience .section-heading h2',
      t.experienceTitle
    );

    setText(
      '#experience .section-heading > p',
      t.experienceIntro
    );

    // JEMS
    setText(
      '.company-overline',
      t.currentPosition
    );

    setText(
      '.company-banner-copy p',
      t.jemsDescription
    );

    setText(
      '.company-banner-copy > span',
      t.presentDate
    );

    // Experience metadata
    const metas = [
      ...document.querySelectorAll(
        '.case-meta'
      )
    ];

    if (metas[0]) {
      metas[0].children[0].textContent =
        t.clientMission[0];
    }

    if (metas[1]) {
      metas[1].children[0].textContent =
        t.clientMission[1];
    }

    metas.forEach(
      (meta, index) => {
        if (
          meta.children[1] &&
          t.dates[index]
        ) {
          meta.children[1].textContent =
            t.dates[index];
        }
      }
    );

    // Experience descriptions
    setText(
      '.case-summary',
      t.summaries
    );

    // Impact results
    setText(
      '.impact-box span',
      t.impactTexts
    );

    const impactStrong = [
      ...document.querySelectorAll(
        '.impact-box strong'
      )
    ];

    // Keolis "Daily"
    if (impactStrong[2]) {
      impactStrong[2].textContent =
        t.daily;
    }

    // Delivered + stack
    document
      .querySelectorAll('.case-study')
      .forEach(
        (study, studyIndex) => {
          const headings =
            study.querySelectorAll(
              '.case-columns h4'
            );

          if (headings[0]) {
            headings[0].textContent =
              t.deliveredHeading;
          }

          if (headings[1]) {
            headings[1].textContent =
              t.stackHeading;
          }

          const listItems =
            study.querySelectorAll(
              '.case-columns > div:first-child li'
            );

          const translated =
            t.deliveredLists[
              studyIndex
            ] || [];

          listItems.forEach(
            (li, itemIndex) => {
              if (
                translated[itemIndex]
              ) {
                li.textContent =
                  translated[
                    itemIndex
                  ];
              }
            }
          );
        }
      );

    // Projects
    setText(
      '#projects .section-kicker',
      t.projectsKicker
    );

    setText(
      '#projects .section-heading h2',
      t.projectsTitle
    );

    setText(
      '#projects .section-heading > p',
      t.projectsIntro
    );

    setText(
      '.project-tile p',
      t.projectDescriptions
    );

    // Certifications
    setText(
      '#certifications .section-kicker',
      t.learningKicker
    );

    setText(
      '#certifications .split-heading h2',
      t.certificationsTitle
    );

    setText(
      '#certifications .split-heading p',
      t.certificationsIntro
    );

    setText(
      '.credential-list .credential-item p',
      t.certificationDescriptions
    );

    // Education
    setText(
      '#education .section-kicker',
      t.academicKicker
    );

    setText(
      '#education .section-heading h2',
      t.academicTitle
    );

    setText(
      '.education-row h3',
      t.educationTitles
    );

    // Contact
    setText(
      '#contact .section-kicker',
      t.contactKicker
    );

    setText(
      '#contact .contact-copy h2',
      t.contactTitle
    );

    setText(
      '#contact .contact-copy > p',
      t.contactText
    );

    const contactLabels =
      document.querySelectorAll(
        '.contact-details > * > span'
      );

    if (contactLabels[0]) {
      contactLabels[0].textContent =
        t.phone;
    }

    if (contactLabels[3]) {
      contactLabels[3].textContent =
        t.location;
    }

    setText(
      '.site-footer > a',
      t.backTop
    );

    // Accessibility labels
    const navShell =
      document.querySelector(
        '.nav-shell'
      );

    const languageSwitcher =
      document.querySelector(
        '.language-switcher'
      );

    const heroPanel =
      document.querySelector(
        '.hero-panel'
      );

    const heroStack =
      document.querySelector(
        '.hero-stack'
      );

    const introStrip =
      document.querySelector(
        '.intro-strip'
      );

    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        t.themeLabel
      );
    }

    if (menuToggle) {
      menuToggle.setAttribute(
        'aria-label',
        t.menuLabel
      );
    }

    if (navShell) {
      navShell.setAttribute(
        'aria-label',
        t.navLabel
      );
    }

    if (languageSwitcher) {
      languageSwitcher.setAttribute(
        'aria-label',
        t.langLabel
      );
    }

    if (heroPanel) {
      heroPanel.setAttribute(
        'aria-label',
        t.profileLabel
      );
    }

    if (heroStack) {
      heroStack.setAttribute(
        'aria-label',
        t.coreTechLabel
      );
    }

    if (introStrip) {
      introStrip.setAttribute(
        'aria-label',
        t.expertiseLabel
      );
    }

    // Active language button
    langButtons.forEach(
      (button) => {
        const active =
          button.dataset.lang === lang;

        button.classList.toggle(
          'active',
          active
        );

        button.setAttribute(
          'aria-pressed',
          String(active)
        );
      }
    );

    // Save selected language
    localStorage.setItem(
      'portfolio-language',
      lang
    );
  }

  // -----------------------------
  // Language buttons
  // -----------------------------
  langButtons.forEach(
    (button) => {
      button.addEventListener(
        'click',
        () => {
          applyLanguage(
            button.dataset.lang
          );
        }
      );
    }
  );

  // -----------------------------
  // Initial language
  // -----------------------------
  const savedLanguage =
    localStorage.getItem(
      'portfolio-language'
    );

  const browserLanguage =
    navigator.language &&
    navigator.language
      .toLowerCase()
      .startsWith('fr')
      ? 'fr'
      : 'en';

  applyLanguage(
    savedLanguage === 'fr' ||
    savedLanguage === 'en'
      ? savedLanguage
      : browserLanguage
  );

  // -----------------------------
  // Header scroll state
  // -----------------------------
  window.addEventListener(
    'scroll',
    () => {
      if (header) {
        header.classList.toggle(
          'scrolled',
          window.scrollY > 24
        );
      }
    },
    {
      passive: true
    }
  );

  // -----------------------------
  // Reveal animations
  // -----------------------------
  if (
    'IntersectionObserver' in window
  ) {
    const revealObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  'visible'
                );

                revealObserver.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            '0px 0px -40px'
        }
      );

    document
      .querySelectorAll('.reveal')
      .forEach(
        (element) =>
          revealObserver.observe(
            element
          )
      );

    // -----------------------------
    // Active navigation section
    // -----------------------------
    const sectionObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              navLinks.forEach(
                (link) => {
                  const target =
                    link
                      .getAttribute(
                        'href'
                      )
                      .slice(1);

                  link.classList.toggle(
                    'active',
                    target ===
                      entry.target.id
                  );
                }
              );
            }
          );
        },
        {
          rootMargin:
            '-35% 0px -55%',
          threshold: 0
        }
      );

    sections.forEach(
      (section) =>
        sectionObserver.observe(
          section
        )
    );
  } else {
    document
      .querySelectorAll('.reveal')
      .forEach(
        (element) =>
          element.classList.add(
            'visible'
          )
      );
  }
})();