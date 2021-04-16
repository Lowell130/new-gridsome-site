<template>
<div>
<!-- <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" id="search" v-model="searchTerm">
</div> -->

<div class="input-group mb-3">
  <input type="text" class="form-control" id="search" v-model="searchTerm">
  <!-- <button class="btn btn-outline-secondary" type="button" id="search">Go</button> -->
 </div>

 <div v-if="searchTerm.length > 0">         
            <!-- <ul class="text-break list-unstyled p-3 position-absolute" style="z-index: 1020; font-size: .8rem;"> -->
                <ul style="z-index: 1020; font-size: 1rem;" class="text-break" v-bind:class="[searchTerm.length > 0 ? '' : 'list-unstyled p-3 position-absolute']">
              <li v-for="result in searchResults" :key="result.id">
                <g-link :to="result.path">
                  {{ result.title }}
                </g-link>
              </li>
            </ul>
     
        
      </div>
  
     

      <!-- <input type="text" placeholder="search" class="" id="search" v-model="searchTerm" /> -->
      
     <!-- START PER AZZERARE -->
      <!-- <div v-if="searchTerm.length > 0" @click="reset">
        &times;
      </div> -->
      <!-- END  PER AZZERARE -->
    

  
     
   
   
</div>
</template>

<script>
import SearchFocus from "./SearchFocus";

export default {
  components: {
    SearchFocus,
  },
  created() {},
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 1) return [];
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
  methods: {
    reset() {
      this.searchTerm = "";
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
