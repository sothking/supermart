<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in bannerData" :key='index'><img :src="item.image" alt=""></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import { homeBanner } from "@/network/home.js";
export default {
  components:{
       Swiper,
    SwiperSlide
  },
  data() {
    return {
      bannerData: [],
       swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    };
    
  },

  created() {
    homeBanner().then(res => {
      console.log(res)
      this.bannerData = res.library;
      
    });
  },
  mounted() {
    console.log(this.bannerData)
   
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 300px;
}
</style>
