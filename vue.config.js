// vue.config.js
// const path = require('path')
// const { VueLoaderPlugin } = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// // const CleanWebpackPlugin = require('clean-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/navigation-app/' : '/';
//   pluginOptions: {
//     foo: {
//       // plugins can access these options as
//       // `options.pluginOptions.foo`.
//     }
//   }
// }

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}