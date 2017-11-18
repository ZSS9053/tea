<template>
  <div class="index">
  <router-view></router-view>
  <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from './Footer'
  export default{
   components: {
   vFooter:Footer
  }
  }
</script>

<style></style>
