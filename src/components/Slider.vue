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
  </div>
</template>
<script>
export default {
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