<template>
<div>
  <div class="home-nav">
  <navbar>
  <div slot='center' class="home-nav-title">购物街</div>
    </navbar> 
</div>
  <div>
      <h2>首页</h2>
  </div>
</div>
</template>

<script>
import navbar from '@/components/content/navbar/NavBar'
import {homeBanner} from '@/network/home.js'
export default {
  components:{
    navbar
  },
  created(){
    homeBanner().then(res =>{
      console.log(res)
    })
 
  }
}
</script>

<style>
.home-nav{
  background-color: brown;
  color: #fff;
}
.home-nav-title{
  text-align: center;
}
</style>