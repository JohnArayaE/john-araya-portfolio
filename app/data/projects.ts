export interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  technologies: string[]
  features: string[]

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

    title: 'Gestor de Actividades',

    shortDescription:
      'Plataforma web para la gestión y participación en actividades. Los usuarios pueden explorar e inscribirse en actividades, los organizadores pueden crearlas y administrarlas, y los administradores cuentan con gestión completa de usuarios y actividades.',

    description:
      'Gestor de Actividades es una aplicación full stack diseñada para centralizar la creación, administración y participación en actividades. Los usuarios pueden consultar las actividades disponibles y registrarse en aquellas de su interés. Los organizadores cuentan con herramientas para crear y gestionar sus actividades, mientras que el rol administrador posee control general sobre la plataforma, incluyendo la gestión de usuarios y actividades. La solución utiliza Nuxt y Vue en el frontend, una API REST desarrollada con Node.js y Express, y MongoDB Atlas como base de datos mediante Mongoose. Además, se incorporó una arquitectura basada en eventos con Amazon EventBridge y AWS Lambda para automatizar procesos y generar recordatorios relacionados con las actividades.',

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

    features: [
      'Exploración de actividades disponibles por parte de los usuarios',
      'Inscripción de usuarios en actividades',
      'Autenticación y autorización basada en roles',
      'Gestión de actividades por parte de los organizadores',
      'Creación y administración de actividades',
      'Gestión completa de usuarios por parte del administrador',
      'Gestión completa de actividades por parte del administrador',
      'Persistencia de información mediante MongoDB Atlas',
      'API REST para la comunicación entre frontend y backend',
      'Automatización de recordatorios mediante AWS Lambda',
      'Ejecución programada de procesos con Amazon EventBridge'
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

    title: 'Aventones',

    shortDescription:
      'Aplicación web inspirada en plataformas de transporte como Uber, donde los usuarios pueden buscar viajes disponibles, los conductores pueden publicar y administrar sus recorridos, y los administradores gestionan la operación general del sistema.',

    description:
      'Aventones es una aplicación web de gestión de viajes desarrollada con Laravel y PostgreSQL. La plataforma cuenta con tres roles principales. Los usuarios pueden buscar viajes disponibles desde un punto de origen hasta un destino, consultar información del conductor, del vehículo y las tarifas asociadas, y solicitar participar en un viaje. Los conductores pueden registrar sus datos personales y vehículos, crear viajes específicos y aceptar o rechazar las solicitudes enviadas por los pasajeros. El rol administrador permite gestionar la operación general de la plataforma, incluyendo usuarios, conductores, vehículos y viajes, manteniendo protegida la información sensible de los usuarios.',

    technologies: [
      'Laravel',
      'PostgreSQL',
      'REST API',
      'Git'
    ],

    features: [
      'Autenticación y autorización basada en roles',
      'Búsqueda de viajes por origen y destino',
      'Visualización de información del conductor',
      'Visualización de información del vehículo',
      'Consulta de tarifas asociadas a cada viaje',
      'Solicitud de participación en viajes por parte de los usuarios',
      'Registro y gestión de vehículos por parte de los conductores',
      'Creación y administración de viajes por parte de los conductores',
      'Aceptación o rechazo de solicitudes de pasajeros',
      'Gestión general de usuarios, conductores, vehículos y viajes por parte del administrador',
      'Protección de información sensible de los usuarios'
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