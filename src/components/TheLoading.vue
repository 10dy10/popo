<template>
  <div class="loading">
    <div class="container">
      <div class="circle"></div>
      <div class="square"></div>
      <div class="triangle"></div>
      <div class="logo">DY</div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLoding',
};
</script>

<style lang="scss" scope>
@import url("https://fonts.googleapis.com/css?family=Raleway:200");

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $white;
  z-index: 1000;
  .container {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 60px;
    height: 250px;
    margin: auto;
    font-family: "Raleway", sans-serif;
    .circle {
      width: 55px;
      height: 55px;
      border: 2px solid #2ecc71;
      background-color: #ffffff;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      animation: circle 5s ease-in-out infinite;
    }
    .square {
      width: 55px;
      height: 55px;
      border: 2px solid #f1c40f;
      background-color: #ffffff;
      position: absolute;
      bottom: 0;
      opacity: 0;
      animation: square 5s ease-in-out infinite;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 50px solid #9b59b6;
      position: absolute;
      bottom: 0;
      animation: triangle 5s ease-in-out infinite;
      opacity: 0;
    }
    .triangle::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 26px solid transparent;
      border-right: 26px solid transparent;
      border-bottom: 44px solid white;
      position: absolute;
      bottom: -48px;
      left: -26px;
    }
    .logo {
      position: absolute;
      bottom: 0;
      text-align: center;
      color: #3498db;
      font-size: 30px;
      // margin-left: -5px;
      opacity: 0;
      animation: logo 5s ease-in-out infinite;
    }
    .shadow {
      width: 60px;
      height: 4px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      animation: shadow 5s ease-in-out infinite;
      margin: auto;
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
    }
  }
}
</style>
