<template>
  <nav>
    <a href="#">about</a>
    <a href="/"><h1>main</h1></a>
    <a href="#">product</a>
  </nav>
  <main class="main-wrap">
    <div class="inner">
      <h2 ref="triggerDiv" class="main-wrap-h2">HELLO</h2>
      <div class="background-wrap">
        <div class="background-wrap-img" @click="backGround">
        </div>
        <div class="click">
          CLICK ME
        </div>
      </div>
    </div>
  </main>
  <section class="container">
    <div class="inner">
      
    </div>
  </section>
  <TheFooter />
</template>

<script>
import TheFooter from '@/layouts/TheFooter.vue';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'TheMain',
  components: {
    TheFooter
  },
  data(){
    return {
      
    }
  },
  methods: {
    // 메인 화면 클릭 시 이미지 넓어지게
    backGround(){
      document.querySelector('.main-wrap').classList.add('show')
      document.querySelector('nav').classList.add('show')
      document.querySelector('html').classList.add('show')
    },
  },
  mounted() {
  }
}
</script>

<style lang = "scss">
@import "@/assets/scss/main.scss";
html.show {
  height: inherit;
}
</style>