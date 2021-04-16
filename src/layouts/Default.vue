
<template>
  <div>
    <Rheader />
    <slot />
    <Rfooter />
  </div>
</template>


<script>
import Rheader from '~/components/Rheader.vue'
import Rfooter from '~/components/Rfooter.vue'

export default {
  components: {
    Rheader,
    Rfooter
  }
}
</script>





<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


