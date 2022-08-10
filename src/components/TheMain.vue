<template>
  <nav>
    <a href="#">PROFILE</a>
    <a href="/"><h1>DAYOUNG</h1></a>
    <a href="#">PORTFOLIO</a>
  </nav>
  <main class="main-wrap">
    <div class="inner">
      <h2 ref="triggerDiv" class="main-wrap-h2">KIM DA YOUNG</h2>
      <div class="background-wrap" @click="backGround">
        <div class="background-wrap-img">
        </div>
        <div class="click">
          CLICK ME
        </div>
      </div>
    </div>
  </main>  
  <TheFooter />
</template>

<script>
import TheFooter from '@/layouts/TheFooter.vue'

export default {
  name: 'TheMain',
  components: {
    TheFooter
  },
  data(){
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1,
      }
    }
  },
  methods: {
    handleIntersect: function (target) {
      if(target.isIntersecting) this.$emit(`triggerFadeIn`, this.OID);
    },
    backGround(){
      document.querySelector('.main-wrap').classList.add('show')
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv);
  }
}
</script>

<style lang = "scss" scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 8rem;
    padding: 3rem 0;
    z-index: 100;
  }
  .main-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: $white;
    transition: all .5s;
    overflow: hidden;
    &-h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Montserrat', sans-serif;
      font-size: 6rem;
      font-weight: 700;
      color: $white;
      z-index: 100;
      cursor: pointer;
      /* opacity: 0; */
    }
    &.show {
      /* height: 100%; */
      background: transparent;
      overflow: inherit;
      .background-wrap {
        &-img {
          width: 70%;
          height: 75%;
        }
        .click {
          opacity: 0;
        }
      }
    }
    .background-wrap {
      width: 100%;
      height: 100%;
      &-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35%;
        height: 75%;
        background-image: url(@/assets/images/fall3.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 1s;
        cursor: pointer;
      }
      .click {
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 2rem;
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;
        color: $white;
        transition: all .8s;
      }
    }
  }
</style>