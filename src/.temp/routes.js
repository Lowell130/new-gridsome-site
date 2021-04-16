const c1 = () => import(/* webpackChunkName: "page--src-templates-product-vue" */ "C:\\Users\\39328\\Desktop\\UK\\discorigido.online\\src\\templates\\Product.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\39328\\Desktop\\UK\\discorigido.online\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\39328\\Desktop\\UK\\discorigido.online\\src\\pages\\Index.vue")

export default [
  {
    path: "/product/:title/:aSIN/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
