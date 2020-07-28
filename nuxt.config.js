export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/style.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: '/css/responsive/responsive.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: 'css/style.css',
        type: 'text/css'
      }
    ],
    script: [
      { src: '/js/jquery/jquery-2.2.4.min.js', body: true },
      { src: '/js/bootstrap/popper.min.js', body: true },
      { src: '/js/bootstrap/bootstrap.min.js', body: true },
      { src: '/js/others/plugins.js', body: true },
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        body: true
      },
      // {
      //   src:
      //     'https://maps.googleapis.com/maps/api/js?key=AIzaSyDk9KNSL1jTv4MY9Pza6w8DJkpI_nHyCnk',
      //   body: true
      // },
      { src: '/js/google-map/explore-map-active.js', body: true },
      { src: '/js/active.js', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/carousel.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
