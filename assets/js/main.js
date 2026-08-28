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
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
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
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!nav || !menuToggle) return;
      nav.classList.remove('open');
      body.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // -----------------------------
  // Translation helpers
  // -----------------------------
  const setText = (selector, values) => {
    const elements = [...document.querySelectorAll(selector)];
    if (!Array.isArray(values)) values = [values];
    elements.forEach((element, index) => {
      const value = values[index];
      if (typeof value !== 'undefined') element.textContent = value;
    });
  };

  const setHTML = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  };

  const translations = {
    en: {
      metaDescription: 'Portfolio of Anis Ayari, Data Engineer specializing in cloud data platforms, Spark, AWS and Azure.',
      nav: ['Experience', 'Projects', 'Certifications', 'Education', 'Contact'],
      heroEyebrow: 'Data Engineer · Cloud & Data Platforms',
      heroTitle: 'Building data platforms that are <span>reliable, scalable</span> and useful.',
      heroLead: 'I build, industrialize and optimize cloud data platforms and data pipelines, combining data engineering expertise with a strong software development foundation.',
      heroActions: ['Explore my work ↘', 'Let’s talk ↗'],
      metrics: ['Years of experience', 'Cloud ecosystems', 'Major projects'],
      focus: ['Cloud Data Platforms', 'Data Engineering', 'Orchestration', 'Automation', 'Data Quality', 'Backend & APIs'],
      expertiseTitles: ['Cloud Data Platforms', 'Data Workflows', 'Software Engineering'],
      expertiseText: [
        'Design and industrialization of robust data platforms on AWS and Azure.',
        'Automated, observable and maintainable pipelines from ingestion to serving.',
        'Backend development, APIs, testing and clean engineering practices applied to data.'
      ],
      experienceKicker: 'Work experience',
      experienceTitle: 'From data ingestion to business impact.',
      experienceIntro: 'Client missions and product-oriented projects where engineering decisions translated into measurable operational improvements.',
      currentPosition: 'Current position',
      jemsDescription: 'Cloud data platforms, pipeline industrialization, workflow automation and data quality for client missions and internal projects.',
      presentDate: 'Nov. 2024 — Present',
      clientMission: ['Client mission · JEMS', 'Client mission · JEMS'],
      dates: ['Oct. 2025 — May 2026', 'Jan. 2025 — Aug. 2025', 'Mar. 2022 — Feb. 2024', 'Feb. 2020 — May 2021', 'Feb. 2018 — Jun. 2018'],
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
      daily: 'Daily',
      deliveredHeading: 'What I delivered',
      stackHeading: 'Core stack',
      deliveredLists: [
        [
          'Multi-source ingestion pipelines with AWS Glue.',
          'Bronze, Silver and Gold layers processing for geospatial datasets.',
          'Workflow orchestration with Step Functions and EventBridge.',
          'Automated data-quality controls and rejected-record workflows.',
          'Curated data exposure through Aurora and GeoServer.',
          'CI/CD workflows with GitHub Actions and AWS CLI to automate the packaging and deployment of AWS Glue jobs and Lambda functions.'

        ],
        [
          'Azure Synapse ingestion from Lomaco and Synovo ERP systems.',
          'Transformation jobs with PySpark and Spark SQL.',
          'End-to-end workflow orchestration from ingestion to curated layers with Synapse Pipelines.',
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
          'Interactive dashboards for KPI monitoring, real-time alerts and model outputs.',
          'GitLab CI/CD pipelines to automate application integration, validation and deployment workflows.'
        ],
        [
          'Business requirements and technical specifications.',
          'Application architecture and database model.',
          'Backend components and RESTful APIs.',
          'Project and intervention tracking features.'
        ]
      ],
      projectsKicker: 'Personal projects',
      projectsTitle: 'Engineering beyond client delivery.',
      projectsIntro: 'A selection of projects covering distributed processing, forecasting, machine learning and backend development.',
      projectDescriptions: [
        'Distributed processing workflow for scalable log-data analysis.',
        'Time-series modeling for operational performance prediction.',
        'Distributed machine-learning implementation with Spark MLlib.',
        'Regression modeling and experimentation in Python.',
        'Backend web-development project built with Django.'
      ],
      learningKicker: 'Continuous learning',
      certificationsTitle: 'Certifications & accreditations.',
      certificationsIntro: 'Focused on analytics engineering, data pipelines, governance and distributed data systems.',
      certificationDescriptions: [
        'Modeling, testing, documentation, debugging, CI/CD and analytics engineering workflows.',
        'Core dbt concepts, models, tests, documentation and workflow.',
        'Data governance, risk, compliance and security foundations.',
        'Pipeline orchestration and automation.',
        'Foundational tools used across data-science projects.',
        'Python ecosystem, data-science concepts and project foundations.',
        'Big-data and distributed-processing concepts and tools.'
      ],
      academicKicker: 'Academic background',
      academicTitle: 'A foundation spanning data, technology and business.',
      educationTitles: [
        'MBA Data Solutions Architect',
        'Master’s Degree in Big Data Analytics and E-commerce',
        'Bachelor’s Degree in Business Information Systems'
      ],
      contactKicker: 'Get in touch',
      contactTitle: 'Let’s build something useful with data.',
      contactText: 'Open to Data Engineering opportunities, cloud data-platform projects and technically ambitious environments.',
      phone: 'Phone',
      location: 'Location',
      backTop: 'Back to top ↑',
      themeLabel: 'Switch color theme',
      menuLabel: 'Open navigation',
      navLabel: 'Main navigation',
      langLabel: 'Language selector',
      profileLabel: 'Professional profile summary',
      coreTechLabel: 'Core technologies',
      expertiseLabel: 'Expertise'
    },

    fr: {
      metaDescription: 'Portfolio d’Anis Ayari, Data Engineer spécialisé dans les plateformes data cloud, Spark, AWS et Azure.',
      nav: ['Expérience', 'Projets', 'Certifications', 'Formation', 'Contact'],
      heroEyebrow: 'Data Engineer · Cloud & Plateformes Data',
      heroTitle: 'Je construis des plateformes data <span>fiables, scalables</span> et utiles.',
      heroLead: 'Je conçois, industrialise et optimise des plateformes data cloud et des pipelines de données, en combinant une expertise en Data Engineering avec une solide expérience en développement logiciel.',
      heroActions: ['Découvrir mon parcours ↘', 'Échangeons ↗'],
      metrics: ["Années d'expérience", 'Écosystèmes cloud', 'Projets majeurs'],
      focus: ['Plateformes Data Cloud', 'Data Engineering', 'Orchestration', 'Automatisation', 'Qualité des données', 'Backend & APIs'],
      expertiseTitles: ['Plateformes Data Cloud', 'Workflows Data', 'Software Engineering'],
      expertiseText: [
        'Conception et industrialisation de plateformes data robustes sur AWS et Azure.',
        'Pipelines automatisés, observables et maintenables, de l’ingestion jusqu’à l’exposition des données.',
        'Développement backend, APIs, tests et bonnes pratiques d’ingénierie appliquées à la data.'
      ],
      experienceKicker: 'Expérience professionnelle',
      experienceTitle: 'De l’ingestion des données à l’impact métier.',
      experienceIntro: 'Missions client et projets orientés produit où les choix d’ingénierie se traduisent par des améliorations opérationnelles mesurables.',
      currentPosition: 'Poste actuel',
      jemsDescription: 'Plateformes data cloud, industrialisation de pipelines, automatisation des workflows et qualité des données pour des missions client et des projets internes.',
      presentDate: 'Nov. 2024 — Aujourd’hui',
      clientMission: ['Mission client · JEMS', 'Mission client · JEMS'],
      dates: ['Oct. 2025 — Mai 2026', 'Janv. 2025 — Août 2025', 'Mars 2022 — Fév. 2024', 'Fév. 2020 — Mai 2021', 'Fév. 2018 — Juin 2018'],
      summaries: [
        'Développement d’une plateforme data Lakehouse territoriale centralisant et exposant des jeux de données géospatiales fiables pour les collectivités et les usages cartographiques.',
        'Développement d’une plateforme data opérationnelle centralisant les données ERP du réseau JUSSIEU secours et automatisant les jeux de données préparés pour le reporting Power BI.',
        'Développement des Workflows data e-commerce dédiés à l’ingestion, l’enrichissement, au contrôle qualité et à l’automatisation opérationnelle du catalogue produit.',
        'Conception et développement d’une application web de supervision de la qualité de service des réseaux télécoms, combinant traitement de données, APIs REST, modèles de machine learning et dashboards interactifs pour l’analyse des performances et la détection d’anomalies.',
        'Conception et développement d’une Application web centralisant les données des projets fibre optique, les interventions terrain et le suivi de l’avancement opérationnel.'
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
      daily: 'Quotidien',
      deliveredHeading: 'Réalisations',
      stackHeading: 'Stack technique',
      deliveredLists: [
        [
          'Développement de pipelines d’ingestion multi-sources avec AWS Glue.',
          'Traitement de données géospatiales à travers les couches Bronze, Silver et Gold.',
          'Orchestration des workflows avec Step Functions et EventBridge.',
          'Mise en place de contrôles qualité automatisés et de workflows de gestion des rejets.',
          'Exposition des données préparées via Aurora et GeoServer.',
          'Mise en place de workflows CI/CD avec GitHub Actions et AWS CLI pour automatiser le packaging et le déploiement des jobs AWS Glue et des fonctions Lambda.'
        ],
        [
          'Ingestion via Azure Synapse depuis les ERP Lomaco et Synovo.',
          'Développement de traitements de transformation avec PySpark et Spark SQL.',
          'Automatisation end-to-end des workflows, de l’ingestion aux couches préparées avec Synapse Pipelines.',
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
          'Développement de dashboards interactifs pour le suivi des KPIs, des alertes en temps réel et des résultats des modèles.',
          'Mise en place de pipelines CI/CD avec GitLab pour automatiser l’intégration, la validation et le déploiement de l’application.'
        ],
        [
          'Recueil des besoins métier et rédaction des spécifications techniques.',
          'Définition de l’architecture applicative et du modèle de données.',
          'Développement des composants backend et des APIs RESTful.',
          'Développement des fonctionnalités de suivi des projets et des interventions.'
        ]
      ],
      projectsKicker: 'Projets personnels',
      projectsTitle: 'L’ingénierie au-delà des missions client.',
      projectsIntro: 'Une sélection de projets couvrant le traitement distribué, la prévision, le machine learning et le développement backend.',
      projectDescriptions: [
        'Workflow de traitement distribué pour l’analyse scalable de données de logs.',
        'Modélisation de séries temporelles pour la prédiction de métriques de performance opérationnelle.',
        'Implémentation de machine learning distribué avec Spark MLlib.',
        'Modélisation par régression et expérimentation en Python.',
        'Projet de développement web backend réalisé avec Django.'
      ],
      learningKicker: 'Apprentissage continu',
      certificationsTitle: 'Certifications & accréditations.',
      certificationsIntro: 'Un parcours axé sur l’Analytics Engineering, les pipelines data, la gouvernance et les systèmes de données distribués.',
      certificationDescriptions: [
        'Modélisation, tests, documentation, debugging, CI/CD et workflows d’Analytics Engineering.',
        'Concepts fondamentaux de dbt, modèles, tests, documentation et workflow.',
        'Fondamentaux de la gouvernance, des risques, de la conformité et de la sécurité des données.',
        'Orchestration et automatisation de pipelines.',
        'Outils fondamentaux utilisés dans les projets de data science.',
        'Écosystème Python, concepts de data science et bases de réalisation de projets.',
        'Concepts et outils du Big Data et du traitement distribué.'
      ],
      academicKicker: 'Parcours académique',
      academicTitle: 'Une formation à l’intersection de la data, de la technologie et du business.',
      educationTitles: [
        'MBA Data Solutions Architect',
        'Master en Big Data Analytics et E-commerce',
        'Licence en Informatique de Gestion'
      ],
      contactKicker: 'Me contacter',
      contactTitle: 'Construisons quelque chose d’utile avec la data.',
      contactText: 'Ouvert aux opportunités en Data Engineering, aux projets de plateformes data cloud et aux environnements techniquement ambitieux.',
      phone: 'Téléphone',
      location: 'Localisation',
      backTop: 'Retour en haut ↑',
      themeLabel: 'Changer le thème de couleur',
      menuLabel: 'Ouvrir la navigation',
      navLabel: 'Navigation principale',
      langLabel: 'Sélecteur de langue',
      profileLabel: 'Résumé du profil professionnel',
      coreTechLabel: 'Technologies principales',
      expertiseLabel: 'Expertise'
    }
  };

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    root.lang = lang;

    document.title = 'Anis AYARI — Data Engineer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t.metaDescription);

    setText('.nav-links a', t.nav);
    setText('.eyebrow', t.heroEyebrow);
    setHTML('.hero-copy h1', t.heroTitle);
    setText('.hero-lead', t.heroLead);
    setText('.hero-actions .button', t.heroActions);
    setText('.profile-metrics div span', t.metrics);
    setText('.profile-focus span', t.focus);
    setText('.intro-strip article h3', t.expertiseTitles);
    setText('.intro-strip article p', t.expertiseText);

    setText('#experience .section-heading .section-kicker', t.experienceKicker);
    setText('#experience .section-heading h2', t.experienceTitle);
    setText('#experience .section-heading > p', t.experienceIntro);
    setText('.company-overline', t.currentPosition);
    setText('.company-banner-copy p', t.jemsDescription);
    setText('.company-banner-copy > span', t.presentDate);

    const metas = [...document.querySelectorAll('.case-meta')];
    if (metas[0]) metas[0].children[0].textContent = t.clientMission[0];
    if (metas[1]) metas[1].children[0].textContent = t.clientMission[1];
    metas.forEach((meta, index) => {
      if (meta.children[1] && t.dates[index]) meta.children[1].textContent = t.dates[index];
    });

    setText('.case-summary', t.summaries);
    setText('.impact-box span', t.impactTexts);
    const impactStrong = [...document.querySelectorAll('.impact-box strong')];
    if (impactStrong[2]) impactStrong[2].textContent = t.daily;

    document.querySelectorAll('.case-study').forEach((study, studyIndex) => {
      const headings = study.querySelectorAll('.case-columns h4');
      if (headings[0]) headings[0].textContent = t.deliveredHeading;
      if (headings[1]) headings[1].textContent = t.stackHeading;

      const listItems = study.querySelectorAll('.case-columns > div:first-child li');
      const translated = t.deliveredLists[studyIndex] || [];
      listItems.forEach((li, itemIndex) => {
        if (translated[itemIndex]) li.textContent = translated[itemIndex];
      });
    });

    setText('#projects .section-kicker', t.projectsKicker);
    setText('#projects .section-heading h2', t.projectsTitle);
    setText('#projects .section-heading > p', t.projectsIntro);
    setText('.project-list-item p', t.projectDescriptions);

    setText('#certifications .section-kicker', t.learningKicker);
    setText('#certifications .split-heading h2', t.certificationsTitle);
    setText('#certifications .split-heading p', t.certificationsIntro);
    setText('.credential-list .credential-item p', t.certificationDescriptions);

    setText('#education .section-kicker', t.academicKicker);
    setText('#education .section-heading h2', t.academicTitle);
    setText('.education-row h3', t.educationTitles);

    setText('#contact .section-kicker', t.contactKicker);
    setText('#contact .contact-copy h2', t.contactTitle);
    setText('#contact .contact-copy > p', t.contactText);
    const contactLabels = document.querySelectorAll('.contact-details > * > span');
    if (contactLabels[0]) contactLabels[0].textContent = t.phone;
    if (contactLabels[3]) contactLabels[3].textContent = t.location;
    setText('.site-footer > a', t.backTop);

    const navShell = document.querySelector('.nav-shell');
    const languageSwitcher = document.querySelector('.language-switcher');
    const heroPanel = document.querySelector('.hero-panel');
    const heroStack = document.querySelector('.hero-stack');
    const introStrip = document.querySelector('.intro-strip');

    if (themeToggle) themeToggle.setAttribute('aria-label', t.themeLabel);
    if (menuToggle) menuToggle.setAttribute('aria-label', t.menuLabel);
    if (navShell) navShell.setAttribute('aria-label', t.navLabel);
    if (languageSwitcher) languageSwitcher.setAttribute('aria-label', t.langLabel);
    if (heroPanel) heroPanel.setAttribute('aria-label', t.profileLabel);
    if (heroStack) heroStack.setAttribute('aria-label', t.coreTechLabel);
    if (introStrip) introStrip.setAttribute('aria-label', t.expertiseLabel);

    langButtons.forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    localStorage.setItem('portfolio-language', lang);
  }

  langButtons.forEach((button) => {
    button.addEventListener('click', () => { applyLanguage(button.dataset.lang); if (typeof applyEnhancementLanguage === 'function') applyEnhancementLanguage(button.dataset.lang); });
  });

  const savedLanguage = localStorage.getItem('portfolio-language');
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  applyLanguage(savedLanguage === 'fr' || savedLanguage === 'en' ? savedLanguage : browserLanguage);

  // -----------------------------
  // Header state
  // -----------------------------
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  // -----------------------------
  // Reveal animations
  // -----------------------------
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const target = link.getAttribute('href').slice(1);
          link.classList.toggle('active', target === entry.target.id);
        });
      });
    }, { rootMargin: '-35% 0px -55%', threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  // ============================================================
  // Premium motion system
  // ============================================================
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // 1) Cursor spotlight: gives the whole page a subtle interactive glow.
  if (!reduceMotion && finePointer) {
    body.classList.add('has-pointer-glow');

    let pointerX = window.innerWidth * 0.5;
    let pointerY = window.innerHeight * 0.35;
    let glowX = pointerX;
    let glowY = pointerY;

    window.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    }, { passive: true });

    const animateGlow = () => {
      glowX += (pointerX - glowX) * 0.12;
      glowY += (pointerY - glowY) * 0.12;
      root.style.setProperty('--pointer-x', `${glowX}px`);
      root.style.setProperty('--pointer-y', `${glowY}px`);
      requestAnimationFrame(animateGlow);
    };
    animateGlow();
  }

  // 2) Ambient blobs react gently to page scroll for depth.
  if (!reduceMotion) {
    const ambientOne = document.querySelector('.ambient-one');
    const ambientTwo = document.querySelector('.ambient-two');
    let scrollTicking = false;

    const updateAmbientParallax = () => {
      const y = window.scrollY;
      if (ambientOne) ambientOne.style.transform = `translate3d(0, ${y * 0.035}px, 0) rotate(${y * 0.002}deg)`;
      if (ambientTwo) ambientTwo.style.transform = `translate3d(0, ${-y * 0.025}px, 0) rotate(${-y * 0.0015}deg)`;
      scrollTicking = false;
    };

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateAmbientParallax);
        scrollTicking = true;
      }
    }, { passive: true });
  }

  // 3) Stagger reveal timings so sections do not enter like one flat block.
  document.querySelectorAll('.intro-strip, .impact-row, .project-list, .credential-list, .education-list').forEach((group) => {
    [...group.children].forEach((child, index) => {
      child.style.setProperty('--stagger-index', index);
      child.classList.add('stagger-item');
    });
  });

  document.querySelectorAll('.case-study').forEach((card, index) => {
    card.style.setProperty('--case-index', index);
  });

  // 4) 3D tilt cards. Intentionally subtle: 3.5 degrees max.
  if (!reduceMotion && finePointer) {
    const tiltTargets = document.querySelectorAll('.profile-card, .case-study, .project-tile, .contact-panel');

    tiltTargets.forEach((card) => {
      card.classList.add('motion-card');

      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 7;
        const rotateX = (0.5 - py) * 7;

        card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
        card.style.setProperty('--shine-x', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--shine-y', `${(py * 100).toFixed(1)}%`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
        card.style.setProperty('--shine-x', '50%');
        card.style.setProperty('--shine-y', '50%');
      });
    });
  }

  // 5) Magnetic primary actions: tiny attraction, not a distracting floating button.
  if (!reduceMotion && finePointer) {
    document.querySelectorAll('.button, .icon-button, .lang-btn').forEach((button) => {
      button.classList.add('magnetic-target');

      button.addEventListener('pointermove', (event) => {
        const rect = button.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        button.style.setProperty('--magnet-x', `${dx * 0.10}px`);
        button.style.setProperty('--magnet-y', `${dy * 0.10}px`);
      });

      button.addEventListener('pointerleave', () => {
        button.style.setProperty('--magnet-x', '0px');
        button.style.setProperty('--magnet-y', '0px');
      });
    });
  }

  // 6) Count-up animation for quantified impact metrics.
  const parseMetric = (text) => {
    if (text.includes('/')) return null;
    const match = text.match(/^(~?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    return {
      prefix: match[1],
      value: Number(match[2]),
      suffix: match[3]
    };
  };

  const animateMetric = (element) => {
    if (element.dataset.counted === 'true') return;
    const parsed = parseMetric(element.textContent.trim());
    if (!parsed) return;

    element.dataset.counted = 'true';
    const duration = 950;
    const start = performance.now();
    const decimals = Number.isInteger(parsed.value) ? 0 : 1;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.value * eased;
      element.textContent = `${parsed.prefix}${current.toFixed(decimals)}${parsed.suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else element.textContent = `${parsed.prefix}${parsed.value}${parsed.suffix}`;
    };

    requestAnimationFrame(tick);
  };

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const metricObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateMetric(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.7 });

    document.querySelectorAll('.impact-box strong, .profile-metrics strong').forEach((metric) => metricObserver.observe(metric));
  }

  // 7) A compact animated "data signal" decoration in the hero panel.
  // It is generated by JS, so the HTML structure stays untouched.
  const profileCard = document.querySelector('.profile-card');
  if (profileCard && !profileCard.querySelector('.data-signal')) {
    const signal = document.createElement('div');
    signal.className = 'data-signal';
    signal.setAttribute('aria-hidden', 'true');
    signal.innerHTML = '<i></i><i></i><i></i><i></i><i></i><i></i><span></span>';
    profileCard.appendChild(signal);
  }


  // ============================================================
  // Interactive portfolio features
  // ============================================================
  const featureCopy = {
    en: {
      pipelineKicker:'How I build', pipelineTitle:'From raw data to trusted data products.', pipelineIntro:'A simplified view of the engineering flow I use to turn heterogeneous sources into reliable, business-ready data.',
      careerKicker:'Career timeline', careerTitle:'An engineering journey toward cloud data platforms.', careerIntro:'Select a milestone to see how my scope evolved from software development to cloud data engineering.',
      caseButton:'Explore case study', architectureButton:'View architecture', close:'Close case study', dialogKicker:'Case study', tabs:['Case Study','Architecture'], labels:['Challenge','Approach','Outcome','Key engineering decisions'], archSelect:'Select a component'
    },
    fr: {
      pipelineKicker:'Ma façon de construire', pipelineTitle:'Des données brutes aux data products fiables.', pipelineIntro:'Une vue simplifiée de mon approche pour transformer des sources hétérogènes en données fiables et exploitables par les métiers.',
      careerKicker:'Timeline professionnelle', careerTitle:'Un parcours d’ingénierie vers les plateformes data cloud.', careerIntro:'Sélectionnez une étape pour voir l’évolution de mon périmètre, du développement logiciel au Cloud Data Engineering.',
      caseButton:'Explorer le case study', architectureButton:'Voir l’architecture', close:'Fermer le case study', dialogKicker:'Case study', tabs:['Case Study','Architecture'], labels:['Problématique','Approche','Résultat','Décisions d’ingénierie clés'], archSelect:'Sélectionnez un composant'
    }
  };

  const timelineData = {
    en: {
      '2018': {company:'OMNIACOM',role:'Java / J2EE Developer',copy:'Built a web application for fiber-optic deployment management, establishing my software engineering and backend foundations.',tags:['Java EE','Spring MVC','MySQL','REST APIs']},
      '2020': {company:'SFM Technologies',role:'Python Developer | Machine Learning',copy:'Developed a telecom network-intelligence web application combining backend APIs, data processing, machine learning and interactive monitoring.',tags:['Python','Django','DRF','Machine Learning']},
      '2022': {company:'Spacefoot',role:'Data Engineer | Web Scraping',copy:'Moved deeper into data engineering through automated product ingestion, transformation, quality controls and operational catalog workflows.',tags:['Python','Pandas','Selenium','Data Quality']},
      '2025': {company:'Keolis Santé · JEMS',role:'Data Engineer Cloud | Azure',copy:'Industrialized an Azure data platform and automated reporting workflows for operational and analytical use cases.',tags:['Azure Synapse','ADLS','Spark','Power BI']},
      '2026': {company:'Géo Vendée · JEMS',role:'Data Engineer Cloud | AWS',copy:'Built and optimized an AWS geospatial Data Lakehouse with multi-source ingestion, orchestration, Iceberg layers and automated quality controls.',tags:['AWS Glue','Iceberg','PySpark','Step Functions']}
    },
    fr: {
      '2018': {company:'OMNIACOM',role:'Java / J2EE Developer',copy:'Développement d’une application web de gestion du déploiement de la fibre optique, consolidant mes bases en software engineering et backend.',tags:['Java EE','Spring MVC','MySQL','REST APIs']},
      '2020': {company:'SFM Technologies',role:'Python Developer | Machine Learning',copy:'Développement d’une application web de Network Intelligence combinant APIs backend, traitement de données, machine learning et supervision interactive.',tags:['Python','Django','DRF','Machine Learning']},
      '2022': {company:'Spacefoot',role:'Data Engineer | Web Scraping',copy:'Évolution vers le Data Engineering avec automatisation de l’ingestion produit, transformations, contrôles qualité et workflows catalogue.',tags:['Python','Pandas','Selenium','Data Quality']},
      '2025': {company:'Keolis Santé · JEMS',role:'Data Engineer Cloud | Azure',copy:'Industrialisation d’une plateforme data Azure et automatisation des workflows de reporting pour les usages opérationnels et analytiques.',tags:['Azure Synapse','ADLS','Spark','Power BI']},
      '2026': {company:'Géo Vendée · JEMS',role:'Data Engineer Cloud | AWS',copy:'Construction et optimisation d’un Data Lakehouse géospatial AWS avec ingestion multi-sources, orchestration, couches Iceberg et contrôles qualité automatisés.',tags:['AWS Glue','Iceberg','PySpark','Step Functions']}
    }
  };

  const projectDetails = {
    'geo-vendee': {
      title:'Géo Vendée', role:'Data Engineer Cloud | AWS',
      en:{challenge:'Centralize heterogeneous territorial and geospatial sources while keeping exposed datasets reliable and usable by local-authority applications.',approach:'A layered AWS Data Lakehouse with reusable ingestion, Spark transformations, workflow orchestration and explicit reject management.',outcome:'3× faster ingestion and 94% of ingestion errors automatically detected and routed through SQS.',decisions:['Separate ingestion, transformation and serving responsibilities.','Use Iceberg-backed curated layers for scalable table management.','Route rejected records to SQS instead of silently dropping invalid data.','Orchestrate dependencies with Step Functions and EventBridge.'],archIntro:'Click a component to see its role in the Géo Vendée data flow.',arch:[['Sources','PostgreSQL · APIs · CSV · XLSX · JSON · GeoJSON · GeoPackage','Multi-source territorial, operational and geospatial inputs.'],['Ingestion','AWS Glue','Generic ingestion jobs collect, normalize and load source data into the RAW layer.'],['RAW Layer','Iceberg Tables · Glue Data Catalog','Raw datasets are stored as Apache Iceberg tables and registered in AWS Glue Data Catalog.'],['RAW → Silver Processing','AWS Glue · Spark · PySpark · Spark SQL','Processing jobs clean, standardize, validate, enrich and transform RAW datasets into the Silver layer.'],['Silver Layer','Iceberg Tables · Glue Data Catalog','Cleaned, standardized and enriched datasets are stored as Apache Iceberg tables.'],['Silver → Gold Processing','AWS Glue · Spark · PySpark · Spark SQL','Processing jobs apply business rules, joins, aggregations and geospatial transformations before loading Gold datasets.'],['Gold Layer','Aurora PostgreSQL · PostGIS','Business-ready and geospatial datasets are loaded into Aurora PostgreSQL for serving and downstream consumption.'],['Serving','GeoServer · Athena · Applications','Curated datasets are exposed for analytics, operational applications and cartographic use cases.']],orchestration:{title:'End-to-end orchestration',stack:'AWS Step Functions · EventBridge',copy:'Step Functions and EventBridge orchestrate the complete workflow from ingestion through RAW and Silver processing to Gold loading and final data exposure. SQS supports reject and error handling across the pipeline.'}},
      fr:{challenge:'Centraliser des sources territoriales et géospatiales hétérogènes tout en garantissant des données exposées fiables et exploitables.',approach:'Un Data Lakehouse AWS en couches avec ingestion réutilisable, transformations Spark, orchestration et gestion explicite des rejets.',outcome:'Ingestion 3× plus rapide et 94 % des erreurs d’ingestion détectées et routées automatiquement via SQS.',decisions:['Séparer les responsabilités d’ingestion, transformation et exposition.','Utiliser des tables Iceberg pour gérer les couches de données de façon scalable.','Router les enregistrements rejetés vers SQS plutôt que de perdre silencieusement les erreurs.','Orchestrer les dépendances avec Step Functions et EventBridge.'],archIntro:'Cliquez sur un composant pour comprendre son rôle dans le flux Géo Vendée.',arch:[['Sources','PostgreSQL · APIs · CSV · XLSX · JSON · GeoJSON · GeoPackage','Sources territoriales, opérationnelles et géospatiales multi-formats.'],['Ingestion','AWS Glue','Des jobs d’ingestion génériques collectent, normalisent et chargent les données dans la couche RAW.'],['Couche RAW','Tables Iceberg · Glue Data Catalog','Les données brutes sont stockées sous forme de tables Apache Iceberg et enregistrées dans AWS Glue Data Catalog.'],['Processing RAW → Silver','AWS Glue · Spark · PySpark · Spark SQL','Les jobs de processing nettoient, standardisent, valident, enrichissent et transforment les données RAW vers la couche Silver.'],['Couche Silver','Tables Iceberg · Glue Data Catalog','Les données nettoyées, standardisées et enrichies sont stockées sous forme de tables Apache Iceberg.'],['Processing Silver → Gold','AWS Glue · Spark · PySpark · Spark SQL','Les jobs appliquent les règles métier, jointures, agrégations et transformations géospatiales avant le chargement des données Gold.'],['Couche Gold','Aurora PostgreSQL · PostGIS','Les données prêtes pour les usages métiers et géospatiaux sont chargées dans Aurora PostgreSQL.'],['Exposition','GeoServer · Athena · Applications','Les données curées sont exposées pour l’analytics, les applications opérationnelles et les usages cartographiques.']],orchestration:{title:'Orchestration de bout en bout',stack:'AWS Step Functions · EventBridge',copy:'Step Functions et EventBridge orchestrent l’ensemble du workflow, de l’ingestion aux traitements RAW → Silver et Silver → Gold, jusqu’au chargement Gold et à l’exposition finale. SQS prend en charge les rejets et erreurs tout au long du pipeline.'}}
    },
    'keolis': {
      title:'Keolis Santé', role:'Data Engineer Cloud | Azure',
      en:{challenge:'Consolidate operational ERP data across the JUSSIEU secours network and remove bottlenecks in reporting refreshes.',approach:'Azure Synapse ingestion and Spark-based transformation workflows feeding curated layers for Power BI.',outcome:'Reporting moved from weekly manual production to automated daily refreshes, with ~50% lower analytical processing time.',decisions:['Centralize ERP ingestion in Azure Synapse.','Use PySpark and Spark SQL for reusable transformations.','Automate the end-to-end path from source ingestion to curated data.','Optimize analytical workloads around reporting consumption.'],archIntro:'Click a component to see its role in the Keolis Santé data flow.',arch:[['ERP Sources','Lomaco · Synovo','Operational ERP source systems across the JUSSIEU secours network.'],['Ingestion','Azure Synapse','ERP data is ingested into the Azure data platform and landed in the RAW layer.'],['RAW Layer','Delta Tables · ADLS Gen2','Raw operational data is stored as Delta tables in Azure Data Lake Storage Gen2.'],['RAW → Silver Processing','Spark · PySpark · Spark SQL','Transformation jobs clean, standardize, enrich and consolidate RAW data before writing the Silver layer.'],['Silver Layer','Delta Tables · ADLS Gen2','Cleaned, standardized and transformed datasets are stored as Delta tables.'],['Silver → Gold Processing','Spark · PySpark · Spark SQL','Transformation jobs apply business rules, joins, aggregations and reporting-oriented preparation before writing Gold datasets.'],['Gold Layer','Delta Tables · ADLS Gen2','Curated business-ready datasets are stored as Delta tables for reporting and analytical consumption.'],['Serving','Power BI','Gold datasets feed automated daily reporting and operational steering.']],orchestration:{title:'End-to-end orchestration',stack:'Azure Synapse Pipelines',copy:'Azure Synapse Pipelines orchestrate the complete workflow from ERP ingestion through RAW → Silver and Silver → Gold processing to final Power BI data exposure.'}},
      fr:{challenge:'Consolider les données opérationnelles ERP du réseau JUSSIEU secours et supprimer les goulots d’étranglement du reporting.',approach:'Ingestion Azure Synapse et transformations Spark alimentant des couches curées destinées à Power BI.',outcome:'Passage d’une production manuelle hebdomadaire à une alimentation quotidienne automatisée, avec ~50 % de réduction du temps de traitement analytique.',decisions:['Centraliser l’ingestion ERP dans Azure Synapse.','Utiliser PySpark et Spark SQL pour des transformations réutilisables.','Automatiser le flux end-to-end de l’ingestion aux données curées.','Optimiser les traitements analytiques pour les usages de reporting.'],archIntro:'Cliquez sur un composant pour comprendre son rôle dans le flux Keolis Santé.',arch:[['Sources ERP','Lomaco · Synovo','Systèmes ERP opérationnels du réseau JUSSIEU secours.'],['Ingestion','Azure Synapse','Les données ERP sont ingérées dans la plateforme Azure et chargées dans la couche RAW.'],['Couche RAW','Tables Delta · ADLS Gen2','Les données opérationnelles brutes sont stockées sous forme de tables Delta dans Azure Data Lake Storage Gen2.'],['Processing RAW → Silver','Spark · PySpark · Spark SQL','Les jobs de transformation nettoient, standardisent, enrichissent et consolident les données RAW avant leur écriture dans la couche Silver.'],['Couche Silver','Tables Delta · ADLS Gen2','Les données nettoyées, standardisées et transformées sont stockées sous forme de tables Delta.'],['Processing Silver → Gold','Spark · PySpark · Spark SQL','Les jobs appliquent les règles métier, jointures, agrégations et préparations orientées reporting avant l’écriture des données Gold.'],['Couche Gold','Tables Delta · ADLS Gen2','Les jeux de données curés et prêts pour les usages métiers sont stockés sous forme de tables Delta.'],['Exposition','Power BI','Les données Gold alimentent le reporting quotidien automatisé et le pilotage opérationnel.']],orchestration:{title:'Orchestration de bout en bout',stack:'Azure Synapse Pipelines',copy:'Azure Synapse Pipelines orchestre l’ensemble du workflow, de l’ingestion ERP aux traitements RAW → Silver et Silver → Gold, jusqu’à l’exposition finale des données dans Power BI.'}}
    },
    'spacefoot': {title:'Spacefoot',role:'Data Engineer | Web Scraping',en:{challenge:'Maintain a reliable e-commerce product catalog fed from multiple B2B and B2C websites.',approach:'Python extraction and transformation workflows with automated validation, anomaly detection and catalog-quality monitoring.',outcome:'45% fewer product listing errors and 80% of previously manual catalog-update work automated.',decisions:['Automate repetitive extraction using reusable Python scripts.','Normalize product attributes before integration.','Detect duplicates and inconsistencies before publication.','Monitor catalog reliability instead of relying only on manual review.'],archIntro:'A lightweight data workflow from web sources to the product catalog.',arch:[['Web Sources','B2B · B2C','Product information collected from supplier and retail websites.'],['Extraction','Requests · BeautifulSoup · Selenium','Automated scraping depending on page behavior.'],['Processing','Python · Pandas','Cleaning, mapping and enrichment of product data.'],['Quality','Validation rules','Duplicates, anomalies and inconsistencies are detected.'],['Catalog','Magento','Structured product data is integrated for operational use.']]},fr:{challenge:'Maintenir un catalogue e-commerce fiable alimenté depuis plusieurs sites B2B et B2C.',approach:'Workflows Python d’extraction et transformation avec validation automatisée, détection d’anomalies et suivi de la qualité catalogue.',outcome:'45 % d’erreurs de fiches produit en moins et 80 % du travail manuel de mise à jour automatisé.',decisions:['Automatiser les extractions répétitives avec des scripts Python réutilisables.','Normaliser les attributs produit avant intégration.','Détecter doublons et incohérences avant publication.','Suivre la fiabilité du catalogue au lieu de dépendre uniquement des contrôles manuels.'],archIntro:'Un workflow data léger des sources web jusqu’au catalogue produit.',arch:[['Sources Web','B2B · B2C','Informations produit collectées depuis les sites fournisseurs et retail.'],['Extraction','Requests · BeautifulSoup · Selenium','Scraping automatisé selon le comportement des pages.'],['Traitement','Python · Pandas','Nettoyage, mapping et enrichissement des données produit.'],['Qualité','Règles de validation','Détection des doublons, anomalies et incohérences.'],['Catalogue','Magento','Intégration de données produit structurées pour les usages opérationnels.']] }},
    'sfm': {title:'SFM Technologies',role:'Python Developer | Machine Learning',en:{challenge:'Provide telecom teams with a web application capable of consolidating network-performance data and surfacing anomalies quickly.',approach:'A Django web application combining REST APIs, data-processing workflows, machine-learning models and interactive dashboards.',outcome:'Continuous automated anomaly detection and faster incident response through real-time alerts and KPI visibility.',decisions:['Structure the application around Django’s MVT pattern.','Prepare network measurements before model inference.','Integrate ML outputs into the Django application workflow.','Surface KPIs and alerts through interactive templates and dashboards.'],archIntro:'The application follows Django’s MVT architecture while integrating data-processing and machine-learning services.',arch:[['Client','Web browser','Users access telecom KPIs, alerts and network-performance views.'],['URL Routing','Django URLs','Incoming requests are routed to the appropriate application view.'],['View','Django · DRF','Views handle request logic, coordinate application services and expose REST API endpoints.'],['Data & ML Services','Python · Pandas · Scikit-learn','Data preparation, anomaly detection and performance-prediction logic are executed as application services.'],['Model','Django Models · ORM','Application and network data are represented and accessed through Django models and ORM.'],['Template','Django Templates · Chart.js','Templates render interactive dashboards, KPIs, alerts and model outputs for users.']]},fr:{challenge:'Fournir aux équipes télécom une application web capable de consolider les données de performance réseau et de remonter rapidement les anomalies.',approach:'Une application Django combinant APIs REST, traitements data, modèles de machine learning et dashboards interactifs.',outcome:'Détection automatisée continue des anomalies et réaction plus rapide grâce aux alertes temps réel et à la visibilité sur les KPIs.',decisions:['Structurer l’application selon le pattern MVT de Django.','Préparer les mesures réseau avant l’inférence des modèles.','Intégrer les résultats ML dans le workflow de l’application Django.','Afficher KPIs et alertes via les templates et dashboards interactifs.'],archIntro:'L’application suit une architecture MVT Django intégrant des services de traitement de données et de machine learning.',arch:[['Client','Navigateur Web','Les utilisateurs consultent les KPIs, alertes et performances du réseau télécom.'],['Routage URL','Django URLs','Les requêtes entrantes sont dirigées vers la vue applicative appropriée.'],['View','Django · DRF','Les vues gèrent les requêtes, coordonnent les services applicatifs et exposent les endpoints REST.'],['Services Data & ML','Python · Pandas · Scikit-learn','Préparation des données, détection d’anomalies et prédiction des performances.'],['Model','Django Models · ORM','Les données applicatives et réseau sont représentées et accédées via les modèles Django et l’ORM.'],['Template','Django Templates · Chart.js','Les templates affichent les dashboards interactifs, KPIs, alertes et résultats des modèles.']] }},
    'omniacom': {title:'OMNIACOM',role:'Java / J2EE Developer',en:{challenge:'Centralize fiber-deployment project information and give teams a clearer view of field interventions and progress.',approach:'A Java EE web application structured around the MVC pattern with Spring MVC, RESTful APIs and a relational database.',outcome:'Estimated reduction in manual project-data consolidation and faster project-status updates through centralized tracking.',decisions:['Structure the application using the MVC pattern.','Separate presentation, request handling and domain/data responsibilities.','Expose backend capabilities through RESTful APIs.','Persist project and intervention data in a relational database.'],archIntro:'The web application follows an MVC architecture built with Java EE and Spring MVC.',arch:[['Users','Project & field teams','Operational users interact with project and intervention tracking features.'],['View','JSP · Bootstrap','The presentation layer displays project information, forms and operational tracking screens.'],['Controller','Spring MVC · REST APIs','Controllers handle HTTP requests, application navigation and RESTful endpoints.'],['Model','Java EE · Business logic','The model contains domain objects, business rules and application services.'],['Persistence','DAO · Data access','The persistence layer manages exchanges between the application model and relational data.'],['Database','MySQL','Project, intervention and operational tracking data are stored persistently.']]},fr:{challenge:'Centraliser les informations de déploiement fibre et donner aux équipes une meilleure visibilité sur les interventions terrain et l’avancement.',approach:'Une application web Java EE structurée selon le pattern MVC avec Spring MVC, des APIs RESTful et une base relationnelle.',outcome:'Réduction estimée de la consolidation manuelle des données projet et mises à jour de statut plus rapides grâce au suivi centralisé.',decisions:['Structurer l’application selon le pattern MVC.','Séparer la présentation, le traitement des requêtes et les responsabilités métier/data.','Exposer les fonctionnalités backend via des APIs RESTful.','Persister les données projet et intervention dans une base relationnelle.'],archIntro:'L’application web suit une architecture MVC construite avec Java EE et Spring MVC.',arch:[['Utilisateurs','Équipes projet & terrain','Les utilisateurs accèdent aux fonctionnalités de suivi des projets et interventions.'],['View','JSP · Bootstrap','La couche présentation affiche les informations projet, formulaires et écrans de suivi opérationnel.'],['Controller','Spring MVC · REST APIs','Les contrôleurs gèrent les requêtes HTTP, la navigation applicative et les endpoints RESTful.'],['Model','Java EE · Logique métier','Le modèle contient les objets métier, règles de gestion et services applicatifs.'],['Persistance','DAO · Accès aux données','La couche de persistance gère les échanges entre le modèle applicatif et les données relationnelles.'],['Base de données','MySQL','Les données projets, interventions et suivi opérationnel sont stockées de manière persistante.']]}}
  };

  let currentPortfolioLanguage = localStorage.getItem('portfolio-language') || (navigator.language && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en');

  function applyEnhancementLanguage(lang) {
    currentPortfolioLanguage = lang;
    const f = featureCopy[lang] || featureCopy.en;
    setText('.feature-pipeline-kicker',f.pipelineKicker); setText('.feature-pipeline-title',f.pipelineTitle); setText('.feature-pipeline-intro',f.pipelineIntro);
    setText('.feature-career-kicker',f.careerKicker); setText('.feature-career-title',f.careerTitle); setText('.feature-career-intro',f.careerIntro);
    document.querySelectorAll('.case-study-open span').forEach(el=>el.textContent=f.caseButton); document.querySelectorAll('.architecture-open span').forEach(el=>el.textContent=f.architectureButton);
    const dlg=document.getElementById('project-dialog'); if(dlg){dlg.querySelector('.dialog-close').setAttribute('aria-label',f.close); setText('.dialog-kicker',f.dialogKicker); setText('.dialog-tab',f.tabs); setText('.dialog-label',f.labels); setText('.architecture-detail-label',f.archSelect);}
    const activeTimeline=document.querySelector('.timeline-point.active'); if(activeTimeline) renderTimeline(activeTimeline.dataset.timeline);
    // nav includes added Explore item
    const navText=lang==='fr'?['Expérience','Explorer','Projets','Certifications','Formation','Contact']:['Experience','Explore','Projects','Certifications','Education','Contact']; setText('.nav-links a',navText);
  }


  function renderTimeline(year){const data=(timelineData[currentPortfolioLanguage]||timelineData.en)[year]; if(!data)return; setText('.timeline-company',data.company); setText('.timeline-role',data.role); setText('.timeline-copy',data.copy); const tags=document.querySelector('.timeline-tags'); if(tags) tags.innerHTML=data.tags.map(x=>`<span>${x}</span>`).join(''); document.querySelectorAll('.timeline-point').forEach(btn=>{const active=btn.dataset.timeline===year;btn.classList.toggle('active',active);btn.setAttribute('aria-selected',String(active));});}
  document.querySelectorAll('.timeline-point').forEach(btn=>btn.addEventListener('click',()=>renderTimeline(btn.dataset.timeline)));

  const dialog=document.getElementById('project-dialog'); let currentProject=null;
  function renderArchitecture(project){
    const lang=currentPortfolioLanguage;
    const detail=project[lang]||project.en;
    const flow=dialog.querySelector('.architecture-flow');

    dialog.querySelector('.architecture-intro').textContent=detail.archIntro;

    const orchestration=detail.orchestration
      ? `<div class="architecture-orchestration">
          <div class="architecture-orchestration-heading">
            <small>${detail.orchestration.title}</small>
            <strong>${detail.orchestration.stack}</strong>
          </div>
          <p>${detail.orchestration.copy}</p>
          <div class="architecture-orchestration-rail" aria-hidden="true"></div>
        </div>`
      : '';

    const nodes=detail.arch.map((n,i)=>{
      const isProcessing=/Processing|Traitement/i.test(n[0]);
      return `
        <div class="architecture-step">
          <button
            type="button"
            class="architecture-node${i===0?' active':''}${isProcessing?' processing-node':''}"
            data-node="${i}"
          >
            <span class="architecture-index">${String(i+1).padStart(2,'0')}</span>
            <small>${n[0]}</small>
            <strong>${n[1]}</strong>
            <span>${n[2]}</span>
          </button>
          ${i<detail.arch.length-1?'<span class="architecture-arrow" aria-hidden="true">→</span>':''}
        </div>`;
    }).join('');

    flow.innerHTML=`
      ${orchestration}
      <div class="architecture-scroll">
        <div class="architecture-track">
          ${nodes}
        </div>
      </div>`;

    const setDetail=(i)=>{
      const n=detail.arch[i];
      setText('.architecture-detail-label',n[0]);
      dialog.querySelector('.architecture-detail strong').textContent=n[1];
      dialog.querySelector('.architecture-detail p').textContent=n[2];
      flow.querySelectorAll('.architecture-node').forEach((b,j)=>b.classList.toggle('active',i===j));
    };

    setDetail(0);
    flow.querySelectorAll('.architecture-node').forEach(btn=>
      btn.addEventListener('click',()=>setDetail(Number(btn.dataset.node)))
    );
  }
  function openProject(projectId,tab='case'){const p=projectDetails[projectId];if(!p||!dialog)return;currentProject=projectId;const lang=currentPortfolioLanguage;const d=p[lang]||p.en;dialog.querySelector('#dialog-title').textContent=p.title;dialog.querySelector('.dialog-role').textContent=p.role;dialog.querySelector('.dialog-challenge').textContent=d.challenge;dialog.querySelector('.dialog-approach').textContent=d.approach;dialog.querySelector('.dialog-outcome').textContent=d.outcome;dialog.querySelector('.dialog-deliverables ul').innerHTML=d.decisions.map(x=>`<li>${x}</li>`).join('');renderArchitecture(p);switchDialogTab(tab);dialog.showModal();}
  function switchDialogTab(tab){dialog.querySelectorAll('.dialog-tab').forEach(b=>{const a=b.dataset.dialogTab===tab;b.classList.toggle('active',a);b.setAttribute('aria-selected',String(a));});dialog.querySelectorAll('.dialog-panel').forEach(p=>p.classList.toggle('active',p.dataset.dialogPanel===tab));}
  if(dialog){document.querySelectorAll('.case-study-open').forEach(btn=>btn.addEventListener('click',()=>openProject(btn.closest('.case-study').dataset.project,'case')));document.querySelectorAll('.architecture-open').forEach(btn=>btn.addEventListener('click',()=>openProject(btn.closest('.case-study').dataset.project,'architecture')));dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.querySelectorAll('.dialog-tab').forEach(btn=>btn.addEventListener('click',()=>switchDialogTab(btn.dataset.dialogTab)));dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});}

  // Make the new quantified dashboard participate in count-up animation.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const extraMetricObserver = new IntersectionObserver((entries, observer) => { entries.forEach((entry) => { if (!entry.isIntersecting) return; animateMetric(entry.target); observer.unobserve(entry.target); }); }, { threshold: 0.65 });
  }

  applyEnhancementLanguage(currentPortfolioLanguage);

})();
