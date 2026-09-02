export interface Project {
  id: number
  titleKey: string
  shortDescriptionKey: string
  descriptionKey: string
  technologies: string[]
  featureKeys: string[]

  architecture: {
    frontend: string
    backend: string
    database: string
    cloud: string[]
  }

  repositories?: {
    name: string
    url: string
  }[]

  demo?: string
}

export const projects: Project[] = [
  {
    id: 1,

    titleKey: 'projects.items.activityManager.title',

    shortDescriptionKey:
      'projects.items.activityManager.shortDescription',

    descriptionKey:
      'projects.items.activityManager.description',

    technologies: [
      'Nuxt',
      'Vue',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'AWS Lambda',
      'Amazon EventBridge',
      'REST API',
      'Git'
    ],

    featureKeys: [
      'projects.items.activityManager.features.explore',
      'projects.items.activityManager.features.registration',
      'projects.items.activityManager.features.auth',
      'projects.items.activityManager.features.organizerManagement',
      'projects.items.activityManager.features.activityCreation',
      'projects.items.activityManager.features.userManagement',
      'projects.items.activityManager.features.activityManagement',
      'projects.items.activityManager.features.persistence',
      'projects.items.activityManager.features.api',
      'projects.items.activityManager.features.lambda',
      'projects.items.activityManager.features.eventBridge'
    ],

    architecture: {
      frontend: 'Nuxt + Vue + TypeScript',
      backend: 'Node.js + Express',
      database: 'MongoDB Atlas + Mongoose',
      cloud: [
        'AWS Lambda',
        'Amazon EventBridge'
      ]
    },

    repositories: [
      {
        name: 'Frontend',
        url: 'https://github.com/JohnArayaE/ProyectoWeb2_Fronted'
      },
      {
        name: 'Backend',
        url: 'https://github.com/RNVG/ProyectoWeb2_Back'
      },
      {
        name: 'AWS Lambda',
        url: 'https://github.com/JohnArayaE/ProyectoWeb2_Lambda'
      }
    ]
  },

  {
    id: 2,

    titleKey: 'projects.items.aventones.title',

    shortDescriptionKey:
      'projects.items.aventones.shortDescription',

    descriptionKey:
      'projects.items.aventones.description',

    technologies: [
      'Laravel',
      'PostgreSQL',
      'REST API',
      'Git'
    ],

    featureKeys: [
      'projects.items.aventones.features.auth',
      'projects.items.aventones.features.search',
      'projects.items.aventones.features.driverInfo',
      'projects.items.aventones.features.vehicleInfo',
      'projects.items.aventones.features.fares',
      'projects.items.aventones.features.requestRide',
      'projects.items.aventones.features.vehicleManagement',
      'projects.items.aventones.features.tripManagement',
      'projects.items.aventones.features.requestManagement',
      'projects.items.aventones.features.adminManagement',
      'projects.items.aventones.features.dataProtection'
    ],

    architecture: {
      frontend: 'Laravel Blade',
      backend: 'Laravel',
      database: 'PostgreSQL',
      cloud: []
    },

    repositories: [
      {
        name: 'Frontend',
        url: 'https://github.com/RNVG/Proyec-FrontWeb'
      },
      {
        name: 'Backend',
        url: 'https://github.com/JohnArayaE/Proyecto-WEB-ll'
      }
    ]
  }
]