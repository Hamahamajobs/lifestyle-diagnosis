import svgLoader from 'vite-svg-loader'
const PRODUCTION_BASE_PATH = '/torisetsu/'

export default defineNuxtConfig({
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    plugins: [svgLoader()]
  },
  runtimeConfig: {
    public: {
      domain: 'test' // envにより環境で切り替える
    }
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '@mdi/font/css/materialdesignicons.min.css', '@/assets/css/common.css'],
  build: {
    transpile: ['vuetify']
  },
  app: {
    head: {
      title: 'test',
      meta: [{ name: 'description', content: 'test' }],
      base: {
        href: 'router.base' // サブディレクトリーへのデプロイに伴い必要
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans&family=La+Belle+Aurore&family=Lora&family=Shippori+Mincho+B1:wght@500&family=Tsukimi+Rounded&family=Zen+Kaku+Gothic+New&display=swap',
          crossorigin: ''
        }
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? PRODUCTION_BASE_PATH : '/' // jsを読み込むパスがローカルと本番で異なるため設定
  },
  ssr: false // SPA対応
})
