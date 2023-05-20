
export const useChoices = () => {
  const choices = [
    {
      value: 5,
      text: 'いつもあてはまる'
    },
    {
      value: 4,
      text: 'しばしばあてはまる'
    },
    {
      value: 3,
      text: 'ときどきあてはまる'
    },
    {
      value: 2,
      text: 'たまにあてはまる'
    },
    {
      value: 1,
      text: '全く当てはまらない'
    }
  ]
  return {
    choices
  }
}
