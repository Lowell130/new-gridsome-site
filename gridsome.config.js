// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.GRIDSOME_SITE_NAME,
  siteDescription: process.env.GRIDSOME_SITE_DESCRIPTION,
  titleTemplate: '%s - ' + process.env.GRIDSOME_SITE_NAME,
  siteUrl: process.env.GRIDSOME_SITE_URL,

 
 
 

  plugins: [
   
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/about'],
        config: {
          '/product/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Product',
            indexName: 'Product',
            fields: ['id', 'title', 'discount', 'path', 'price', 'salesRank', ' uRL', 'brand', 'listPrice', 'description']
            
            }
        ],
        searchFields: ['title','id']
      }
    },

    {
      use: 'gridsome-plugin-pwa',
      options: {
          // Service Worker Options
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
          disableTemplatedUrls: false,       // Optional

          // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
          manifestPath: 'manifest.json',
          title: process.env.GRIDSOME_SITE_NAME,
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          themeColor: '#212529',
          backgroundColor: '#ffffff',
          icon: 'static/favicon.svg',
         shortName: process.env.GRIDSOME_SITE_NAME,              // Optional
      //     description: 'Gridsome is awesome!',// Optional
      //     categories: ['education'],          // Optional
          lang: 'de-DE',                      // Optional
      //     dir: 'auto',                        // Optional
      //     maskableIcon: true,                 // Optional
      //     screenshots: [                      // Optional
      //         {
      //             src: 'src/screenshot1.png',
      //             sizes: '1280x720',
      //             type: 'image/png',
      //         },
      //     ],
      //     gcmSenderId: undefined,             // Optional

      //     // Standard Meta Tags
      //     svgFavicon: 'favicon.svg',          // Optional. Requires favicon.ico fallback

      //     // Microsoft Windows Meta Tags
      //     msTileColor: '#666600',             // Optional

      //     // Apple MacOS Meta Tags
      //     appleMaskIcon: 'favicon.svg',       // Optional
      //     appleMaskIconColor: '#666600',      // Optional
       }
  },
 
  ],
  templates: {
    Product: [
      {
        path: '/product/:title/:aSIN',
        component: './src/templates/Product.vue'
      }
    
    ]
  
  }
}
