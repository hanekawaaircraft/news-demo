<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <p>公开博文</p>
  </div>
</template>
<style scoped>
.content-s{
    margin-top:40px;
    padding:0 10px 10px ;
  }
  .fh-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    /* border-bottom: 1px solid #e8eaec; */
    z-index: 99;
  }
  h2{
    font-size: 13px;
  }
  .fh-nav ul {
    width: 6.4rem;
    height: 0.45rem;
    padding-top: 0.15rem;
    margin: 0 auto;
  }
  .fh-nav ul li {
    width: 0.29rem;
    height: 0.31rem;
    background: url(../../assets/img/history.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 0 0 0.38rem;
  }
</style>