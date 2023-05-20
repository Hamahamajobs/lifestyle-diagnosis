const PRODUCTION_BASE_PATH = '/torisetsu/'

export default defineNuxtConfig({
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  runtimeConfig: {
    public: {
      domain: 'test' // envにより環境で切り替える
    }
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify']
  },
  app: {
    head: {
      title: 'test',
      meta: [{ name: 'description', content: 'test' }],
      base: {
        href: 'router.base' // サブディレクトリーへのデプロイに伴い必要
      }
    },
    baseURL: process.env.NODE_ENV === 'production' ? PRODUCTION_BASE_PATH : '/' // jsを読み込むパスがローカルと本番で異なるため設定
  },
  ssr: false // SPA対応
})
