<template>
 <div class="banner">
     <ul class="clearfix">
      <li>
        <img src="../assets/images/img-1.jpg" />
        <div class="text-box">
          <h2>裁员百人后，华为警告在澳提供的1500个工作将流失</h2>
          <p>观察者网 12-03 15:41</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/img-1.jpg" />
        <div class="text-box">
          <h2>江西吉水发现一处史前遗址 距今约5000年</h2>
          <p>环球网 12-0315:08</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/img-1.jpg" />
        <div class="text-box">
          <h2>2家韩电池厂在美“缠斗”，大众等车企意外被“卡脖”</h2>
          <p>观察者网 12-03 14:56</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/img-1.jpg" />
        <div class="text-box">
          <h2>联合国气候大会开幕 古特雷斯呼吁各国“加把劲”</h2>
          <p>看看新闻Knews 12-03 11:57</p>
        </div>
      </li>
    </ul>
    <ol>
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  
    <!-- <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>裁员百人后，华为警告在澳提供的1500个工作将流失</h2>
            <p>观察者网 12-03 15:41</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>江西吉水发现一处史前遗址 距今约5000年</h2>
            <p>环球网 12-03 15:08</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>2家韩电池厂在美“缠斗”，大众等车企意外被“卡脖”</h2>
            <p>观察者网 12-03 14:56</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/images/img-1.jpg" />
          <div class="text-box">
            <h2>联合国气候大会开幕 古特雷斯呼吁各国“加把劲”</h2>
            <p>看看新闻Knews 12-03 11:57</p>
          </div>
        </div>
      </CarouselItem>
    </Carousel> -->
  </div> 
</template>
<script>
import '../assets/js/font'
import '../assets/js/jquery-1.7.2.js'
import {Swipe } from  '../assets/js/swipe.js'
export default {
  data(){
    return {
      // value2: 0
    }
  },
  mounted() {
    this.lbSlider();
  },
  watch: {
    // '$route':function(){
    // 	alert(1);
    // }
  },
  methods: {
    lbSlider() {
      $(function() {
        var mySwipe = new Swipe($(".banner")[0], {
          auto: 2000,  
          continuous: true, 
          stopPropation: true,   
          callback: function(index, element) { 
            $(".banner ol li").removeClass("active"); 
            $(".banner ol li") 
              .eq(index) 
              .addClass("active"); 
          }
        });
      });
    }
  }
};
</script>
<style scoped>
/* 
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
} */
</style>