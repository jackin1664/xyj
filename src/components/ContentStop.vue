<template>
  <div class="stop">
    <div class="dig-line">
      <span>NFT质押挖矿正式上线啦！</span>
    </div>
    <div class="stop-container">
      <div class="stop-one">
        <!--              上部分-->
        <div class="stop-one-top">
          <img src="../assect/stop/text.png"/>
        </div>
        <!--                下部分-->
        <div class="stop-bottom">
          <div class="stop-bottom-content">
            <div class="stop-bottom-info">
              <div class="middle-info-card">
                <img src="../assect/stop/tao.png" class="middle-info-border"/>
                <img src="../assect/stop/boder.png" class="middle-info-moncard"/>
              </div>
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[1]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[0][0] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[1][0] }}TMK</div>
                </div>
                <div class="right-info">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(1)" class="right-info-buy">购买</div>
                </div>
              </div>

            </div>
            <div class="stop-bottom-info">
              <div class="middle-info-card">
                <img src="../assect/stop/dan.png" class="middle-info-border"/>
                <img src="../assect/stop/boder.png" class="middle-info-moncard"/>
              </div>
              <!--                      <div class="stop-bottom-box">蟠桃</div>-->
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[2]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[0][2] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[1][2] }}TMK</div>
                </div>
                <div class="right-info">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(2)" class="right-info-buy">购买</div>
                </div>
              </div>

            </div>
            <div class="stop-bottom-info">
              <div class="middle-info-card">
                <img src="../assect/stop/ma.png" class="middle-info-border"/>
                <img src="../assect/stop/boder.png" class="middle-info-moncard"/>
              </div>
              <!--                      <div class="stop-bottom-box">蟠桃</div>-->
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[3]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[0][1] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[1][1] }}TMK</div>
                </div>
                <div class="right-info">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(3)" class="right-info-buy">购买</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!--              上部分-->
        <div class="stop-one-top stop-one-tops">
          <img src="../assect/stop/text2.png"/>
        </div>
        <div class="stop-bottom">
          <div class="stop-bottom-content">
            <div v-for="item in weapon" :key="item.type" class="stop-bottom-info">
              <div class="stop-bottom-box">{{item.name}}</div>
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <div class="right-info-num">1</div>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">能力值：{{item.power}}</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{item.price}}TMK</div>
                </div>
                <div class="right-info">
                  <div v-if="item.sale == 0 && !husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if=" item.sale == 0 && husdApproved" @click="actionBuyWeapon(item.type)" class="right-info-buy">购买</div>
                  <div v-if="item.sale == 1" class="right-info-buy">已售出</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--        弹窗-->
    <div v-show="detail" class="dialog">
      <div class="dialog-content">
        <div class="middle-info-card">
          <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
          <img src="../assect/stop/boder.png" class="middle-info-border"/>
        </div>
        <div class="dialog-right">
          <div class="right-info">
            <span class="right-info-title">数量</span>
            <div class="right-info-num">100</div>
          </div>
          <img class="dialog-line" src="../assect/dialog/line.png"/>
          <div class="dialog-text">提升比例：100</div>
          <img class="dialog-line" src="../assect/dialog/line.png"/>
          <div class="right-info">
            <img class="right-info-money" src="../assect/stop/money.png"/>
            <div class="right-info-tmk">100TMK</div>
          </div>
          <img class="dialog-line" src="../assect/dialog/line.png"/>
          <div class="dialog-btn">
            <div class="gua-btn">挂载</div>
            <div class="zhuan-btn">转让赠送</div>
          </div>
        </div>
        <div @click="closeDialog" class="dialog-error"></div>
      </div>

    </div>
  </div>
</template>

<script>
import '../css/base.less'
import config from "@/config/base";

const tokenAbi = require('@/config/token_abi.json');
const marketAbi = require('@/config/marketABI.json');
const Decimal = require('decimal.js')
export default {
  name: "ContentStop",
  data() {
    return {
      Config: config,
      husdApproved: false,
      approveHash: '',
      approveHUSDHash: '',
      detail: false,
      info: [[], []],
      amount: [0, 0, 0, 0],
      weapon: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    //关闭弹窗
    closeDialog() {
      this.detail = false
    },
    async actionBuy(num) {
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.market
      let amount = this.amount[num]
      if(amount == 0){
        this.$toast('请输入购买数量')
      }
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      const saleData = contract.methods.buyTreasure(2, num, amount).encodeABI();
      console.log('saledata', saleData)
      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: reward_address,
        value: 0,
        data: saleData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
            v.$toast('交易已发出，等待结果。。。')
            v.approveHash = hash;
            v.timer = setInterval(v.checkApproved, 1000);
            //server order
          }).on('receipt', function (receipt) {
            //receipt
            console.log(receipt)
          }).on('error', function (receipt) {
            //receipt
            console.log(receipt)
          })
      this.getData()
    },
    async actionBuyWeapon(num) {
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.market
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      const saleData = contract.methods.buyWeapon(num).encodeABI();
      console.log('saledata', saleData)
      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: reward_address,
        value: 0,
        data: saleData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
            v.$toast('交易已发出，等待结果。。。')
            v.approveHash = hash;
            v.timer = setInterval(v.checkApproved, 1000);
            //server order
          }).on('receipt', function (receipt) {
            //receipt
            console.log(receipt)
          }).on('error', function (receipt) {
            //receipt
            console.log(receipt)
          })
      this.getData()
    },
    async getMarket() {
      let v = this
      //approve
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      let info = await contract.methods.getPriceCoefficientInfo().call();
      for (let i of info[0]) {
        this.info[0].push(new Decimal(i).div(Math.pow(10, 18)).toFixed())
      }
      this.info[1] = info[1]
      console.log(`info`, this.info)
    },
    async getWaponMarket() {
      let v = this
      //approve
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      let info = await contract.methods.getWeaponInfo().call();
      for (let i of config.weapon) {
        i.power = info[0][i.type - 1]
        i.price = new Decimal(info[1][i.type - 1]).div(Math.pow(10, 18)).toFixed()
        i.sale = info[2][i.type - 1]
      }
      this.weapon = config.weapon
      console.log(`weapon 111`, this.weapon)
    },
    async actionHUSDApprove() {
      let v = this
      let reward_address = config.market
      let token_address = config.tmk
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(tokenAbi, token_address)
      const approveData = contract.methods.approve(reward_address, '10000000000000000000000000').encodeABI();
      console.log('approvedata', approveData)

      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: token_address,
        value: 0,
        data: approveData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
            v.approveHUSDHash = hash;
            v.timerHUSD = setInterval(v.checkHUSDApproved, 1000);
            //server order
          }).on('receipt', function (receipt) {
            //receipt
            console.log(receipt)
          }).on('error', function (receipt) {
            //receipt
            console.log(receipt)
          })
      this.getData()
    },
    async checkHUSDApproved() {
      console.log(`check approving`)
      let v = this

      var local_address = await v.action.getAddress()
      let contract = new v.myWeb3.eth.Contract(tokenAbi, config.tmk)
      contract.methods.allowance(local_address, config.market).call(function (error, result) {
        if (result != 0) {
          v.husdApproved = true;
          //清空检测事件
          v.approveHUSDHash = '';
          clearInterval(v.timerHUSD);
        } else {
          v.husdApproved = false;
        }
      });
    },
    actionDetail() {
      // this.detail = true
      // if (this.detail == true) {
      //   var mo = function (e) {
      //     e.preventDefault();
      //   };
      //   document.body.style.overflow = 'hidden';
      //   // document.addEventListener("touchmove", mo, false);//禁止页面滑动
      // } else {
      //   var mos = function (e) {
      //     e.preventDefault();
      //   };
      //   document.body.style.overflow = '';//出现滚动条
      //   // document.removeEventListener("touchmove", mos, false);
      // }
    },
    getData() {
      this.getMarket()
      this.checkHUSDApproved()
      this.getWaponMarket()
    },
  }
}
</script>

<style scoped lang="less">
.stop {
  position: relative;
  width: 100%;
  background-image: url('../assect/content/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.stop-container {
  padding-top: 40px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stop-one-top {
  width: 987px;
  height: 64px;
  background: url("../assect/contentDig/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-top: -20px;
    width: 137px;
    height: 55px;
  }
}

.stop-one-tops {
  margin-top: 60px;
}

.stop-bottom {
  width: 987px;
  padding-top: 40px;
  background: url("../assect/stop/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stop-bottom-s {
  margin-top: 60px;
}

.stop-bottom-content {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.stop-bottom-info {
  margin-bottom: 30px;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.stop-bottom-infos {
  padding-top: 60px;
}

.stop-bottom-box {
  width: 154px;
  height: 233px;
  background: url("../assect/stop/boder.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 233px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

.stop-right-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 19px;
}

.right-info {
  padding-top: 21px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right-info-title {

}

.right-info-num {
  width: 70px;
  height: 28px;
  line-height: 28px;
  background: url("../assect/stop/bg-box.png") no-repeat;
  background-size: 100% 100%;
  color: #FFD477;
  text-align: center;
  margin-left: 5px;
}

.right-info-money {
  width: 26px;
  height: 26px;
}

.right-info-tmk {
  padding-left: 6px;
}

.right-info-buy {
  width: 121px;
  height: 60px;
  margin-left: -8px;
  background: url(../assect/contentTwo/btn-yellow.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 60px;
  color: #222;

}

@media (max-width: 1100px) {
  .stop {
    height: 100%;
  }

  .stop-container {
    width: 100%;
    padding-bottom: 113px;
  }

  .stop-one {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stop-one-top {
    width: 90%;
  }

  .stop-bottom {
    width: 90%;
    height: 942px;
  }

  .stop-bottom-info {
    width: 90%;
    margin-top: 60px;
  }


  .stop-bottom-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stop-bottom-infos {
    padding-top: 0;
  }

}


</style>
