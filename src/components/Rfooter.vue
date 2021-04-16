<template>


   <!-- FOOTER -->
  
    
<footer class="footer p-2 text-center">
   
      <span>{{ footer }}</span>
   

  </footer>   



</template>

<script>
export default {
  name: 'Rfooter',
   data() {
    return {
      footer: process.env.GRIDSOME_FOOTER,
      


      
      
      
    };
  },
}
</script>
