// QFeaturedProd.vue
<template>
 <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <slot v-bind:posts="posts"></slot>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$static.posts && this.$static.posts.edges.map(e => e.node);
    }
  }
};
</script>
<static-query>
query FeaturedPosts {
  posts: allProduct (limit: 6, sortBy: "salesRank", order: ASC) {
   edges {
      node {
        id
        title
        price
        brand
        description
        listPrice
        salesRank
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