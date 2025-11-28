import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Language translation functionality
    const translateButton = document.getElementById('translateButton');
    let isTranslated = false;
    
    const translations = {
      // Navigation
      'Features': 'Fonctionnalités',
      'Pricing': 'Tarifs',
      'How it Works': 'Comment ça marche',
      'Contact': 'Contact',
      'FR': 'FR',
      'EN': 'EN',
      
      // Navigation - French versions
      'Fonctionnalités': 'Features',
      'Tarifs': 'Pricing', 
      'Comment ça marche': 'How it Works',
      
      // Hero section
      'TRANSFORM YOUR BUSINESS WITH AI': 'TRANSFORMEZ VOTRE ENTREPRISE AVEC L\'IA',
      'Get More Leads. Close More Sales. Scale Faster.': 'Obtenez Plus de Prospects. Concluez Plus de Ventes. Évoluez Plus Rapidement.',
      'Stop losing customers to competitors. Our AI systems work 24/7 to capture leads, nurture prospects, and drive sales while you sleep.': 'Arrêtez de perdre des clients au profit de vos concurrents. Nos systèmes IA travaillent 24h/24 et 7j/7 pour capturer des prospects, nourrir les prospects et générer des ventes pendant que vous dormez.',
      'Get a quote': 'Obtenir un devis',
      'See pricing': 'Voir les tarifs',
      'AI-Powered Business Growth': 'Croissance d\'entreprise alimentée par l\'IA',
      'From websites to automation, we build the infrastructure that scales your business.': 'Des sites web à l\'automatisation, nous construisons l\'infrastructure qui fait grandir votre entreprise.',
      
      // Stats
      '+245%': '+245%',
      'Avg. increase in leads': 'Augmentation moyenne des prospects',
      '7 days': '7 jours',
      'Average delivery time': 'Temps de livraison moyen',
      '50+': '50+',
      'Businesses transformed': 'Entreprises transformées',
      '24/7': '24h/24 7j/7',
      'AI systems monitoring': 'Surveillance des systèmes IA',
      
      // Features
      'STOP LOSING MONEY TO OUTDATED SYSTEMS': 'ARRÊTEZ DE PERDRE DE L\'ARGENT AVEC DES SYSTÈMES OBSOLÈTES',
      'Your competitors are already using AI to steal your customers. Here\'s how we help you fight back:': 'Vos concurrents utilisent déjà l\'IA pour voler vos clients. Voici comment nous vous aidons à riposter :',
      'Website + SEO': 'Site web + SEO',
      'Turn visitors into paying customers.': 'Transformez les visiteurs en clients payants.',
      'Our websites don\'t just look pretty - they\'re conversion machines that capture leads and drive sales 24/7.': 'Nos sites web ne sont pas seulement beaux - ce sont des machines de conversion qui capturent des prospects et génèrent des ventes 24h/24 et 7j/7.',
      'AI-Powered Ads': 'Publicités alimentées par l\'IA',
      'AI-Powered Ads': 'Publicités alimentées par l\'IA',
      'Stop wasting money on ads that don\'t work.': 'Arrêtez de gaspiller de l\'argent sur des publicités qui ne fonctionnent pas.',
      'Our AI finds your perfect customers and creates ads that convert, automatically optimizing to maximize every dollar you spend.': 'Notre IA trouve vos clients parfaits et crée des publicités qui convertissent, optimisant automatiquement pour maximiser chaque dollar que vous dépensez.',
      'AI Agents': 'Agents IA',
      'Never miss a sale again.': 'Ne ratez plus jamais une vente.',
      'Our AI agents work around the clock, answering questions, booking appointments, and qualifying leads while you focus on growing your business.': 'Nos agents IA travaillent 24h/24, répondent aux questions, prennent des rendez-vous et qualifient les prospects pendant que vous vous concentrez sur la croissance de votre entreprise.',
      'Analytics & Monitoring': 'Analyses et surveillance',
      'Know exactly what\'s making you money.': 'Sachez exactement ce qui vous fait gagner de l\'argent.',
      'See which campaigns, pages, and strategies are driving real results with crystal-clear analytics that actually matter.': 'Voyez quelles campagnes, pages et stratégies génèrent de vrais résultats avec des analyses cristallines qui comptent vraiment.',
      
      // Features grid content
      'Turn visitors into paying customers.': 'Transformez les visiteurs en clients payants.',
      'Our websites don\'t just look pretty - they\'re conversion machines that capture leads and drive sales 24/7.': 'Nos sites web ne sont pas seulement beaux - ce sont des machines de conversion qui capturent des prospects et génèrent des ventes 24h/24 et 7j/7.',
      'Stop wasting money on ads that don\'t work.': 'Arrêtez de gaspiller de l\'argent sur des publicités qui ne fonctionnent pas.',
      'Our AI finds your perfect customers and creates ads that convert, automatically optimizing to maximize every dollar you spend.': 'Notre IA trouve vos clients parfaits et crée des publicités qui convertissent, optimisant automatiquement pour maximiser chaque dollar que vous dépensez.',
      'AI Agents': 'Agents IA',
      'Never miss a sale again.': 'Ne ratez plus jamais une vente.',
      'Our AI agents work around the clock, answering questions, booking appointments, and qualifying leads while you focus on growing your business.': 'Nos agents IA travaillent 24h/24, répondent aux questions, prennent des rendez-vous et qualifient les prospects pendant que vous vous concentrez sur la croissance de votre entreprise.',
      'Analytics & Monitoring': 'Analyses et surveillance',
      'Know exactly what\'s making you money.': 'Sachez exactement ce qui vous fait gagner de l\'argent.',
      'See which campaigns, pages, and strategies are driving real results with crystal-clear analytics that actually matter.': 'Voyez quelles campagnes, pages et stratégies génèrent de vrais résultats avec des analyses cristallines qui comptent vraiment.',
      
      // Feature descriptions - detailed content
      'Turn visitors into paying customers. Our websites don\'t just look pretty - they\'re conversion machines that capture leads and drive sales 24/7.': 'Transformez les visiteurs en clients payants. Nos sites web ne sont pas seulement beaux - ce sont des machines de conversion qui capturent des prospects et génèrent des ventes 24h/24 et 7j/7.',
      'Stop wasting money on ads that don\'t work. Our AI finds your perfect customers and creates ads that convert, automatically optimizing to maximize every dollar you spend.': 'Arrêtez de gaspiller de l\'argent sur des publicités qui ne fonctionnent pas. Notre IA trouve vos clients parfaits et crée des publicités qui convertissent, optimisant automatiquement pour maximiser chaque dollar que vous dépensez.',
      'Never miss a sale again. Our AI agents work around the clock, answering questions, booking appointments, and qualifying leads while you focus on growing your business.': 'Ne ratez plus jamais une vente. Nos agents IA travaillent 24h/24, répondent aux questions, prennent des rendez-vous et qualifient les prospects pendant que vous vous concentrez sur la croissance de votre entreprise.',
      'Know exactly what\'s making you money. See which campaigns, pages, and strategies are driving real results with crystal-clear analytics that actually matter.': 'Sachez exactement ce qui vous fait gagner de l\'argent. Voyez quelles campagnes, pages et stratégies génèrent de vrais résultats avec des analyses cristallines qui comptent vraiment.',
      
      // Missing translations for Custom AI Solutions description
      'Eliminate your business friction points. We analyze your processes and create custom AI solutions to automate repetitive tasks and optimize your operations.': 'Éliminez les points de friction de votre entreprise. Nous analysons vos processus et créons des solutions IA personnalisées pour automatiser les tâches répétitives et optimiser vos opérations.',
      
      // Missing translations for pricing section
      'Website + Sales Funnel': 'Site web + Entonnoir de Vente',
      'Automated sales funnel': 'Entonnoir de vente automatisé',
      'Email marketing automation': 'Automatisation du marketing par email',
      'Lead nurturing sequences': 'Séquences de nurturing des prospects',
      'Order Website + Funnel — $1000+': 'Commander Site web + Entonnoir — 1000$+',
      'Custom AI Solution': 'Solution IA Sur Mesure',
      'Contact for quote': 'Sur devis',
      'Website + Sales funnel': 'Site web + Entonnoir de vente',
      'Custom timeline': 'Délai personnalisé',
      'Get Custom Quote': 'Demander un Devis',
      
      // Pricing
      'SIMPLE PRICING, MASSIVE RESULTS': 'TARIFICATION SIMPLE, RÉSULTATS MASSIFS',
      'No hidden fees. No long contracts. Just results that pay for themselves.': 'Pas de frais cachés. Pas de longs contrats. Juste des résultats qui se paient d\'eux-mêmes.',
      'Website Only': 'Site web seulement',
      '$100-150': '100$-150$',
      'Responsive website design': 'Design de site web réactif',
      'Contact form integration': 'Intégration de formulaire de contact',
      'Basic SEO setup': 'Configuration SEO de base',
      '1 revision included': '1 révision incluse',
      '3-day turnaround': 'Délai de 3 jours',
      'Order Website — $100+': 'Commander un site web — 100$+',
      'Website + AI Ads': 'Site web + Publicités IA',
      '$500-650': '500$-650$',
      'Everything in Website Only': 'Tout ce qui est dans Site web seulement',
      '2 AI-optimized ad campaigns': '2 campagnes publicitaires optimisées par IA',
      'A/B copy variants testing': 'Test de variantes de texte A/B',
      'Conversion tracking setup': 'Configuration du suivi des conversions',
      '2 revisions included': '2 révisions incluses',
      '7-day timeline': 'Délai de 7 jours',
      'Order Website + Ads — $500+': 'Commander Site web + Publicités — 500$+',
      'Full AI Infrastructure': 'Infrastructure IA complète',
      '$1000-1500': '1000$-1500$',
      'Website + AI ad campaigns': 'Site web + campagnes publicitaires IA',
      'Custom AI chatbot/agents': 'Chatbot/agents IA personnalisés',
      'Automation workflows': 'Flux de travail d\'automatisation',
      'Analytics dashboard': 'Tableau de bord d\'analyses',
      'Training & onboarding': 'Formation et intégration',
      '4 revisions included': '4 révisions incluses',
      '14-day timeline': 'Délai de 14 jours',
      'Get Full AI Infrastructure — $1000+': 'Obtenir l\'infrastructure IA complète — 1000$+',
      
      // How it works
      'How It Works': 'Comment ça marche',
      'Simple process, powerful results': 'Processus simple, résultats puissants',
      'Strategy Call': 'Appel stratégique',
      'We find your biggest revenue leaks.': 'Nous trouvons vos plus grandes fuites de revenus.',
      'In 30 minutes, we\'ll identify exactly where you\'re losing money and show you how AI can plug those holes.': 'En 30 minutes, nous identifierons exactement où vous perdez de l\'argent et vous montrerons comment l\'IA peut combler ces trous.',
      'Build & Iterate': 'Construire et itérer',
      'We build your money-making machine.': 'Nous construisons votre machine à faire de l\'argent.',
      'No waiting months for results. We build, test, and optimize your AI systems while keeping you in the loop every step.': 'Pas d\'attente de mois pour les résultats. Nous construisons, testons et optimisons vos systèmes IA tout en vous tenant au courant à chaque étape.',
      'Launch & Monitor': 'Lancer et surveiller',
      'Watch your revenue grow on autopilot.': 'Regardez vos revenus croître en pilote automatique.',
      'We launch your systems and monitor them 24/7, making sure every lead is captured and every opportunity is maximized.': 'Nous lançons vos systèmes et les surveillons 24h/24 et 7j/7, nous assurant que chaque prospect est capturé et chaque opportunité est maximisée.',
      
      // Contact
      'READY TO STOP LOSING CUSTOMERS?': 'PRÊT À ARRÊTER DE PERDRE DES CLIENTS ?',
      'Every day you wait is money walking out the door. Let\'s fix that.': 'Chaque jour que vous attendez, c\'est de l\'argent qui sort par la porte. Réglons ça.',
      'Name': 'Nom',
      'Your email': 'Votre email',
      'Budget Range': 'Gamme de budget',
      'Select your budget': 'Sélectionnez votre budget',
      'Website Only ($100-150)': 'Site web seulement (100$-150$)',
      'Website + AI Ads ($500-650)': 'Site web + Publicités IA (500$-650$)',
      'Website + Sales Funnel (1000$-1500$)': 'Site web + Entonnoir de Vente (1000$-1500$)',
      'Custom AI Solution (Contact for quote)': 'Solution IA Sur Mesure (Sur devis)',
      'Custom (Let\'s discuss)': 'Personnalisé (Discutons-en)',
      'Your message': 'Votre message',
      'Tell us about your business and goals...': 'Parlez-nous de votre entreprise et de vos objectifs...',
      'Send Message': 'Envoyer le message',
      'We\'ll get back to you within 24 hours': 'Nous vous répondrons dans les 24 heures',
      
      // Footer
      '327.io': '327.io',
      'AI infrastructure for businesses that want to grow.': 'Infrastructure IA pour les entreprises qui veulent grandir.',
      'Services': 'Services',
      'Website Development': 'Développement de sites web',
      'Automated Sales Funnels': 'Sales Funnel Automatisées',
      'AI Agents & Chatbots': 'Agents IA et chatbots',
      'Custom AI Solutions': 'Solutions IA Personnalisées',
      'Email: hello@327.io': 'Email: hello@327.io',
      'Response time: < 24 hours': 'Temps de réponse : < 24 heures',
      '© 2024 327.io. All rights reserved.': '© 2024 327.io. Tous droits réservés.'
    };
    
    const handleTranslate = () => {
      const elementsToTranslate = document.querySelectorAll('h1, h2, h3, p, a:not(.logo), button, label, option, li, span');
      
      if (!isTranslated) {
        // Translate to French
        elementsToTranslate.forEach(element => {
          const text = element.textContent?.trim();
          if (text && translations[text]) {
            element.textContent = translations[text];
          }
        });
        if (translateButton) translateButton.textContent = 'EN';
        isTranslated = true;
      } else {
        // Translate back to English
        elementsToTranslate.forEach(element => {
          const text = element.textContent?.trim();
          // Find the English key for this French value
          const englishKey = Object.keys(translations).find(key => translations[key] === text);
          if (englishKey) {
            element.textContent = englishKey;
          }
        });
        if (translateButton) translateButton.textContent = 'FR';
        isTranslated = false;
      }
      
      // Reattach anchor listeners after translation
      setTimeout(reattachAnchorListeners, 100);
    };
    
    if (translateButton) {
      translateButton.addEventListener('click', handleTranslate);
    }

    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    const handleMobileMenuClick = () => {
      navLinks?.classList.toggle('active');
    };

    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener('click', handleMobileMenuClick);
    }

    // Helper functions for anchor link management
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          // Close mobile menu if open
          navLinks?.classList.remove('active');
        }
      }
    };

    const attachAnchorListeners = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    };

    const removeAnchorListeners = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };

    const reattachAnchorListeners = () => {
      removeAnchorListeners();
      attachAnchorListeners();
    };

    // Initial setup of anchor listeners
    attachAnchorListeners();

    // Simple intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate', 'visible');
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.fade-in, .pricing-card, .step-card, .feature-card');
    animatedElements.forEach(el => observer.observe(el));

    // Add click handlers for pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-cta');
    const handlePricingClick = (e: Event) => {
      const button = e.currentTarget as HTMLButtonElement;
      const budget = button.getAttribute('data-budget');
      const budgetSelect = document.getElementById('budget') as HTMLSelectElement;
      if (budgetSelect && budget) {
        budgetSelect.value = budget;
      }
      
      // Scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    pricingButtons.forEach(button => {
      button.addEventListener('click', handlePricingClick);
    });

    // Form submission handling
    const form = document.querySelector('.contact-form') as HTMLFormElement;
    const handleFormSubmit = () => {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Reset button after form submission (Formspree will handle the redirect)
      setTimeout(() => {
        submitButton.textContent = originalText || 'Send Message';
        submitButton.disabled = false;
      }, 1000);
    };

    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    // Cleanup function
    return () => {
      if (translateButton) {
        translateButton.removeEventListener('click', handleTranslate);
      }
      if (mobileMenuToggle) {
        mobileMenuToggle.removeEventListener('click', handleMobileMenuClick);
      }
      removeAnchorListeners();
      pricingButtons.forEach(button => {
        button.removeEventListener('click', handlePricingClick);
      });
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <a href="#" className="logo">
            <span className="logo-text">327.io</span>
            <div className="logo-glow"></div>
          </a>
          
          <ul className="nav-links" id="navLinks">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="nav-controls">
            <button 
              id="translateButton" 
              className="translate-btn"
              aria-label="Translate to French"
            >
              FR
            </button>
            
            <button className="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle mobile menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="gradient-text" data-translate="hero-main">TRANSFORM YOUR BUSINESS WITH AI</span>
                  <br />
                  <span className="typewriter" data-translate="hero-sub">Get More Leads. Close More Sales. Scale Faster.</span>
                </h1>
                <p className="subtitle">Stop losing customers to competitors. Our AI systems work 24/7 to capture leads, nurture prospects, and drive sales while you sleep.</p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">
                    <span>Get a quote</span>
                    <div className="btn-shine"></div>
                  </a>
                  <a href="#pricing" className="btn btn-secondary">
                    <span>See pricing</span>
                    <div className="btn-shine"></div>
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <div className="mockup-card floating">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2"/>
                    <path d="M25 40L35 50L55 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>AI-Powered Business Growth</h3>
                  <p>From websites to automation, we build the infrastructure that scales your business.</p>
                  <div className="card-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="stats-strip parallax">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item counter" data-target="245">
                <h4>+245%</h4>
                <p>Avg. increase in leads</p>
              </div>
              <div className="stat-item counter" data-target="7">
                <h4>7 days</h4>
                <p>Average delivery time</p>
              </div>
              <div className="stat-item counter" data-target="24">
                <h4>24/7</h4>
                <p>AI systems monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="container">
            <div className="text-center">
              <h2>STOP LOSING MONEY TO OUTDATED SYSTEMS</h2>
              <p className="text-large">Your competitors are already using AI to steal your customers. Here's how we help you fight back:</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card fade-in hover-lift">
                <svg className="feature-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="15" width="50" height="35" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 25H45M15 35H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="30" cy="10" r="3" fill="currentColor"/>
                </svg>
                <h3>Website + SEO</h3>
                <p><strong>Transform visitors into customers automatically.</strong> Our intelligent sales funnels guide your prospects step by step to purchase, without manual intervention.</p>
                <div className="feature-glow"></div>
              </div>
              
              <div className="feature-card fade-in hover-lift">
                <svg className="feature-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 30L27 37L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 20L15 15M50 20L45 15M10 40L15 45M50 40L45 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3>Automated Sales Funnels</h3>
                <p><strong>Transform visitors into customers automatically.</strong> Our intelligent sales funnels guide your prospects step by step to purchase, without manual intervention.</p>
                <div className="feature-glow"></div>
              </div>
              
              <div className="feature-card fade-in hover-lift">
                <svg className="feature-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 5C35 5 40 10 40 15V25C40 30 35 35 30 35C25 35 20 30 20 25V15C20 10 25 5 30 5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 25H45M30 35V45M25 45H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="25" cy="15" r="2" fill="currentColor"/>
                  <circle cx="35" cy="15" r="2" fill="currentColor"/>
                </svg>
                <h3>AI Agents</h3>
                <p><strong>Never miss a sale again.</strong> Our AI agents work around the clock, answering questions, booking appointments, and qualifying leads while you focus on growing your business.</p>
                <div className="feature-glow"></div>
              </div>
              
              <div className="feature-card fade-in hover-lift">
                <svg className="feature-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10C35 10 40 15 40 20V30C40 35 35 40 30 40C25 40 20 35 20 30V20C20 15 25 10 30 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 25L30 30L45 25M30 40V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="25" cy="20" r="2" fill="currentColor"/>
                  <circle cx="35" cy="20" r="2" fill="currentColor"/>
                  <path d="M25 50H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3>Custom AI Solutions</h3>
                <p><strong>Eliminate your business friction points.</strong> We analyze your processes and create custom AI solutions to automate repetitive tasks and optimize your operations.</p>
                <div className="feature-glow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing" id="pricing">
          <div className="container">
            <div className="text-center">
              <h2>SIMPLE PRICING, MASSIVE RESULTS</h2>
              <p className="text-large">No hidden fees. No long contracts. Just results that pay for themselves.</p>
            </div>
            
            <div className="pricing-grid">
              <div className="pricing-card hover-lift" data-budget="Website Only">
                <h3>Website Only</h3>
                <div className="price">300$</div>
                <ul>
                  <li>Responsive website design</li>
                  <li>Contact form integration</li>
                  <li>Basic SEO setup</li>
                  <li>1 revision included</li>
                  <li>3-day turnaround</li>
                </ul>
                <button className="btn btn-primary pricing-cta" data-budget="Website Only">
                  <span data-en="Order Website — $300" data-fr="Commander Website — 300$">Commander Website — 300$</span>
                  <div className="btn-shine"></div>
                </button>
                <div className="card-glow"></div>
              </div>
              
              <div className="pricing-card hover-lift" data-budget="Website + Sales Funnel">
                <h3>Website + Sales Funnel</h3>
                <div className="price">1000$-1500$</div>
                <ul>
                  <li>Everything in Website Only</li>
                  <li>Automated sales funnel</li>
                  <li>Email marketing automation</li>
                  <li>Lead nurturing sequences</li>
                  <li>2 revisions included</li>
                  <li>7-day timeline</li>
                </ul>
                <button className="btn btn-primary pricing-cta" data-budget="Website + Sales Funnel">
                  <span>Order Website + Funnel — $1000+</span>
                  <div className="btn-shine"></div>
                </button>
                <div className="card-glow"></div>
              </div>
              
              <div className="pricing-card best-value hover-lift pulse" data-budget="AI Solution Sur Mesure">
                <h3>Custom AI Solution</h3>
                <div className="price">Contact for quote</div>
                <ul>
                  <li>Website + Sales funnel</li>
                  <li>Custom AI chatbot/agents</li>
                  <li>Automation workflows</li>
                  <li>Analytics dashboard</li>
                  <li>Training & onboarding</li>
                  <li>4 revisions included</li>
                  <li>Custom timeline</li>
                </ul>
                <button className="btn btn-primary pricing-cta" data-budget="AI Solution Sur Mesure">
                  <span>Get Custom Quote</span>
                  <div className="btn-shine"></div>
                </button>
                <div className="card-glow premium"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works" id="how-it-works">
          <div className="container">
            <div className="text-center">
              <h2>How It Works</h2>
              <p className="text-large">Simple process, powerful results</p>
            </div>
            
            <div className="steps-grid">
              <div className="step-card fade-in hover-lift">
                <div className="step-number">1</div>
                <h3>Strategy Call</h3>
                <p><strong>We find your biggest revenue leaks.</strong> In 30 minutes, we'll identify exactly where you're losing money and show you how AI can plug those holes.</p>
                <div className="step-line"></div>
              </div>
              
              <div className="step-card fade-in hover-lift">
                <div className="step-number">2</div>
                <h3>Build & Iterate</h3>
                <p><strong>We build your money-making machine.</strong> No waiting months for results. We build, test, and optimize your AI systems while keeping you in the loop every step.</p>
                <div className="step-line"></div>
              </div>
              
              <div className="step-card fade-in hover-lift">
                <div className="step-number">3</div>
                <h3>Launch & Monitor</h3>
                <p><strong>Watch your revenue grow on autopilot.</strong> We launch your systems and monitor them 24/7, making sure every lead is captured and every opportunity is maximized.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="text-center">
              <h2>READY TO STOP LOSING CUSTOMERS?</h2>
              <p className="text-large">Every day you wait is money walking out the door. Let's fix that.</p>
            </div>
            
            <div className="contact-content">
              <form className="contact-form" action="https://formspree.io/f/xqayzggj" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" required>
                    <option value="">Select your budget</option>
                    <option value="Website Only (300$)">Website Only (300$)</option>
                    <option value="Website + Sales Funnel (1000$-1500$)">Website + Sales Funnel (1000$-1500$)</option>
                    <option value="Custom AI Solution (Contact for quote)">Custom AI Solution (Contact for quote)</option>
                    <option value="Custom (Let's discuss)">Custom (Let's discuss)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your business and goals..." required></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
                
                <p className="response-time">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>327.io</h4>
              <p>AI infrastructure for businesses that want to grow.</p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#features">Website Development</a></li>
                <li><a href="#features">Automated Sales Funnels</a></li>
                <li><a href="#features">AI Agents & Chatbots</a></li>
                <li><a href="#features">Custom AI Solutions</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@327.io</p>
              <p>Response time: &lt; 24 hours</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 327.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
