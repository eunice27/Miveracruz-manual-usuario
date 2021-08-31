module.exports = {
    title: 'Mi Veracruz',
    description: 'Manual ciudadano',
    head: [
        ['link', { rel: 'icon', href: 'img/veracruz-logo-152.png' }]
      ],
    themeConfig: {
        logo: '/img/logo_color.png',
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Manual', link: '/content/' },
         
        ],
        displayAllHeaders: true,
        sidebar:{
            '/content/' :[
                'crear-usuario',
                'modificar-mis-datos',
                'iniciar-sesion',
                'iniciar-tramite',
                'accesibilidad',
                'evaluar-la-plataforma',
            ]
        }
      }
  }