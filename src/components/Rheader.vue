<template>
  <header>
   <b-navbar toggleable="lg" type="dark" variant="dark" class="d-flex justify-content-center">       
        <b-navbar-brand href="/">
           <img src="/img/logo.svg" alt="" width="45" height="45"><span style="margin-left:10px">{{ siteName }}</span>
        </b-navbar-brand>
  </b-navbar>

    <div>
      <!-- <b-navbar type="dark" variant="dark">       
       
      </b-navbar> -->
    </div>




  </header>
</template>

<style scoped>
 .navbar-brand {
    display: inline-block;
} 
</style>


<script>
import SearchInput from "../components/SearchInput";
export default {
  name: "Rheader",

  data() {
    return {
      siteName: process.env.GRIDSOME_SITE_NAME,
    };
  },
  components: {
    SearchInput,
  },
  computed: {
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
};
</script>

