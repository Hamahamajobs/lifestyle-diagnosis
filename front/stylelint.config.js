module.exports = {
  rules: {
    /**
     * hamada memo
     * stylelintの設定 細かいルールはちゃんと確認していない。この記事にある設定値をそのままコピー
     * @see https://qiita.com/taqumo/items/2ed2cd7e35301d4aed8e
     */
    // scss を使うには以下2つがないと @mixin とかでエラーになってしまう
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 透明度を数値かパーセンテージで指定（'number'|'percentage'）
    'alpha-value-notation': 'number',
    // @ルールの前に1行空けるか（'always'|'never'）
    'at-rule-empty-line-before': 'never',
    // url を引用符で囲むか（'always'|'never'）
    'function-url-quotes': 'never',
    // 詳細度の高いセレクタの後に詳細度の低いセレクタを禁止
    'no-descending-specificity': null,
    // セレクタの重複を禁止
    'no-duplicate-selectors': null,
    // セレクタの前に1行空けるか（'always'|'never'|'always-multi-line'|'never-multi-line'）
    'rule-empty-line-before': 'never-multi-line',
    // セレクタのパターンを指定
    'selector-class-pattern': null
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-recommended-scss']
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue']
    }
  ]
}
