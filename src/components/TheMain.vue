<template>
  <main class="main-wrap">
    <div class="inner">
      <div class="background-wrap">
        <div class="background-img-wrap">
        </div>
      </div>
      <h2>KIM DA YOUNG</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TheMain',
  data(){
    return {

    }
  },
  setup() {
    
  },
  created(){

  }
}
</script>

<style lang = "scss">
  .main-wrap {
    width: 100%;
    height: 100vh;
    .background-wrap {
      width: 100%;
      height: 100%;
      .background-img-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 75%;
        background-image: url(@/assets/images/fall3.jpg);
        background-position: -278px -20px;
      }
    }
  }
</style>