<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>裁员百人后，华为警告在澳提供的1500个工作将流失</h2>
            <p>观察者网 12-03 15:41</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>江西吉水发现一处史前遗址 距今约5000年</h2>
            <p>环球网 12-0315:08</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>2家韩电池厂在美“缠斗”，大众等车企意外被“卡脖”</h2>
            <p>观察者网 12-03 14:56</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>联合国气候大会开幕 古特雷斯呼吁各国“加把劲”</h2>
            <p>看看新闻Knews 12-03 11:57</p>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from "swiper"
export default {
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', 
      loop: true, 
      autoplay: 2000, 
      slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
      centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
    })
  },
  methods: {
  }
};
</script>
<style scoped>
img{
  width: 100%;
  display: block;
 }
.text-box {
  width: 100%;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}
</style>