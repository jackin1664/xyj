<template>
  <div v-if="show" class="wrap-bg">
    <div @click="close" class="wrap-close">
      <img src="./img/toast-close.png" alt="">
    </div>
    <div class="wrap-title">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "toastDoc",
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>
<style scoped>
.wrap-close{
  position: absolute;
  right: 0;
  top: -10px;

}
.wrap-bg {
  font-size: 16px;
  position: fixed;
  left: 50%;
  top: 50%;
  background: url(./img/toast-bg.png);
  background-color: #2C2C2C;
  background-size: 100% 100%;
  padding: 20px 40px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  max-width: 40%;
  color: #fff;
  z-index: 22222;
  line-height: 26px;
}
.wrap-title{
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}
@media (max-width: 960px) {
  .wrap-bg{
    max-width: 80%;
    padding: 10px 10px;
  }
}
</style>
