export default {
  global: {
    componenteFormativo: 'Diagnóstico de circuitos electrónicos digitales',
    descripcionCurso:
      'En este componente formativo se tratan temas relacionados con la prueba de sistemas electrónicos digitales, verificación de diagramas, cálculos necesarios y la comprobación en programas de simulación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición de variables eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Equipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimientos de identificación de fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos y métodos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Equipos y <em>software</em> de diagnóstico',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Formatos de evaluación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Informe técnico',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      texto: 'Equipos y <em>software</em> de diagnóstico',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3ISKULwwU2M',
    },
    {
      texto: 'Gestión de documentos',
      tipo: 'Página web de consulta',
      link: 'https://alldatasheet.com',
    },
    {
      texto: 'Medición de variables eléctricas',
      tipo: 'Libro',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=7120.&pg=&ed=',
    },
    {
      texto: 'Procedimientos de identificación de fallas',
      tipo: 'Libro',
      link:
        'https://books.google.fr/books?id=bmLuH0CsIh0C&printsec=copyright&hl=es#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Analizador lógico',
      significado:
        'Equipo de medición que muestra datos de un circuito digital de modo similar a un osciloscopio, pero es capaz de visualizar las señales de múltiples canales.',
    },
    {
      termino: 'CAD/CAM',
      significado:
        'Siglas para Computer-Aided Design (CAD), diseño asistido por computadora /Computer-Aided Manufacturing (CAM), fabricación asistida por computadora.',
    },
    {
      termino: 'GERBER',
      significado:
        'Formato de archivos electrónicos que identifican normalizados para la producción de productos electrónicos. Estos archivos tienen las descripciones de las conexiones eléctricas, pistas, perforaciones y pastillas de una PCB junto con todas las instrucciones para su producción, así como también las serigrafías para las impresiones.',
    },
    {
      termino: 'GND',
      significado:
        'Contracción de la palabra inglesa <em>GROUND</em> (tierra) utilizada para referenciar un nodo en un circuito eléctrico, generalmente suele ser el negativo de la fuente de poder.',
    },
    {
      termino: 'RS-274X',
      significado:
        'Es el formato especial de archivos GERBER, adoptado por la EIA en 1991, como estándar internacional para el suministro de la información para la fabricación de circuitos impresos.',
    },
    {
      termino: 'Sistema combinacional',
      significado:
        'DefiSistema lógico en el que las salidas dependen exclusivamente del valor de las entradas.nición',
    },
    {
      termino: 'Sistemas secuenciales',
      significado:
        'Circuito digital donde el valor de salida depende no solo del valor de entrada actual sino también del anterior, es decir, que un sistema secuencial debe ser capaz de memorizar valores de entrada y determinar la salida en función de la misma.',
    },
    {
      termino: 'Vcc',
      significado:
        'Contracción de la frase voltaje de corriente continua utilizada para referenciar el nodo del circuito eléctrico, correspondiente al positivo de la fuente de poder.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cdn.rohde-schwarz.com. (s.f.) Videologic analyzer. [imagen].',
      link:
        'https://cdn.rohde-schwarz.com/pws/videopreview/products_2/rtb_screens/RTB_Video_logic_analyzer_w1440_hX.jpg',
    },
    {
      referencia: 'Cedesa. (s.f.). System 8. [imagen].',
      link: 'https://www.cedesa.com.mx/imagenes/contenidos/SYSTEM-8.jpg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rosa Milena Gómez Caballero',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      // {
      //   nombre: 'Álvaro Andrés Angarita Ramirez',
      //   cargo: 'Validación y vinculación en plataforma LMS',
      //   centro: 'Centro de Comercio y Servicios - Regional Tolima',
      // },
      // {
      //   nombre: 'Daniel Felipe Varón Molina',
      //   cargo: 'Validación y vinculación en plataforma LMS',
      //   centro: 'Centro de Comercio y Servicios - Regional Tolima',
      // },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
