export default {
  global: {
    componenteFormativo: 'Construcción aplicación web',
    descripcionCurso:
      'En este componente formativo se realizará una aplicación web completa <em>(Back-end y Front-end)</em>. Se utilizarán tecnologías del lado del servidor como Node.js, MongoDB, Express y del lado del cliente AngularJS y Materialize. La aplicación consumirá un API REST con el propósito de hacer el registro de empleados en una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Construcción del <em>back-end</em> de la aplicación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Instalación y configuración de herramientas de Node.js',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo del index.js',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Configuración e instalación de la base de datos MongoDB',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Configuración de database.js',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Configuración de las rutas del proyecto con Node.js',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Desarrollo de controladores para la API REST',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Realización de pruebas de la API REST con Postman',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción del <em>Front-end</em> de la aplicación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Instalación y configuración de AngularJS',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Generación de código con <em>ng</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Incorporación de <em>Materialize</em> al proyecto web',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Configuración de app.component.html',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Configuración de los módulos <em>app.module.ts</em>',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Configuración del modelo <em>empleado.ts</em>',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Creación del servicio <em>empleado.service.ts</em>',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Desarrollo del componente <em>empleados.component.ts</em>',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Desarrollo de la interfaz HTML empleados.component.html',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Probando la aplicación completa',
            hash: 't_2_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Descripción Back-end y Fron-end',
      referencia:
        'EDteam. (2020). ¿Qué es Backend y Front-end? (guía completa) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=50RbVujPPGs&feature=youtu.be',
    },
    {
      tema: 'Instalación MongoDB',
      referencia:
        'MongoDB. (2024). Install MongoDB Community Edition on Windows.',
      tipo: 'Instalador',
      link:
        'https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/',
    },
    {
      tema: 'Instalación Node.js y Express',
      referencia:
        'Coding, G. (2020). Cómo instalar Node.js en Windows 10 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgtB31gXkoA&feature=youtu.be',
    },
    {
      tema: 'Guía de instalación Angular CLI',
      referencia: 'Angular. (2024). Installing Angular CLI.',
      tipo: 'Página web',
      link: 'https://angular.io/cli',
    },
    {
      tema: 'Guía de instalación Postman',
      referencia:
        'Limitless Minds. (2019).  Instalación Postman y prueba de los métodos GET [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=440yQGvINkk',
    },
    {
      tema: 'Guía de Materialize',
      referencia: 'Materializecss. (2024). Getting Started - Materialize.',
      tipo: 'Página web',
      link: 'https://materializecss.com/getting-started.html',
    },
    {
      tema: 'Guía extensión VS Code y MongoDB',
      referencia:
        'Developer Soapbox. (2020). How to use Visual Studio Code as your MongoDB IDE [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wM7NJtQ0F6U',
    },
    {
      tema: 'Proyecto web',
      referencia: 'GitLab. (2021). Gestion-empleados.',
      tipo: '<em>Software</em>',
      link: 'https://gitlab.com/jonathanga/gestion-empleados',
    },
  ],
  glosario: [
    {
      termino: '<em>Async</em>',
      significado:
        'cuando se llama a una función <em>async</em>, se devuelve un elemento de tipo promesa o <em>promise</em>. Cuando la función <em>async</em> devuelve un valor, la promesa resolverá con el valor devuelto. Si la función <em>async</em> genera una excepción o algún valor, la promesa se rechazará con el valor generado.',
    },
    {
      termino: '<em>Await</em>',
      significado:
        'una función <em>async</em> puede contener una expresión <em>await</em>, de hecho es una buena práctica.  Para lo cual pausa la ejecución de la función asíncrona y espera la resolución de la promesa pasada y, a continuación, reanuda la ejecución de la función <em>async</em> y devuelve el valor resuelto.',
    },
    {
      termino: '<em>CDN</em>',
      significado:
        'una red de distribución de contenido. Es un tipo de sistema informático en red, el cual consiste en distribuir o repartir parte de la información en diferentes servidores. De esta forma el usuario recibe el contenido de la página del servidor más cercano.',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        'un middleware en Node.js es un bloque de código completo que se ejecuta entre la petición que hace el usuario (<em>request</em>) hasta que la petición llega al servidor.',
    },
    {
      termino: '<em>Promise</em>',
      significado:
        'el objeto <em>promise</em> (promesa) es usado para computaciones asíncronas. Así que una promesa representa un valor que puede estar disponible ahora o más adelante.',
    },
  ],
  referencias: [
    {
      referencia: 'Vortexbird. (2017). Nodemon.',
      link: 'https://vortexbird.com/nodemon/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
