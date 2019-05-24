module.exports = {
    css: {
      loaderOptions: {
        less: {
          // 这里的选项会传递给 less-loader
          javascriptEnabled: true
        }
      }
    },
    devServer: {
        // 開啟瀏覽器
        open: true,
        // 端口
        port: 8888,
        // 让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: true,
            errors: true
        }
    }
}