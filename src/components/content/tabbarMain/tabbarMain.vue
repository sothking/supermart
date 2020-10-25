<template>
  <div>
      <tabbar>
      <tabbarItem path='/home' >
          <img slot='nav-icon'  src="@/assets/img/tabbar/bottom1.png" alt="" />
          <img  alt="" slot="nav-icon-active" src="@/assets/img/tabbar/bottom01.png">
         <div slot='nav-text'> 首页</div>
      </tabbarItem>
      <tabbarItem  path='/fenlei' activeColor='#ff0000'>
         <img slot='nav-icon' src="@/assets/img/tabbar/bottom2.png" alt="" />
           <img  alt="" slot="nav-icon-active" src="@/assets/img/tabbar/bottom02.png">
         <div slot='nav-text'> 分类</div>
      </tabbarItem>
      <tabbarItem  path='/shoping' activeColor='#ff0000'>
         <img slot='nav-icon' src="@/assets/img/tabbar/bottom3.png" alt="" />
           <img  alt="" slot="nav-icon-active" src="@/assets/img/tabbar/bottom03.png">
         <div slot='nav-text'> 购物车</div>
      </tabbarItem>
      <tabbarItem  path='/my' activeColor='#ff0000'>
         <img slot='nav-icon' src="@/assets/img/tabbar/bottom4.png" alt="" />
           <img  alt="" slot="nav-icon-active" src="@/assets/img/tabbar/bottom04.png">
         <div slot='nav-text'> 我`的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar.vue";
import tabbarItem from "@/components/common/tabbar/tabbarItem.vue";
export default {
    components: {
  tabbar,
    tabbarItem
    }
  
}
</script>

<style>

</style>