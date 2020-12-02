module.exports = {
  // vue.config.js 选项
  //
  //// 多页模式 (multi-page)
  pages: {
	  //// 首页
	  index: {
		  // 页面入口文件
		  entry: 'src/main.js',
		  // 模板来源
		  template: 'public/index.html',
		  // 在 dist/index.html 的输出
		  filename: 'index.html',// 当使用 title 选项时，
		  // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
		  title: '^2_3^IndexPage'
	  },
	  //// 后台登录页面
	  adminLogin: {
		  entry: 'src/admin-login.js',
		  template: 'public/admin-login.html',
		  filename: 'admin-login.html',
		  title: '^2_3^AdminLoginPage'
	  }
  }
}