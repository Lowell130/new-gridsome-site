import plugin_gridsome_plugin_flexsearch_6 from "C:\\Users\\39328\\Desktop\\UK\\discorigido.online\\node_modules\\gridsome-plugin-flexsearch\\gridsome.client.js"
import plugin_gridsome_plugin_pwa_7 from "C:\\Users\\39328\\Desktop\\UK\\discorigido.online\\node_modules\\gridsome-plugin-pwa\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_6,
    options: {"pathPrefix":"","siteUrl":"http://discorigido.online","collections":[{"typeName":"Product","indexName":"Product","fields":["id","title","discount","path","price","salesRank"," uRL","brand","listPrice","description"]}],"searchFields":["title","id"],"chunk":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_pwa_7,
    options: {"title":"discorigido.online","serviceWorkerPath":"\\service-worker.js","manifestPath":"\\manifest.json","statusBarStyle":"default","themeColor":"#212529","icon":"static/favicon.svg","msTileColor":"#666600"}
  }
]
