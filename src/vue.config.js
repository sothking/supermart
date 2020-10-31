// module.exports={
//     configurewebpack:{
//         resolve:{
//             alias:{
//                 'assets':'@/assets',
//                 'common':'@/common',
//                 'components':'@/components',
//                 'network':'@/network',
//                 'views':'@/views',
//             }
//         }
//     }
// }
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);


// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//         .set("@", resolve("src"))
//         .set("assets", resolve("@/assets"))
//         .set("components", resolve("@/components"))
//         .set("views", resolve("@/views"))
//         // .set("base", resolve("baseConfig"))
//         // .set("public", resolve("public"));
//   },
// }

module.exports={
    devServer: {
        proxy:{'/index':  'https://m.hatzjh.com/index.php/Ucenter/'}
      }
}
