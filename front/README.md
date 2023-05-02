# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# Nuxt3メモ
- pagesディレクトリは自分で作成した。自動ルーティング。内部的にはVue Routerが使用されている
- layoutsディレクトリは自分で作成した。これはヘッダーやフッターなど共通で使用したい部品を入れる
- componentsディレクトリは自分で作成した。Nuxt3ではcomponentsディレクトリに保存したコンポーネントファイルは自動でimportされるためimport処理を行う必要がない
- NuxtLinkタグで画面遷移できる。props(:to)で遷移先を内部/外部で指定できる
- assetsディレクトリは自分で作成した。cssや画像を保存する
- Nuxt3ではデータを取得するための関数が事前に準備されている。useFetch, useLazyFetch, useAsyncData, useLazyAsyncDataの4つ
- scriptタグにsetupを入れるだけで最強になる [こちら](https://ja.vuejs.org/api/sfc-script-setup.html)

# 参考サイト
- [公式](https://nuxt.com/)
- [公式のコードサンプル](https://ja.vuejs.org/examples/#hello-world)
- [Nuxtで使用できるモジュール](https://nuxt.com/modules)
- [Nuxt公式のTSでのVueの書き方](https://ja.vuejs.org/guide/typescript/composition-api.html#typing-component-emits)
- 【ブログ】[Nuxt3入門](https://reffect.co.jp/vue/nuxt3)
- 【ブログ】[Nuxt3 setup](https://zenn.dev/coedo/articles/86bc31acb4ea47)

# TSメモ
- [オブジェクトの作り方/宣言](https://zenn.dev/harryduck/articles/98b7bfee95ad7e)
