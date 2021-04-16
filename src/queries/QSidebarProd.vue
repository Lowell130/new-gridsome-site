// QSidebarProd.vue
<template>
 <div>
   
    <slot v-bind:sidebar="sidebar"></slot>

   </div>
</template>
<script>
// export default {
//   computed: {
//     sidebar() {
//       return this.$static.sidebar && this.$static.sidebar.edges.map(e => e.node);
//       },
//   }

// };

export default {
  data: () => ({ sidebar: [] }),
  mounted () {
     this.sidebar = this.$static.sidebar && this.$static.sidebar.edges.map(e => e.node).sort( () => .5 - Math.random() ).slice (0,8);
  },
};


</script>

<static-query>
query FeaturedSidebar {
  sidebar: allProduct (limit: 3000) {
   edges {
      node {
        id
        title
        salesRank
        brand
        price
        description
        listPrice
        affiliateLink
        path
        uRL
        images {
          uRL
        }
      }
    }
  }
}
</static-query>