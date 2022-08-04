<template>
  <div class="container">
    <div class="circle"></div>
    <div class="square"></div>
    <div class="triangle"></div>
    <div class="logo">DAYOUNG</div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import url('https://fonts.googleapis.com/css?family=Raleway:200');

.container {
  width: 100%;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  .shadow {
    width: 60px;
    height: 4px;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 3px;
    animation: shadow 5s ease-in-out infinite;
    margin: auto;
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
  }
}

@keyframes shadow {
  0% {
    width: 60px;
  }
  10% {
    width: 10px;
  }
  20% {
    width: 60px;
  }
  30%{
    width:10px;
  }
  40%{
    width:60px;
  }
  50%{
    width:10px;
  }
  60%{
    width:60px;
  }
  70%{
    width:10px;
  }
  92%{
    width:10px;
  }
  100%{
    width:60px;
  }
}
</style>