export const getMorisTypes = () => {
  interface morisType {
    id: number,
    en: string,
    jp: string,
  }

  const morisTypes: morisType[] = [
    {
      id: 1,
      en: 'altruist',
      jp: '奉仕型'
    },
    {
      id: 2,
      en: 'hedonistic',
      jp: '安楽型'
    },
    {
      id: 3,
      en: 'love',
      jp: '慈愛型'
    },
    {
      id: 4,
      en: 'moderation',
      jp: '中庸型'
    },
    {
      id: 5,
      en: 'accepting',
      jp: '受容型'
    },
    {
      id: 6,
      en: 'variety',
      jp: '多彩型'
    },
    {
      id: 7,
      en: 'hedonism',
      jp: '享楽型'
    },
    {
      id: 8,
      en: 'cooperation',
      jp: '協同型'
    },
    {
      id: 9,
      en: 'acceptance-of-life',
      jp: '達観型'
    },
    {
      id: 10,
      en: 'self-disciplined',
      jp: '克己型'
    },
    {
      id: 11,
      en: 'activist',
      jp: '活動型'
    },
    {
      id: 12,
      en: 'meditative',
      jp: '瞑想・内面型'
    },
    {
      id: 13,
      en: 'achievement',
      jp: '行動・努力型'
    }
  ]

  return {
    morisTypes
  }
}
