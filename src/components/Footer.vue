<template>
  <!--            第三部分-->
  <div class="footer">
    <div class="content-bottom">
      <a class="bottom-link" href="https://twitter.com/MonkeyKingNFT" target="_blank">
        <div class="more-link">Twitter</div>
      </a>
      <a class="bottom-link" href="https://medium.com/@MonkeyKing" target="_blank">
        <div class="more-link">Medium</div>
      </a>
      <a class="bottom-link" href="https://www.reddit.com/user/MonkeyKingNFT" target="_blank">
        <div class="more-link">Reddit</div>
      </a>
      <a class="bottom-link" href="https://t.me/NFTMonkeyKing" target="_blank">
        <div class="more-link">Telegram</div>
      </a>
      <a class="bottom-link" href="/static/dntg.English.pdf" target="_blank">
        <div class="more-link">Document</div>
      </a>
      <div class="more-link">Audit</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      changeWX: false
    }
  },
  methods: {
    actionWX() {
      this.changeWX = true
    },
    actionCancel() {
      this.changeWX = false
    },
  }
}
</script>

<style scoped lang="less">


//结尾
.footer {
  width: 100%;
  background: url("../assect/footer/bg.png") no-repeat;
  background-size: 100% 100%;
}


.content-bottom {
  width: 100%;
  height: 404px;
  background: url("../assect/content/bg-four.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  //margin-bottom: 24px;
}

.bottom-btn {
  margin-top: 10px;
  cursor: pointer;
  width: 122px;
  height: 59px;
  padding-left: 30px;
}

@media (max-width: 960px) {

  .footer {
    height: 123px !important;
  }

  .content-bottom {
    width: 100%;
    height: 123px !important;
  }


  .bottom-btn {
    //padding-top: 30px;
    padding-left: 20px;
    width: 61px;
    height: 30px;
  }

}

.more-link {
  margin-top: 10px;
  cursor: pointer;
  width: 122px;
  height: 59px;
  text-align: center;
  line-height: 59px;
  color: #fff;
  background: url(../assect/contentTwo/btn-grey.png);
  background-size: 100% 100%;
}

.bottom-link {
  text-decoration: none;
}
</style>
