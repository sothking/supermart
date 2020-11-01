<template>
<div>
  <div class="home-nav">
  <navbar>
  <div slot='center' class="home-nav-title">购物街</div>
    </navbar> 
</div>
  <div>
    <swiperbanner/>
    
     <h2>首页</h2>
  </div>
</div>
</template>

<script>
import navbar from '@/components/content/navbar/NavBar'

import swiperbanner from '@/components/content/banner/banner'

export default {
  components:{
    navbar,swiperbanner
  },

 
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