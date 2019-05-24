module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ] // `style: true` 会加载 less 文件，`style: css` 会加载 css 文件
  ]
}
