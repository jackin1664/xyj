<template>
  <div class="header">
    <div class="header-container">
        <img class="header-logo" src="../assect/header/logo.png"/>
        <div class="header-list">
          <span @click="goHome">首页</span>
          <span @click="goBuy">购买</span>
          <span @click="goDig">挖矿</span>
          <span>合成</span>
          <span @click="goStop()">商城</span>
          <span>对战</span>
          <span @click="goPack()">我的卡牌</span>
        </div>
        <div class="header-icon">
          <span v-if="address">{{address}}</span>
          <span v-else>登录钱包</span>
          <img class="header-icon-two" src="../assect/header/icon2.png"/>
          <img class="header-icon-two" src="../assect/header/icon3.png"/>
        </div>
        <div @click="showTabs()" class="header-menu">
          <img src="../assect/header/menu.png"/>
        </div>
        <div v-show="showTab" class="header-tab">
            <div @click="goHome" class="header-tab-title">首页</div>
            <img src="../assect/header/line.png"/>
            <div @click="goBuy" class="header-tab-title">购买</div>
            <img src="../assect/header/line.png"/>
            <div @click="goDig" class="header-tab-title">挖矿</div>
            <img src="../assect/header/line.png"/>
            <div class="header-tab-title">合成</div>
            <img src="../assect/header/line.png"/>
            <div @click="goStop()" class="header-tab-title">商城</div>
            <img src="../assect/header/line.png"/>
            <div class="header-tab-title">对战</div>
            <img src="../assect/header/line.png"/>
            <div  @click="goPack()" class="header-tab-title">我的卡牌</div>
            <img src="../assect/header/line.png"/>
          <div class="header-h-icon">
            <span v-if="address">{{address}}</span>
            <span v-else>登录钱包</span>
            <img class="header-icon-two" src="../assect/header/icon2.png"/>
            <img class="header-icon-two" src="../assect/header/icon3.png"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// const Web3 = require('web3');
// const web3 = new Web3(window.web3.currentProvider);
export default {
  name: "Header",
  data() {
    return {
      address:'1',//地址
      showTab:false
    }
  },
  created() {
  },
  computed: {
    account_default_address() {
      return this.$store.state.account.default_address
    },
  },
  watch: {
    //检测到获取了地址
    account_default_address() {
      this.actionAddress()
    }
  },
  methods: {
    async actionAddress() {
      this.address = await this.action.getSortAddress()
    },
    goPack() {
      this.$router.push('pack')
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    goStop() {
      this.$router.push('stop')
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    goHome() {
      this.$router.push('/')
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    goBuy() {
      this.$router.push('buy')
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    goDig() {
      this.$router.push('dig')
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    showTabs() {
      this.showTab=!this.showTab
      if (this.showTab) {
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false);//禁止页面滑动
      }
      else  {
        var mos = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mos, false);
      }
    }
  },
  mounted() {
    this.actionAddress()
  }
}
</script>

<style scoped lang="less">

  .header {
    width: 100%;
    height: 81px;
    position: relative;
    z-index: 990;
    background-image: url('../assect/header/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .header-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header-logo {
    width: 187px;
    height: 59px;
  }

  .header-list {
    width: 55%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      //width: 36px;
      //height: 25px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #E7E0D0;
      //line-height: 25px;
      cursor: pointer;
    }
  }

  .header-icon {
    width: 18%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      cursor: pointer;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFD477;
      border-bottom: 1px solid #FFD477;
    }
    span:nth-child(1) {
      border: 0;
    }
  }

  .header-icon-one {
    width: 25px;
    height: 27px;
    cursor: pointer;
  }
  .header-icon-two {
    width: 33px;
    height: 25px;
    cursor: pointer;
  }

  .header-menu {
    display: none;
  }

  @media(max-width: 1200px) {
    .header-container {
      width: 100%;
    }
  }

  @media(max-width: 960px) {
    .header-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .header-list {
      display: none;
    }
    .header-icon {
      display: none;
    }

    .header-menu {
      display: block;
      position: absolute;
      right: 5%;
      cursor: pointer;
      img {
        width: 36px;
        height: 32px;
      }
    }

    .header-tab {
      position: fixed;
      top: 81px;
      width: 100%;
      height: 100%;
      z-index: 999;
      background: rgba(34, 34, 34, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header-tab-title {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #E7E0D0;
    }
    .header-h-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 40%;
      position: fixed;
      bottom: 33px;
      span {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFD477;
        border-bottom: 1px solid #FFD477;
      }
    }
  }


</style>
