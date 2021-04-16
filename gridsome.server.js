// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { camelizeKeys } = require('humps')
// const products = require('./src/data/scheda-vide-full.json')
const products = require('./src/data/data.json')
// const products = require('./src/data/data.json')
 

module.exports = function (api) {
  api.loadSource(actions => {
    // Use Data Store API here   
    const productsCollection = actions.addCollection('Product')

    for (const product of camelizeKeys(products)) {
      const { uRL } = product.images      
      product.images.uRL = Array.isArray(uRL) ? uRL : [uRL]
      product.price = product.price == 0 ? '0,0' : product.price
      product.listPrice = product.listPrice == 0 ? '0,0' : product.listPrice     
      productsCollection.addNode(product)
    }
    
  })
}
