<template>
  <div id="app">
     <router-view/> 
    <tabbarMain></tabbarMain>
  </div>
</template>
<script>
import tabbarMain from '@/components/content/tabbarMain/tabbarMain.vue'
export default {
  name: "App",
  components: {
  tabbarMain
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
