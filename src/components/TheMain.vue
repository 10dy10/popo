<template>
  <main class="main-wrap">
    <div class="inner">
      <h2 ref="triggerDiv">KIM DA YOUNG</h2>
      <div class="background-wrap">
        <div class="background-img-wrap">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TheMain',
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
  h2 {
    opacity: 0;
  }
</style>