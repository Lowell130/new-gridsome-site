<template>
  <Layout>
    <main>
      <div class="container-fluid pt-4" style="color: #ddd">
        <div class="text-center">
          <i style="font-size: 4rem" class="fas fa-search mb-1"></i>
          <p style="font-size: 2rem; font-weight: 700">{{ searchText }}</p>
        </div>
        <search-input />
      </div>

      <div
        v-b-modal.modal-1
        v-if="bookItem.length !== 0"
        class="bookmark fade-in"
      >
        {{ bookItem.length }}
      </div>

      <div
        class="container-fluid bg-trasparent my-4 p-3"
        style="position: relative"
      >
        <div
          class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"
        >
          <div
            class="col hp"
            v-for="{ node: product } in $page.allProduct.edges"
            :key="product.id"
          >
            <div class="card h-100 shadow-sm">
              <g-link :to="product.path">
                <g-image
                  :src="getSrc(product.images)"
                  class="card-img-top"
                  :alt="product.title"
                />
              </g-link>
              <!-- <div class="label-top shadow-sm">Asus Rog</div>  -->
              <div class="label-top shadow-sm" v-if="product.brand != ''">
                <a class="text-white" :href="product.affiliateLink">{{
                  product.brand
                }}</a>
              </div>
              <div class="card-body">
                <div class="clearfix mb-3">
                  <span
                    class="float-start badge rounded-pill bg-success"
                    v-if="product.price != '0,0'"
                    >{{ product.price }}{{ indexValue }}</span
                  >
                  <span class="float-start badge rounded-pill bg-danger" v-else
                    ><a
                      class="text-white small text-uppercase"
                      :href="product.affiliateLink"
                      >{{ indexInfo }}</a
                    ></span
                  >
                  <span class="float-end"
                    ><a
                      :href="product.affiliateLink"
                      class="small text-muted text-uppercase aff-link"
                      >{{ indexReviews }}</a
                    ></span
                  >
                </div>
                <h5 class="card-title">
                  <g-link target="_blank" :to="product.path">{{
                    product.title
                  }}</g-link>
                </h5>

                <div class="d-grid gap-2 my-4">
                  <!-- <div class="text-center "> -->
                  <a
                    :href="product.affiliateLink"
                    class="btn btn-warning bold-btn"
                    >{{ indexOffer }}</a
                  >
                  <!-- </div> -->
                </div>
                <div class="clearfix mb-1">
                  <!-- <span class="float start amz-hp">by Amazon.it</span> -->
                  <span class="float-start"
                    ><a :href="product.affiliateLink"
                      ><i class="fas fa-question-circle"></i></a
                  ></span>
                  <!-- <span class="float-end"><a :href="product.affiliateLink"><i class="fas fa-plus"></i></a></span> -->
                  <span @click="addToCart(product)" class="float-end">
                    <i
                      v-if="bookItem.indexOf(product) === -1"
                      class="far fa-heart"
                      style="cursor: pointer"
                    ></i>

                    <i
                      v-if="bookItem.indexOf(product) !== -1"
                      class="fas fa-heart"
                      style="cursor: pointer"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- INIZIO MODALE -->
          <div>
            <b-modal
              id="modal-1"
              size="lg"
              hide-footer
              content-class="shadow"
              title="Preferiti"
            >
              <template #modal-header="{ close }">
                <!-- Emulate built in modal header close button action -->
                <b-button size="sm" variant="outline-danger" @click="close()">
                  <i class="fas fa-times"></i>
                </b-button>
                <span
                  >{{ modalPre }} {{ bookItem.length }} {{ modalAfter }}</span
                >
              </template>

              <div
                class="container rounded shadow-sm p-4 mb-2"
                v-for="(product, index) in bookItem"
                :key="index"
              >
                <div class="row p-md-2 mb-2">
                  <div class="col-md-2 text-center">
                    <g-link :to="product.path" target="_blank">
                      <g-image
                        :src="getSrc(product.images)"
                        class="img-fluid p-1"
                        style="width: 150px"
                        :alt="product.title"
                      />
                    </g-link>
                  </div>
                  <div class="col-md-10">
                    <ul class="list-unstyled">
                      <li class="modal-title">
                        <a target="_blank" :href="product.affiliateLink">{{
                          product.title
                        }}</a>
                      </li>
                      <li class="mt-2">
                        <span class="modal-price" v-if="product.price != '0,0'"
                          >{{ product.price }}{{ indexValue }}</span
                        >
                        <span class="modal-price" v-else
                          ><a
                            class="text-black small text-uppercase"
                            :href="product.affiliateLink"
                            >{{ indexInfo }}</a
                          ></span
                        >
                        <span class="float-end"
                          ><a
                            :href="product.affiliateLink"
                            class="btn btn-success btn-sm"
                            style="margin-right: 10px"
                            tabindex="-1"
                            role="button"
                            aria-disabled="true"
                            ><i class="fas fa-shopping-cart"></i
                          ></a>
                          <a
                            @click="removeToCart(product)"
                            class="btn btn-danger btn-sm"
                            tabindex="-1"
                            role="button"
                            aria-disabled="true"
                            ><i class="fas fa-trash-alt"></i></a
                        ></span>
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="col-md-2">
                    <span @click="removeToCart(product)" class="float-end"><i class="far fa-trash-alt" style="cursor:pointer"></i></span>
                  </div>       -->
                </div>
              </div>
            </b-modal>
          </div>
          <!-- FINE MODALE -->
        </div>
      </div>

      <!-- <ClientOnly> INFINITE SCROLLING PAGER
        <infinite-loading @infinite="loadingProductsHandler"></infinite-loading>
      </ClientOnly> -->

      <div class="container mb-4 pb-4">
        <Pager
          :info="$page.allProduct.pageInfo"
          linkClass="pager__link"
          showNavigation="false"
          showLinks="false"
          class="pager"
        />
      </div>
    </main>

    <!-- SINGLE PRODUCTS -->
  </Layout>
</template>





<script>
// import InfiniteLoading from "vue-infinite-loading"; INFINITE SCROLL PLUGIN
import { Pager } from "gridsome";
import SearchInput from "../components/SearchInput";

export default {
  metaInfo: {
    title: process.env.GRIDSOME_SITE_INDEX_DESC,
  },
  components: {
    // InfiniteLoading,
    Pager,
    SearchInput,
  },

  data() {
    return {
      bookItem: [],
      newBookItem: null,

      //   start infinite scrolling var
      //   products: [],
      //   currentPage: 1,
      //   end  infinite scrolling var
      searchText: process.env.GRIDSOME_SEARCH_TEXT,
      indexValue: process.env.GRIDSOME_INDEX_VALUE,
      indexOffer: process.env.GRIDSOME_INDEX_OFFER_BUTTON,
      indexInfo: process.env.GRIDSOME_INDEX_MORE_INFO,
      indexReviews: process.env.GRIDSOME_INDEX_REVIEWS,
      associate: process.env.GRIDSOME_AMAZON_ID,
      modalPre: process.env.GRIDSOME_MODAL_TEXT_PRE,
      modalAfter: process.env.GRIDSOME_MODAL_TEXT_AFTER,
    };
  },

  //   INFINITE SCROLL
  //   created() {
  //     this.products.push(...this.$page.allProduct.edges);
  //   },
  //   INFINITE SCROLL
  mounted() {
    if (localStorage.getItem("bookItem")) {
      try {
        this.bookItem = JSON.parse(localStorage.getItem("bookItem"));
      } catch (e) {
        localStorage.removeItem("bookItem");
      }
    }
  },

  methods: {
    addToCart(item) {
      if (this.bookItem.indexOf(item) === -1) {
        this.bookItem.push(item);
      } else if (this.bookItem.indexOf(item) !== -1) {
        this.bookItem.splice(this.bookItem.indexOf(item), 1);
      }
      this.newBookItem = "";
      this.saveBook();
    },
    saveBook() {
      const parsed = JSON.stringify(this.bookItem);
      localStorage.setItem("bookItem", parsed);
    },

    removeToCart(item) {
      this.bookItem.splice(this.bookItem.indexOf(item), 1);
      this.saveBook();
    },

    getSrc(images) {
      const { uRL } = images;
      return images.uRL[1] || images.uRL[0];
    },

    // INFINITE SCROLL
    // async loadingProductsHandler($state) {
    //   if (this.currentPage > this.$page.allProduct.pageInfo.totalPages) {
    //     $state.complete();
    //     return;
    //   }

    //   const { data } = await this.$fetch(`/${this.currentPage + 1}`);

    //   const { allProduct } = data;

    //   if (allProduct.edges.length) {
    //     this.currentPage = allProduct.pageInfo.currentPage;
    //     this.products.push(...allProduct.edges);

    //     $state.loaded();

    //     return;
    //   }

    //   $state.complete();
    // },
    // INFINITE SCROLL
  },
  computed: {
    affiliate: function () {
      return "&tag=" + process.env.GRIDSOME_AMAZON_ID;
    },
    reviewsAmz: function () {
      return "#customerReviews";
    },
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({
        query: searchTerm,
        limit: 5,
        suggest: true,
      });
    },
  },
  watch: {
    $route(to, from) {
      this.searchTerm = "";
    },
  },
  filters: {
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    },
  },
};
</script>







<style lang="scss" scoped>

.pager {
    display: inline-block;
    width: 100%;
    text-align: center;

    &__link {
      color: var(--link-color);
      text-align: center;
      text-decoration: none;
     padding: .5rem 1rem;
      margin-right: 5px;

      &:hover:not(.active) {
        background-color: var(--bg-content-color);
        border-radius: 5px;
        color: var(--link-color-hover);
      }
    }
  }

   @media (max-width: 576px) { 
     .pager {
   font-size: .9rem;
   &__link {
     padding: .3rem .6rem;
    // margin-right: 1px;
  }
 }
   }

  .active {
    background-color: var(--bg-content-color);
    border-radius: 5px;
    color: var(--link-color-hover);
  }


.modal-price {
  font-size: 0.9rem;
  font-weight: 900;
}
.modal-title {
  font-size: 0.8rem;
}
.bookmark {
  left: 10px;
  position: fixed;
  z-index: 1040;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  background: crimson;
  line-height: 50px;
  text-align: center;
  color: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.bookmark:focus {
  outline: none;
 
}
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

/* @keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
} */
</style>







<page-query>
query AllProducts ($page: Int) {
  allProduct (sortBy: "brand", order: ASC, perPage: 20, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        price
        salesRank
        uRL
        brand
        listPrice
        images {
          uRL
        }
        description
        discount
        affiliateLink
      }
    }
  }
}
</page-query>




