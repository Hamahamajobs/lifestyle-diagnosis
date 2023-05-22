import type { Ref } from 'vue'

export const useCounter = () => {
  // stateの定義
  const counter: Ref<number> = useState('counter', () => 0)

  const answers = reactive<{ displayLists: any[] }>({ displayLists: [] })

  // stateの更新処理
  // const updateCounter = (counter: Ref<number>) => (value: number) => {
  //   counter.value = value
  // }
  // stateの更新処理
  const addCounter = (counter: Ref<number>) => (value: number) => {
    counter.value = counter.value + value
  }

  return {
    counter: readonly(counter), // stateはreadonlyとし、update関数を通してのみ更新できる
    answers,
    // updateCounter: updateCounter(counter),
    addCounter: addCounter(counter)
  }
}
