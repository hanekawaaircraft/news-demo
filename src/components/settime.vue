<template>
  <div class="timer">
    <div>
      <p v-show="show" @click="settime()" >点击倒计时</p>
    </div>
    <div v-show="!show" class="clock">
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <em class="divider">:</em>
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <em class="divider">:</em>
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
      <div class="flip">
        <div class="digital front" data-number="0"></div>
        <div class="digital back" data-number="1"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startNum:"600",
      theTime:0,
      timer : null,
      show:true
    };
  },
  mounted(){
    // this.settime()
  },
  methods:{
    settime(){
      
      let Flipper = (function () {
      function Flipper(node, currentTime, nextTime) {
        this.isFlipping = false;
        this.duration = 600;
        this.flipNode = node;
        this.frontNode = node.querySelector(".front");
        this.backNode = node.querySelector(".back");
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
      }
      Flipper.prototype.setFrontTime = function (time) {
        this.frontNode.dataset.number = time;
      };
      Flipper.prototype.setBackTime = function (time) {
        this.backNode.dataset.number = time;
      };
      Flipper.prototype.flipDown = function (currentTime, nextTime) {
        let that = this;
        if (this.isFlipping) {
          return false;
        }
        that.isFlipping = true;
        that.setFrontTime(currentTime);
        that.setBackTime(nextTime);
        that.flipNode.classList.add("running");
      setTimeout( ()=> {
        that.flipNode.classList.remove("running");
        that.isFlipping = false;
        that.setFrontTime(nextTime);
      }, this.duration);
    };
      return Flipper;
    }());
    let getTimeFromDate = function (date) {
      return date
        .toTimeString()
        .slice(0, 8)
        .split(":")
        .join("");
    };
    function formatSeconds(value) {
      let theTime = parseInt(value);// 秒
      let min = 0;// 分
      let hour = 0;// 小时
      if (theTime > 60) {
        min = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (min > 60) {
          hour = parseInt(min / 60);
          min = parseInt(min % 60);
        }
      }
      let result;
      if (parseInt(theTime) < 10) {
        theTime = "0" + parseInt(theTime);
        result = "" + theTime;
      } else {
        result = "" + parseInt(theTime);
      }

      if (min > 0) {
        if (parseInt(min) < 10) {
          min = "0" + parseInt(min)
          result = "" + min + result;
        } else {
          result = "" + parseInt(min) + result;
        }
      }else{
        result = "00"  + result;
      }
      if (hour > 0) {
        if (parseInt(hour) < 10) {
          hour = "0" + parseInt(hour)
          result = "" + hour + result;
        } else {
          result = "" + parseInt(hour) + result;
        }
      }else{
        result = "00" + result;
      }
      return result;
    }
    if(!this.timer){ 
      this.show = false;
      let num = this.startNum;
      let flips = document.querySelectorAll(".flip");
      let nowTimeStr = formatSeconds(num+1);
      let nextTimeStr = formatSeconds(num);
      let flippers = Array.from(flips).map( (flip, i)=> {
        return new Flipper(flip, nextTimeStr[i], nowTimeStr[i]);
      });


      this.timer=window.setInterval( ()=> {
       
        let nowTimeStr = formatSeconds(num - 1);
        let nextTimeStr = formatSeconds(num);
        num--;
        if(num<0){
          this.show = true;
          nowTimeStr=0;
          nextTimeStr=0
          window.clearInterval(this.timer);
          this.timer = null;
        }
        console.log(nowTimeStr, nextTimeStr)
        for (let i = 0; i < flippers.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue;
          }
          flippers[i].flipDown(nextTimeStr[i],nowTimeStr[i] );
        }
      }, 1000);
    }
    
    }
  }
}
</script>
<style scope>
  .timer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.clock {
  display: flex;
}
.clock .divider {
  font-size: 66px;
  line-height: 102px;
  font-style: normal;
}
.clock .flip {
  position: relative;
  width: 60px;
  height: 100px;
  margin: 2px;
  font-size: 66px;
  line-height: 100px;
  text-align: center;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
.clock .flip .digital::before, .clock .flip .digital::after {
  position: absolute;
  content: attr(data-number);
  left: 0;
  right: 0;
  color: white;
  background: black;
  overflow: hidden;
  perspective: 160px;
}
.clock .flip .digital::before {
  top: 0;
  bottom: 50%;
  border-bottom: 1px solid #666;
  border-radius: 10px 10px 0 0;
}
.clock .flip .digital::after {
  top: 50%;
  bottom: 0;
  line-height: 0;
  border-radius: 0 0 10px 10px;
}
.clock .flip .back::before,
.clock .flip .front::after {
  z-index: 1;
}
.clock .flip .back::after {
  z-index: 2;
}
.clock .flip .front::before {
  z-index: 3;
}
.clock .flip .back::after {
  transform-origin: center top;
  transform: rotateX(0.5turn);
}
.clock .flip.running .front::before {
  transform-origin: center bottom;
  animation: frontFlipDown 0.6s ease-in-out;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}
.clock .flip.running .back::after {
  animation: backFlipDown 0.6s ease-in-out;
}
@-webkit-keyframes frontFlipDown {
  to {
  transform: rotateX(0.5turn);
  }
}
@keyframes frontFlipDown {
  to {
    transform: rotateX(0.5turn);
  }
}
@-webkit-keyframes backFlipDown {
  to {
    transform: rotateX(0);
  }
}
@keyframes backFlipDown {
  to {
    transform: rotateX(0);
  }
}
</style>