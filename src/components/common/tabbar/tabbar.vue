<template>
    <div id="nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
name:'tabbar',

}
</script>

<style>
#nav{
  display: flex;
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.08);
}

</style>