<template>
  <Layout>
    <!-- <div class="container-fluid pt-3">
      <div class="container px-0 py-3 breadcrump">
        <a href="/">Home</a> ~ <g-link to="/product-list/">{{ brcProd }}</g-link> ~
        {{ $page.product.title }}
      </div>
    </div> -->

    <main>
      <div class="container-fluid my-4 p-3">
        <div class="col-12">
          <div
            class="container-fluid box p-4 p-sm-5"
            style="position: relative"
          >
            <div class="top-right shadow">
              <span v-if="$page.product.price !== '0,0'">
                {{ $page.product.price }}{{ value }}
              </span>
              <span class="text-uppercase" v-else><i class="fas fa-info-circle"></i></span>
            
            </div>
            <div class="row">
              <div class="col-lg-4 d-flex justify-content-center align-items-center">
                <div>
                  <a target="_blank" :href="$page.product.affiliateLink">
                    <img
                      class="img-fluid box-img"
                      data-fancybox="gallery"
                      :src="getSrc($page.product.images)"
                      :alt="$page.product.title"
                    />
                  </a>


            
<!-- GALLERY
                  <div class="d-block text-center my-4 thumb-sec">
                    <a
                      target="_blank"
                      :href="$page.product.uRL + affiliate"
                      v-for="img in $page.product.images.uRL.slice(0, 4)"
                      :key="img.id"
                      class="item-thumb"
                      alt=""
                    >
                      <img class="inner-gallery" :src="img" />
                    </a>
                  </div>
                  END GALLERY
                   -->
                </div>
              </div>
              <div class="col-lg-8">
                <h2 class="text-break my-4 my-lg-1">
                  {{ $page.product.title }}
                </h2>

                <div class="container-fluid px-0">
                  <div class="d-grid gap-2 my-4">
                    <a
                      class="btn btn-warning bold-btn"
                      target="_blank"
                      :href="$page.product.affiliateLink"
                      >{{ buttonOffer }}</a
                    >
                  </div>

                  <div class="disclaimer">
                    <!-- <div class="d-grid gap-2">
                    <a href="#" class="btn btn-warning">VEDI OFFERTA</a>
                  </div>        -->
                    <p class="small my-4">
                {{ disclaimer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-5">price zone</div>
        <div class="col-3">price zone</div> -->
      </div>
<div class="text-center mb-5 bg-white" style="width:100%;">
  <div class="container-fluid">
    <Imgslider />
  </div>
    
</div>
      
      
      
      
      
      <div class="container-fluid">
                <h3 class="pb-3 text-break">{{ onSale }}: {{ $page.product.title }}</h3>

        <p class="mt-2" v-if="$page.product.description != 0">
          <strong>{{ desc}}:</strong>
          {{
            ($page.product.description.substring(0, 500) + " ... ")
              | strippedContent
          }}<a
            class="badge bg-secondary text-white"
            :href="$page.product.affiliateLink"
            >{{ readMore }}</a
          >
        </p>

        <p class="mt-2 font-italic" v-else>{{ noDesc }}</p>
      </div>

      <!-- <div class="container related mt-5 pb-0 mb-0">
      <h3>Potrebbero interessarti</h3>
    </div> -->

      <!-- start card -->
      <div
        class="container-fluid bg-trasparent my-4 p-3"
        style="position: relative"
      >
        <h3 class="my-4">{{ related }}</h3>
        <QFeaturedSidebar v-slot="{ sidebar: sidebar_prod }">
          <div
            class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"
          >
            <div class="col" v-for="sidebar in sidebar_prod" :key="sidebar.id">
              <div class="card h-100 shadow-sm">
                <g-link :to="sidebar.path">
                  <g-image
                    :src="getSrc(sidebar.images)"
                    class="card-img-top"
                    :alt="sidebar.title"
                  />
                </g-link>

                <div class="label-top shadow-sm">
                  <a class="text-white" :href="sidebar.affiliateLink">{{
                    sidebar.brand
                  }}</a>
                </div>
                <div class="card-body">
                  <div class="clearfix mb-3">
                    <span
                      class="float-start badge rounded-pill bg-success"
                      v-if="sidebar.price != '0,0'"
                      >{{ sidebar.price }}{{ value }}</span
                    >
                    <span
                      class="float-start badge rounded-pill bg-danger"
                      v-else
                      ><a
                        class="text-white small text-uppercase"
                        :href="sidebar.affiliateLink"
                        >{{ moreInfo }}</a
                      ></span
                    >
                    <span class="float-end"
                      ><a
                        :href="sidebar.affiliateLink"
                        class="small text-muted text-uppercase aff-link"
                        >{{ reviews }}</a
                      ></span
                    >
                  </div>
                  <h5 class="card-title">
                    <g-link target="_blank" :to="sidebar.path">{{
                      sidebar.title
                    }}</g-link>
                  </h5>

                  <div class="d-grid gap-2 my-4">
                    <!-- <div class="text-center "> -->
                    <a :href="sidebar.affiliateLink" class="btn btn-warning bold-btn"
                      >{{ buttonOffer }}</a
                    >
                    <!-- </div> -->
                  </div>
                  <div class="clearfix mb-1">
                    <!-- <span class="float start amz-hp">by Amazon.it</span> -->
                   <span class="float-start"><a :href="sidebar.affiliateLink"><i class="fas fa-question-circle"></i></a></span>
                 <span class="float-end"><a :href="sidebar.affiliateLink"><i class="fas fa-chevron-circle-right"></i></a></span>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </QFeaturedSidebar>
      </div>
    </main>


  
  </Layout>
</template>

<style scoped>
@media (max-width: 768px) {
  .img-thumbnail {
    max-height: 400px;
  }
}

</style>



<page-query>
query Product ($id: ID!) {
  product (id: $id) {
    id
    title
   
    salesRank
    brand
    price
	path
	listPrice
  affiliateLink
	description 
  discount
   
    images {
      uRL
    }
    uRL
  }
}
</page-query>



<script>
import Imgslider from '../components/Slider';
export default {




  data() {
    return {
     
     


disclaimer:process.env.GRIDSOME_PRODUCT_DISCLAIMER,
value:process.env.GRIDSOME_PRODUCT_VALUE,
buttonOffer:process.env.GRIDSOME_PRODUCT_OFFER_BUTTON,
moreInfo:process.env.GRIDSOME_PRODUCT_MORE_INFO,
reviews:process.env.GRIDSOME_PRODUCT_REVIEWS,
related:process.env.GRIDSOME_PRODUCT_RELATED,
noDesc:process.env.GRIDSOME_PRODUCT_NODESC,
readMore:process.env.GRIDSOME_PRODUCT_READ_MORE,
desc:process.env.GRIDSOME_PRODUCT_DESCRIPTION,
brcProd: process.env.GRIDSOME_BREADCRUMP_PRODUCT,
onSale: process.env.GRIDSOME_PRODUCT_ON_SALE,   
associate: process.env.GRIDSOME_AMAZON_ID,   
    };
  },

  metaInfo() {
    return {
      title: process.env.GRIDSOME_SITE_PRODUCT_TEXT+ ' - ' + this.$page.product.title.substring(0, 70) + "...",
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.product.title,
        },
        //  { property: "og:type", content: 'product'},
        { property: "og:title", content: this.$page.product.title },
        { property: "og:description", content: this.ogDesc },
        {
          property: "og:url",
          content: process.env.GRIDSOME_SITE_URL + this.postUrl,
        },
        { property: "og:image", content: this.ogImageUrl },
        // { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.product.title },
        { name: "twitter:description", content: this.ogDesc },
        // { name: "twitter:site", content: "@cossssmin" },
        // { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  components: {
    QFeaturedSidebar: () => import("../queries/QSidebarProd.vue"),
   Imgslider
  },

  methods: {
    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    },
  },

  filters: {
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    },
  },
  computed: {
    affiliate: function () {
     return "&tag="+process.env.GRIDSOME_AMAZON_ID;
    },

    ogImageUrl() {
      return (
        this.$page.product.images.uRL[0] || this.$page.product.images.uRL[1]
      );
    },
    ogDesc() {
      return this.$page.product.title.substring(0, 250);
    },
    postUrl() {
      return this.$page.product.path;
    },
  },
};
</script>
