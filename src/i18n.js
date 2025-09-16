import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      },
      
      // Hero Section
      hero: {
        greeting: "Hi, I'm",
        name: "Elyes Darouich",
        title: "Mobile Software Engineer",
        subtitle: "Passionate about crafting exceptional mobile experiences",
        description: "5th year Engineering Student at ESPRIT, specializing in mobile development with Flutter, Swift, and Kotlin. Creating innovative solutions that bridge technology and user experience.",
        cta: "Get In Touch",
        downloadCV: "Download CV",
        stats: {
          years: "Years at ESPRIT",
          projects: "Projects",
          internships: "Internships"
        }
      },
      
      // About Section
      about: {
        title: "About Me",
        subtitle: "Get to know me better",
        intro: "I'm a passionate mobile software engineer currently in my 5th year at ESPRIT (3ème année cycle d'ingénieur), specializing in cross-platform mobile development. With expertise in iOS, Android, Flutter, and modern web technologies, I love creating innovative solutions that solve real-world problems.",
        location: "Bizerte, Tunisia",
        age: "23 years old",
        email: "skyrexcgaming@gmail.com",
        phone: "+216 94 906 400",
        description: "Mobile Software Engineer with expertise in iOS (SwiftUI, UIKit), Android (Kotlin), and cross-platform development (Flutter). Proficient in full-stack web development with React, NestJS, Next.js, and Spring Boot. Experienced in AI/ML integration, DevOps practices, and agile methodologies.",
        languages: {
          title: "Languages",
          arabic: "Arabic - Native",
          french: "French - Advanced (B2)",
          english: "English - Fluent (C1)"
        },
        interests: {
          title: "Interests",
          problemSolving: "Problem Solving",
          mobileDev: "Mobile Development", 
          hackathons: "Hackathons & Programming Competitions",
          aiTech: "AI & New Technologies"
        }
      },
      
      // Experience Section
      experience: {
        title: "Experience & Education",
        subtitle: "My professional journey and academic background",
        labels: {
          internship: "Internship",
          education: "Education",
          achievements: "Key Achievements:",
          technologies: "Technologies & Skills:"
        },
        content: {
          talan: {
            title: "Engineering Intern - Mobile & Backend Development",
            company: "Talan Tunisia",
            description: "ProjectFlow - Cross-platform project management platform with AI integration",
            achievements: [
              "Designed and developed full-stack application using Flutter & NestJS architecture",
              "Implemented JWT + Google OAuth authentication with role-based access control",
              "Built responsive Kanban board with drag-and-drop functionality across platforms",
              "Integrated real-time collaboration features using WebSockets and Socket.IO",
              "Developed AI Assistant powered by Google Gemini 2.0 Flash for task automation",
              "Implemented DevOps pipeline with Docker, GitHub Actions, and Nginx deployment",
              "Achieved <150ms API response time with stable performance for 100+ users",
              "Contributed to 78% test coverage with comprehensive unit and integration testing"
            ]
          },
          vatech2023: {
            title: "Flutter Developer Intern",
            company: "Vatech WABAG",
            description: "Employee leave management automation system",
            achievements: [
              "Developed Flutter application for employee leave management automation",
              "Built RESTful API for seamless backend communication and data processing",
              "Designed intuitive user interface with real-time push notifications",
              "Collaborated with HR team to gather and implement functional requirements",
              "Implemented secure authentication and role-based access control system"
            ]
          },
          vatech2022: {
            title: "Industrial Trainee",
            company: "Vatech WABAG",
            description: "Introduction to business processes and team collaboration",
            achievements: [
              "Learned company management and organizational processes",
              "Developed teamwork and internal communication skills",
              "Discovered IT project lifecycle in enterprise environment",
              "Participated in cross-functional team meetings and planning sessions"
            ]
          },
          esprit: {
            title: "Computer Engineering - Mobile Development",
            company: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
            description: "Currently 5th year student, 3ème année cycle d'ingénieur (completed 4th year internship at Talan)",
            achievements: [
              "Specialized in mobile application development and cross-platform solutions",
              "Completed engineering internship at Talan Tunisia developing ProjectFlow platform",
              "Advanced coursework in software architecture, AI integration, and system design",
              "Hands-on experience with modern development frameworks and DevOps practices",
              "Active participation in hackathons and programming competitions",
              "Strong foundation in algorithms, data structures, and enterprise development"
            ]
          },
          bac: {
            title: "Baccalauréat in Computer Science",
            company: "Lycée Jeune Fille",
            description: "High school diploma with specialization in Computer Science",
            achievements: [
              "Graduated with specialization in Computer Science and Mathematics",
              "Strong foundation in programming fundamentals and logical thinking",
              "Participated in national mathematics and computer science competitions",
              "Developed early passion for software development and problem solving"
            ]
          }
        }
      },
      
      // Projects Section
      projects: {
        title: "Projects",
        subtitle: "What I've been working on",
        categories: {
          mobile: "Mobile App",
          web: "Web App",
          desktop: "Desktop App",
          academic: "Academic Projects",
          academicDesc: "Projects developed during my engineering studies at ESPRIT",
          internship: "Internship Projects", 
          internshipDesc: "Professional projects completed during internships",
          personal: "Personal Projects",
          personalDesc: "Side projects and personal initiatives"
        },
        labels: {
          features: "Key Features"
        },
        demos: {
          title: "Mobile Demos",
          subtitle: "Live demonstrations of mobile applications"
        },
        content: {
          // Internship Projects
          projectflow: {
            title: "ProjectFlow - AI Project Management Platform",
            description: "Modern collaborative project management platform with AI integration developed during internship at Talan Tunisia",
            demoDesc: "Cross-platform project management with AI assistant",
            features: [
              "Real-time Kanban boards with drag-and-drop functionality",
              "AI assistant powered by Google Gemini 2.0 Flash for task automation",
              "Cross-platform support (Mobile, Web, Desktop)",
              "WebSocket real-time collaboration features",
              "JWT authentication with Google OAuth integration",
              "Sprint management and analytics dashboard",
              "Docker containerization and CI/CD pipeline",
              "Achieved <150ms API response time for 100+ users"
            ]
          },
          employeeleave: {
            title: "Employee Leave Management System",
            description: "Flutter application for automating employee leave management processes at Vatech WABAG",
            features: [
              "Automated leave request and approval workflow",
              "RESTful API integration for backend communication",
              "Intuitive user interface with real-time notifications",
              "Collaboration with HR team for functional requirements",
              "Secure authentication and role-based access control"
            ]
          },
          // Personal Projects  
          riftpedia: {
            title: "Riftpedia - League of Legends Match Tracker",
            description: "iOS application built with SwiftUI for tracking League of Legends match statistics and game analysis",
            demoDesc: "Track LoL matches with interactive Runeterra map",
            features: [
              "Detailed match statistics and performance analysis",
              "Champion build recommendations and meta analysis",
              "Rank tracking and progression visualization",
              "Interactive Runeterra map with MapKit integration",
              "Riot Games API integration with real-time match data",
              "Match history and detailed gameplay insights",
              "Open-source project available on GitHub"
            ]
          },
          // Academic Projects
          languagelearning: {
            title: "Multi-platform Language Learning Application",
            description: "Cross-platform language learning app with interactive exercises and gamification features",
            features: [
              "Interactive exercises and quiz system",
              "Progress tracking and performance analytics",
              "Point-based gamification system",
              "Voice recognition integration for pronunciation",
              "Administrative dashboard built with Flutter",
              "Cross-platform compatibility (iOS/Android)"
            ]
          },
          smarttravel: {
            title: "Smart Travel Recommendation Platform",
            description: "AI-powered travel platform providing personalized itineraries and intelligent recommendations",
            features: [
              "AI-powered travel recommendations using Gemini",
              "Geolocation services and route optimization",
              "Personalized itinerary planning and management",
              "Real-time travel updates and notifications",
              "Integration with maps and location services"
            ]
          },
          footballplatform: {
            title: "Football News & E-commerce Platform",
            description: "Comprehensive web platform combining football news management with e-commerce functionality",
            features: [
              "Latest football news and updates management",
              "Integrated online store and product catalog",
              "Team management and player statistics system",
              "User authentication and profile management",
              "Relational database for data storage and retrieval"
            ]
          },
          firedetection: {
            title: "Real-time Fire Detection System",
            description: "IoT-based fire and smoke detection system for Smart Lab with real-time monitoring",
            features: [
              "Arduino sensor integration for smoke detection",
              "Real-time fire and smoke detection algorithms",
              "Alert management and notification system",
              "Data visualization dashboard with Qt C++",
              "IoT connectivity for remote monitoring"
            ]
          },
          smartlabwebsite: {
            title: "Smart Lab Dynamic Website",
            description: "Dynamic content management website for Smart Lab with custom CMS functionality",
            features: [
              "Custom content management system",
              "Responsive design for all devices",
              "Dynamic content updates and management",
              "User-friendly admin interface",
              "Database integration for content storage"
            ]
          },
          sdlgame: {
            title: "2D Game Development with SDL",
            description: "2D video game developed in C using SDL library with custom game mechanics",
            features: [
              "Custom game mechanics and collision detection",
              "Scoring system and level progression",
              "Level design and asset creation",
              "SDL library integration for graphics",
              "Game physics and character movement"
            ]
          }
        }
      },
      
      // Skills Section
      skills: {
        title: "Skills",
        subtitle: "Technologies I work with",
        categories: {
          languages: "Programming Languages",
          mobile: "Mobile Development", 
          web: "Web Development",
          databases: "Databases",
          tools: "Tools & Platforms",
          methodologies: "Methodologies"
        },
        items: {
          java: "Java",
          javascript: "JavaScript",
          cpp: "C++",
          c: "C",
          php: "PHP", 
          swift: "Swift",
          dart: "Dart/Flutter",
          html: "HTML",
          css: "CSS",
          nestjs: "NestJS",
          springboot: "Spring Boot",
          dotnet: ".NET",
          symfony: "Symfony",
          flutter: "Flutter",
          kotlin: "Kotlin",
          mysql: "MySQL",
          mongodb: "MongoDB",
          git: "Git/GitHub",
          powerbi: "PowerBI", 
          linux: "Linux",
          arduino: "Arduino",
          agile: "Agile/Scrum",
          uml: "UML"
        }
      },
      
      // Contact Section
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together",
        description: "I'm always interested in new opportunities and exciting projects. Whether you want to discuss a potential collaboration or just say hello, feel free to reach out!",
        form: {
          name: "Your Name",
          email: "Your Email", 
          subject: "Subject",
          message: "Your Message",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again."
        },
        social: {
          github: "GitHub",
          linkedin: "LinkedIn",
          email: "Email"
        }
      },
      
      // Common
      common: {
        loading: "Loading...",
        loadingPortfolio: "Loading Portfolio...",
        name: "Elyes Darouich",
        title: "Mobile Software Engineer",
        footer: "Crafted with ❤️ and React",
        error: "Something went wrong",
        retry: "Retry",
        close: "Close",
        readMore: "Read More",
        readLess: "Read Less"
      }
    }
  },
  
  fr: {
    translation: {
      // Navigation
      nav: {
        about: "À Propos",
        experience: "Expérience", 
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact"
      },
      
      // Hero Section
      hero: {
        greeting: "Salut, je suis",
        name: "Elyes Darouich",
        title: "Ingénieur Logiciel Mobile",
        subtitle: "Passionné par la création d'expériences mobiles exceptionnelles",
        description: "Étudiant en 5ème année d'ingénierie à ESPRIT (3ème année cycle d'ingénieur), spécialisé dans le développement mobile avec Flutter, Swift et Kotlin. Je crée des solutions innovantes qui lient technologie et expérience utilisateur.",
        cta: "Me Contacter",
        downloadCV: "Télécharger CV",
        stats: {
          years: "Années à ESPRIT",
          projects: "Projets",
          internships: "Stages"
        }
      },
      
      // About Section
      about: {
        title: "À Propos",
        subtitle: "Apprenez à mieux me connaître",
        intro: "Je suis un ingénieur logiciel mobile passionné actuellement en 5ème année à ESPRIT (3ème année cycle d'ingénieur), spécialisé dans le développement mobile multiplateforme. Avec une expertise en iOS, Android, Flutter et technologies web modernes, j'adore créer des solutions innovantes qui résolvent des problèmes du monde réel.",
        location: "Bizerte, Tunisie",
        age: "23 ans",
        email: "skyrexcgaming@gmail.com", 
        phone: "+216 94 906 400",
        description: "Ingénieur Logiciel Mobile avec expertise en iOS (SwiftUI, UIKit), Android (Kotlin), et développement multiplateforme (Flutter). Compétent en développement web full-stack avec React, NestJS, Next.js, et Spring Boot. Expérimenté en intégration IA/ML, pratiques DevOps, et méthodologies agiles.",
        languages: {
          title: "Langues",
          arabic: "Arabe - Langue maternelle",
          french: "Français - Avancé (B2)",
          english: "Anglais - Courant (C1)"
        },
        interests: {
          title: "Centres d'intérêt",
          problemSolving: "Résolution de problèmes",
          mobileDev: "Développement Mobile",
          hackathons: "Hackathons & Compétitions",
          aiTech: "IA & Nouvelles Technologies"
        }
      },
      
      // Experience Section
      experience: {
        title: "Expérience & Formation",
        subtitle: "Mon parcours professionnel et académique",
        labels: {
          internship: "Stage",
          education: "Formation",
          achievements: "Réalisations Clés :",
          technologies: "Technologies & Compétences :"
        },
        content: {
          talan: {
            title: "Stagiaire Ingénieur - Développement Mobile & Backend",
            company: "Talan Tunisie",
            description: "ProjectFlow - Plateforme de gestion de projets multiplateforme avec intégration IA",
            achievements: [
              "Conçu et développé une application full-stack avec architecture Flutter & NestJS",
              "Implémenté authentification JWT + Google OAuth avec contrôle d'accès basé sur les rôles",
              "Créé un tableau Kanban responsive avec fonctionnalité glisser-déposer multi-plateformes",
              "Intégré des fonctionnalités de collaboration en temps réel avec WebSockets et Socket.IO",
              "Développé un assistant IA alimenté par Google Gemini 2.0 Flash pour l'automatisation",
              "Implémenté pipeline DevOps avec déploiement Docker, GitHub Actions et Nginx",
              "Atteint temps de réponse API <150ms avec performance stable pour 100+ utilisateurs",
              "Contribué à 78% de couverture de tests avec tests unitaires et d'intégration complets"
            ]
          },
          vatech2023: {
            title: "Stagiaire Développeur Flutter",
            company: "Vatech WABAG",
            description: "Système d'automatisation de gestion des congés employés",
            achievements: [
              "Développé application Flutter pour automatisation de gestion des congés employés",
              "Créé API RESTful pour communication backend fluide et traitement des données",
              "Conçu interface utilisateur intuitive avec notifications push en temps réel",
              "Collaboré avec équipe RH pour recueillir et implémenter exigences fonctionnelles",
              "Implémenté système d'authentification sécurisé et contrôle d'accès basé sur les rôles"
            ]
          },
          vatech2022: {
            title: "Stagiaire Ouvrier",
            company: "Vatech WABAG",
            description: "Initiation aux processus d'entreprise et collaboration en équipe",
            achievements: [
              "Appris les processus de gestion et d'organisation de l'entreprise",
              "Développé compétences de travail en équipe et communication interne",
              "Découvert cycle de vie des projets IT en environnement d'entreprise",
              "Participé aux réunions d'équipes transversales et sessions de planification"
            ]
          },
          esprit: {
            title: "Ingénierie Informatique - Développement Mobile",
            company: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
            description: "Actuellement étudiant 5ème année, 3ème année cycle d'ingénieur (stage 4ème année accompli chez Talan)",
            achievements: [
              "Spécialisé en développement d'applications mobiles et solutions multiplateformes",
              "Stage d'ingénieur accompli chez Talan Tunisie développant la plateforme ProjectFlow",
              "Cours avancés en architecture logicielle, intégration IA et conception de systèmes",
              "Expérience pratique avec frameworks de développement modernes et pratiques DevOps",
              "Participation active aux hackathons et compétitions de programmation",
              "Base solide en algorithmes, structures de données et développement d'entreprise"
            ]
          },
          bac: {
            title: "Baccalauréat en Informatique",
            company: "Lycée Jeune Fille",
            description: "Diplôme d'études secondaires avec spécialisation en Informatique",
            achievements: [
              "Diplômé avec spécialisation en Informatique et Mathématiques",
              "Base solide en fondamentaux de programmation et pensée logique",
              "Participé aux compétitions nationales de mathématiques et informatique",
              "Développé passion précoce pour développement logiciel et résolution de problèmes"
            ]
          }
        }
      },      // Projects Section
      projects: {
        title: "Projets",
        subtitle: "Ce sur quoi j'ai travaillé",
        categories: {
          mobile: "App Mobile",
          web: "App Web",
          desktop: "App Bureau",
          academic: "Projets Académiques",
          academicDesc: "Projets développés durant mes études d'ingénieur à ESPRIT",
          internship: "Projets de Stage",
          internshipDesc: "Projets professionnels réalisés durant les stages",
          personal: "Projets Personnels",
          personalDesc: "Projets personnels et initiatives privées"
        },
        labels: {
          features: "Fonctionnalités Clés"
        },
        demos: {
          title: "Démonstrations Mobile",
          subtitle: "Démonstrations en direct d'applications mobiles"
        },
        content: {
          // Projets de Stage
          projectflow: {
            title: "ProjectFlow - Plateforme de Gestion de Projet IA",
            description: "Plateforme collaborative moderne de gestion de projet avec intégration IA développée durant le stage chez Talan Tunisie",
            demoDesc: "Gestion de projet multiplateforme avec assistant IA",
            features: [
              "Tableaux Kanban temps réel avec fonctionnalité glisser-déposer",
              "Assistant IA alimenté par Google Gemini 2.0 Flash pour automatisation",
              "Support multiplateforme (Mobile, Web, Bureau)",
              "Fonctionnalités de collaboration temps réel WebSocket",
              "Authentification JWT avec intégration Google OAuth",
              "Gestion de sprints et tableau de bord analytique",
              "Conteneurisation Docker et pipeline CI/CD",
              "Temps de réponse API <150ms pour 100+ utilisateurs"
            ]
          },
          employeeleave: {
            title: "Système de Gestion des Congés Employés",
            description: "Application Flutter pour automatiser les processus de gestion des congés employés chez Vatech WABAG",
            features: [
              "Workflow automatisé de demande et approbation de congés",
              "Intégration API RESTful pour communication backend",
              "Interface utilisateur intuitive avec notifications temps réel",
              "Collaboration avec équipe RH pour exigences fonctionnelles",
              "Authentification sécurisée et contrôle d'accès basé sur rôles"
            ]
          },
          // Projets Personnels
          riftpedia: {
            title: "Riftpedia - Tracker League of Legends",
            description: "Application iOS construite avec SwiftUI pour suivre les statistiques de matchs League of Legends et analyses de jeu",
            demoDesc: "Suivi des matchs LoL avec carte interactive de Runeterra",
            features: [
              "Statistiques détaillées des matchs et analyse de performance",
              "Recommandations de builds de champions et analyse méta",
              "Suivi du rang et visualisation de progression",
              "Carte interactive de Runeterra avec intégration MapKit",
              "Intégration API Riot Games avec données de matchs temps réel",
              "Historique des matchs et insights détaillés du gameplay",
              "Projet open-source disponible sur GitHub"
            ]
          },
          // Projets Académiques
          languagelearning: {
            title: "Application d'Apprentissage de Langues Multiplateforme",
            description: "App d'apprentissage de langues multiplateforme avec exercices interactifs et fonctionnalités de gamification",
            features: [
              "Exercices interactifs et système de quiz",
              "Suivi de progression et analytiques de performance",
              "Système de gamification basé sur points",
              "Intégration reconnaissance vocale pour prononciation",
              "Tableau de bord administratif construit avec Flutter",
              "Compatibilité multiplateforme (iOS/Android)"
            ]
          },
          smarttravel: {
            title: "Plateforme de Recommandation de Voyage Intelligente",
            description: "Plateforme de voyage alimentée par IA fournissant itinéraires personnalisés et recommandations intelligentes",
            features: [
              "Recommandations de voyage alimentées par IA avec Gemini",
              "Services de géolocalisation et optimisation d'itinéraires",
              "Planification et gestion d'itinéraires personnalisés",
              "Mises à jour de voyage temps réel et notifications",
              "Intégration avec cartes et services de localisation"
            ]
          },
          footballplatform: {
            title: "Plateforme d'Actualités Football & E-commerce",
            description: "Plateforme web complète combinant gestion d'actualités football avec fonctionnalités e-commerce",
            features: [
              "Gestion des dernières actualités et mises à jour football",
              "Boutique en ligne intégrée et catalogue produits",
              "Système de gestion d'équipes et statistiques joueurs",
              "Authentification utilisateur et gestion de profil",
              "Base de données relationnelle pour stockage et récupération"
            ]
          },
          firedetection: {
            title: "Système de Détection d'Incendie Temps Réel",
            description: "Système de détection d'incendie et fumée basé IoT pour Smart Lab avec surveillance temps réel",
            features: [
              "Intégration capteurs Arduino pour détection fumée",
              "Algorithmes de détection d'incendie et fumée temps réel",
              "Système de gestion d'alertes et notifications",
              "Tableau de bord visualisation données avec Qt C++",
              "Connectivité IoT pour surveillance à distance"
            ]
          },
          smartlabwebsite: {
            title: "Site Web Dynamique Smart Lab",
            description: "Site web de gestion de contenu dynamique pour Smart Lab avec fonctionnalité CMS personnalisée",
            features: [
              "Système de gestion de contenu personnalisé",
              "Design responsive pour tous appareils",
              "Mises à jour et gestion de contenu dynamiques",
              "Interface admin conviviale",
              "Intégration base de données pour stockage contenu"
            ]
          },
          sdlgame: {
            title: "Développement Jeu 2D avec SDL",
            description: "Jeu vidéo 2D développé en C utilisant bibliothèque SDL avec mécaniques de jeu personnalisées",
            features: [
              "Mécaniques de jeu personnalisées et détection collisions",
              "Système de score et progression de niveaux",
              "Conception de niveaux et création d'assets",
              "Intégration bibliothèque SDL pour graphiques",
              "Physique de jeu et mouvement de personnages"
            ]
          }
        }
      },
      
      // Skills Section
      skills: {
        title: "Compétences",
        subtitle: "Technologies avec lesquelles je travaille",
        categories: {
          languages: "Langages de Programmation",
          mobile: "Développement Mobile",
          web: "Développement Web", 
          databases: "Bases de Données",
          tools: "Outils & Plateformes",
          methodologies: "Méthodologies"
        },
        items: {
          java: "Java",
          javascript: "JavaScript",
          cpp: "C++",
          c: "C",
          php: "PHP",
          swift: "Swift", 
          dart: "Dart/Flutter",
          html: "HTML",
          css: "CSS",
          nestjs: "NestJS",
          springboot: "Spring Boot",
          dotnet: ".NET",
          symfony: "Symfony",
          flutter: "Flutter",
          kotlin: "Kotlin",
          mysql: "MySQL",
          mongodb: "MongoDB",
          git: "Git/GitHub",
          powerbi: "PowerBI",
          linux: "Linux",
          arduino: "Arduino",
          agile: "Agile/Scrum",
          uml: "UML"
        }
      },
      
      // Contact Section
      contact: {
        title: "Entrer en Contact",
        subtitle: "Travaillons ensemble",
        description: "Je suis toujours intéressé par de nouvelles opportunités et projets passionnants. Que vous souhaitiez discuter d'une collaboration potentielle ou simplement dire bonjour, n'hésitez pas à me contacter !",
        form: {
          name: "Votre Nom",
          email: "Votre Email",
          subject: "Sujet",
          message: "Votre Message", 
          send: "Envoyer Message",
          sending: "Envoi en cours...",
          success: "Message envoyé avec succès !",
          error: "Échec de l'envoi. Veuillez réessayer."
        },
        social: {
          github: "GitHub",
          linkedin: "LinkedIn",
          email: "Email"
        }
      },
      
      // Common
      common: {
        loading: "Chargement...",
        loadingPortfolio: "Chargement Portfolio...",
        name: "Elyes Darouich",
        title: "Ingénieur Logiciel Mobile",
        footer: "Conçu avec ❤️ et React",
        error: "Une erreur s'est produite",
        retry: "Réessayer",
        close: "Fermer",
        readMore: "Lire Plus",
        readLess: "Lire Moins"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;