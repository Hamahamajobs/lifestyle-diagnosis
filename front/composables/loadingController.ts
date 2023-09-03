import type { Ref } from 'vue'
export const start = (isLoading: Ref<boolean>) => () => {
  // APIとの通信開始
  isLoading.value = true
}
export const close = (isLoading: Ref<boolean>) => () => {
  // APIとの通信完了
  isLoading.value = false
}

export const loadingController = () => {
  const isLoading = useState('isLoading', () => (false))
  return {
    isLoading: readonly(isLoading),
    start: start(isLoading),
    close: close(isLoading)
  }
}
