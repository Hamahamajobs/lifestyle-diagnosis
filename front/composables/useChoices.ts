
export const useChoices = () => {
  const choices = [
    {
      value: 5,
      text: `いつも
      あてはまる`
    },
    {
      value: 4,
      text: `しばしば
      あてはまる`
    },
    {
      value: 3,
      text: `ときどき
      あてはまる`
    },
    {
      value: 2,
      text: `たまに
      あてはまる`
    },
    {
      value: 1,
      text: `全く
      あてはまらない`
    }
  ]
  return {
    choices
  }
}
