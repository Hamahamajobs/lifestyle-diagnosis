import { defineNuxtPlugin } from '#app'
// const { start, close } = loadingController()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    // hamada memo
    // 各pageが描画され始める
    // console.log('page:start')
    // start()
  })
  nuxtApp.hook('page:finish', () => {
    // hamada memo
    // 各pageが描画されたあとの処理
    // console.log('page:finish')
    // close()
  })
})
