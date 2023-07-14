export const getMorisTypes = () => {
  interface MessageContent {
    title: string;
    text: string;
  }
  interface Message {
    category: string;
    messageContent: MessageContent[];
  }
  interface morisType {
    id: number,
    en: string,
    jp: string,
    title: string,
    titleDetail: string,
    svgWidthPx: string,
    messageList: Message[]
  }

  const morisTypes: morisType[] = [
    {
      id: 1,
      en: 'altruist',
      jp: '奉仕型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '570px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '奉仕型のfeatureタイトル',
              text: '奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ奉仕型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '奉仕型のloveタイトル',
              text: '奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ'
            },
            {
              title: '奉仕型のloveタイトル2',
              text: '22222奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ奉仕型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '奉仕型のtwo-facedタイトル',
              text: '奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ奉仕型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '奉仕型のregretタイトル',
              text: '奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ奉仕型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '奉仕型のvalueタイトル',
              text: '奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ奉仕型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      en: 'hedonistic',
      jp: '安楽型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '570px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '安楽型のfeatureタイトル',
              text: '安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ安楽型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '安楽型のloveタイトル',
              text: '安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ'
            },
            {
              title: '安楽型のloveタイトル2',
              text: '22222安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ安楽型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '安楽型のtwo-facedタイトル',
              text: '安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ安楽型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '安楽型のregretタイトル',
              text: '安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ安楽型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '安楽型のvalueタイトル',
              text: '安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ安楽型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      en: 'love',
      jp: '慈愛型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '570px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '慈愛型のfeatureタイトル',
              text: '慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ慈愛型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '慈愛型のloveタイトル',
              text: '慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ'
            },
            {
              title: '慈愛型のloveタイトル2',
              text: '22222慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ慈愛型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '慈愛型のtwo-facedタイトル',
              text: '慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ慈愛型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '慈愛型のregretタイトル',
              text: '慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      en: 'moderation',
      jp: '中庸型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '570px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '中庸型のfeatureタイトル',
              text: '中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ中庸型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '中庸型のloveタイトル',
              text: '中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ'
            },
            {
              title: '中庸型のloveタイトル2',
              text: '22222中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ中庸型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '中庸型のtwo-facedタイトル',
              text: '中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ中庸型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '中庸型のregretタイトル',
              text: '中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ中庸型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      en: 'accepting',
      jp: '受容型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '570px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '受容型のfeatureタイトル',
              text: '受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ受容型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '受容型のloveタイトル',
              text: '受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ'
            },
            {
              title: '受容型のloveタイトル2',
              text: '22222受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ受容型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '受容型のtwo-facedタイトル',
              text: '受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ受容型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '受容型のregretタイトル',
              text: '受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ受容型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 6,
      en: 'variety',
      jp: '多彩型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '620px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '多彩型のfeatureタイトル',
              text: '多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ多彩型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '多彩型のloveタイトル',
              text: '多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ'
            },
            {
              title: '多彩型のloveタイトル2',
              text: '22222多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ多彩型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '多彩型のtwo-facedタイトル',
              text: '多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ多彩型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '多彩型のregretタイトル',
              text: '多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ多彩型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 7,
      en: 'hedonism',
      jp: '享楽型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '620px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '享楽型のfeatureタイトル',
              text: '享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ享楽型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '享楽型のloveタイトル',
              text: '享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ'
            },
            {
              title: '享楽型のloveタイトル2',
              text: '22222享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ享楽型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '享楽型のtwo-facedタイトル',
              text: '享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ享楽型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '享楽型のregretタイトル',
              text: '享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ享楽型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 8,
      en: 'cooperation',
      jp: '協同型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '620px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '協同型のfeatureタイトル',
              text: '協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ協同型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '協同型のloveタイトル',
              text: '協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ'
            },
            {
              title: '協同型のloveタイトル2',
              text: '22222協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ協同型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '協同型のtwo-facedタイトル',
              text: '協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ協同型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '協同型のregretタイトル',
              text: '協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ協同型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 9,
      en: 'acceptance-of-life',
      jp: '達観型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '530px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '達観型のfeatureタイトル',
              text: '達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ達観型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '達観型のloveタイトル',
              text: '達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ'
            },
            {
              title: '達観型のloveタイトル2',
              text: '22222達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ達観型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '達観型のtwo-facedタイトル',
              text: '達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ達観型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '達観型のregretタイトル',
              text: '達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ達観型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '達観型のvalueタイトル',
              text: '達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ達観型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 10,
      en: 'self-disciplined',
      jp: '克己型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '440px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '克己型のfeatureタイトル',
              text: '克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ克己型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '克己型のloveタイトル',
              text: '克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ'
            },
            {
              title: '克己型のloveタイトル2',
              text: '22222克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ克己型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '克己型のtwo-facedタイトル',
              text: '克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ克己型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '克己型のregretタイトル',
              text: '克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ克己型のregretコンテンツ慈愛型のregretコンテンツ慈愛型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '慈愛型のvalueタイトル',
              text: '慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 11,
      en: 'activist',
      jp: '活動型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '440px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '活動型のfeatureタイトル',
              text: '活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ活動型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '活動型のloveタイトル',
              text: '活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ'
            },
            {
              title: '活動型のloveタイトル2',
              text: '22222活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ活動型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '活動型のtwo-facedタイトル',
              text: '活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ活動型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '活動型のregretタイトル',
              text: '活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ活動型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '活動型のvalueタイトル',
              text: '活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ活動型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 12,
      en: 'meditative',
      jp: '内面型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '440px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '瞑想・内面型のfeatureタイトル',
              text: '瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ瞑想・内面型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '瞑想・内面型のloveタイトル',
              text: '瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ'
            },
            {
              title: '瞑想・内面型のloveタイトル2',
              text: '22222瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ瞑想・内面型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '瞑想・内面型のtwo-facedタイトル',
              text: '瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ瞑想・内面型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '瞑想・内面型のregretタイトル',
              text: '瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ瞑想・内面型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '瞑想・内面型のvalueタイトル',
              text: '瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ瞑想・内面型のvalueコンテンツ慈愛型のvalueコンテンツ'
            }
          ]
        }
      ]
    },
    {
      id: 13,
      en: 'achievement',
      jp: '努力型',
      title: '精神的に安定しており、頼られることが好き',
      titleDetail: '精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。',
      svgWidthPx: '440px',
      messageList: [
        {
          category: 'feature',
          messageContent: [
            {
              title: '行動・努力型のfeatureタイトル',
              text: '行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ行動・努力型のfeatureコンテンツ'
            }
          ]
        },
        {
          category: 'love',
          messageContent: [
            {
              title: '行動・努力型のloveタイトル',
              text: '行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ'
            },
            {
              title: '行動・努力型のloveタイトル2',
              text: '22222行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ行動・努力型のloveコンテンツ'
            }
          ]
        },
        {
          category: 'two-faced',
          messageContent: [
            {
              title: '行動・努力型のtwo-facedタイトル',
              text: '行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ行動・努力型のtwo-facedコンテンツ'
            }
          ]
        },
        {
          category: 'regret',
          messageContent: [
            {
              title: '行動・努力型のregretタイトル',
              text: '行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ行動・努力型のregretコンテンツ'
            }
          ]
        },
        {
          category: 'value',
          messageContent: [
            {
              title: '行動・努力型のvalueタイトル',
              text: '行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ行動・努力型のvalueコンテンツ'
            }
          ]
        }
      ]
    }
  ]

  return {
    morisTypes
  }
}
