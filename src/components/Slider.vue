<template>
  <ClientOnly>

    <carousel :perPageCustom="[[280, 1], [320, 1], [360, 1],[480, 2], [768, 3]]" :autoplay="true" :paginationEnabled="false" :centerMode="true" :loop="true" :autoplayHoverPause="true" :autoplayTimeout="4000">
  
      <slide v-for="img in $page.product.images.uRL" :key="img.id" alt="">
                  <!-- <img     v-if="$page.product.images.uRL === 1" class="slider-gallery" :src="img" /> -->

               <a :href="$page.product.affiliateLink">
                  <img v-if="$page.product.images.uRL.length > 2"  class="slider-gallery" :src="img" /></a>
               
      </slide>
  
    </carousel>
     
    
  </ClientOnly>
</template>


<script>
export default {
  name: "Imgslider",
  // affiliate
  associate: process.env.GRIDSOME_AMAZON_ID,
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  computed: {
    affiliate: function () {
      return "&tag=" + process.env.GRIDSOME_AMAZON_ID;
    },
  },
//    methods: {
//     getSrc(images) {
//       const { uRL } = images;
//       return images.uRL[1] || images.uRL[0];
//     },
//   },
};
</script>