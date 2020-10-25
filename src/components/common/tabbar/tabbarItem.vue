<template>
  <div class="tab_bar_item" @click='navActive'>
    <div v-if="!isActive"><slot name="nav-icon"></slot></div>
    <div v-else><slot name="nav-icon-active"></slot></div>
    <div :style='activeStyle'>
      <slot name="nav-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props:{
      path:String,
       activeColor:{
           type:String,
           default:'green'
       }
  },
  data() {
    return {
    };
  },
  computed:{
      isActive(){
         return this.$route.path.indexOf(this.path)!==-1;
         
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
      }
         
  },
  methods:{
      navActive(){
         this.$router.push(this.path);
 
}
}
}
</script>

<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  background: #f6f6f6;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
