<template>
  <div class="stop">
    <div class="dig-line">
      <span><img src="../assect/content/laba.png" alt=""> NFT开始预售啦！</span>
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
                <img src="../assect/stop/tao.png" class="middle-info-moncard"/>
                <img src="../assect/stop/boder.png" class="middle-info-border"/>
              </div>
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[1]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[1][0] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[0][0] }}MC</div>
                </div>
                <div class="right-info">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(1)" class="right-info-buy">购买</div>
                </div>
              </div>

            </div>
            <div class="stop-bottom-info">
              <div class="middle-info-card">
                <img src="../assect/stop/dan.png" class="middle-info-moncard"/>
                <img src="../assect/stop/boder.png" class="middle-info-border"/>
              </div>
              <!--                      <div class="stop-bottom-box">蟠桃</div>-->
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[2]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[1][1] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[0][1] }}MC</div>
                </div>
                <div class="right-info">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(2)" class="right-info-buy">购买</div>
                </div>
              </div>

            </div>
            <div class="stop-bottom-info">
              <div class="middle-info-card">
                <img src="../assect/stop/ma.png" class="middle-info-moncard"/>
                <img src="../assect/stop/boder.png" class="middle-info-border"/>
              </div>
              <!--                      <div class="stop-bottom-box">蟠桃</div>-->
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <input v-model="amount[3]" class="right-info-num"/>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">提升比例：{{ info[1][2] }}%</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ info[0][2] }}MC</div>
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
              <div class="middle-info-card">
                <img :src="item.img" class="middle-info-moncard"/>
                <img src="../assect/stop/boder.png" class="middle-info-border"/>
              </div>
              <div class="stop-right-info">
                <div class="right-info">
                  <span class="right-info-title">{{item.name}}</span>
                </div>
                <div class="right-info">
                  <span class="right-info-title">数量</span>
                  <div class="right-info-num">1</div>
                </div>
                <div class="right-info">
                  <span class="right-info-neng">能力值：{{ item.power }}</span>
                </div>
                <div class="right-info">
                  <img class="right-info-money" src="../assect/stop/money.png"/>
                  <div class="right-info-tmk">{{ item.price }}MC</div>
                </div>
                <div class="right-info">
                  <div v-if="item.sale == 0 && !husdApproved" @click="actionHUSDApprove" class="right-info-buy">授权</div>
                  <div v-if=" item.sale == 0 && husdApproved" @click="actionBuyWeapon(item.type)"
                       class="right-info-buy">购买
                  </div>
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
            <div class="right-info-tmk">100MC</div>
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
    <div v-show="showPledge" class="dialog">
      <div class="ple">
        <div class="ple-container">
          <!--              上部分-->
          <div class="ple-one-top">
            <img src="../assect/pack/text.png"/>
            <div @click="closeDialogWeapon" class="ple-error"></div>
          </div>
          <!--          内容-->
          <div class="ple-bottom">
            <!--            下部分-->
            <div class="ple-green">
              <div v-for="item in cards" :key="item.tokenId" class="ple-green-content">
                <div v-if="item.tokenId != selectCard" @click="selectCardID(item.tokenId)" class="middle-info-card">
                  <img :src="item.img" class="middle-info-moncard"/>
                  <img src="../assect/content/border-green.png" class="middle-info-border"/>
                </div>
                <div v-else class="middle-info-card" @click="selectCardID(item.tokenId)">
                  <img :src="item.img" class="middle-info-moncard middle-info-moncards"/>
                  <img src="../assect/content/border-green.png" class="middle-info-border middle-info-borders"/>
                  <img src="../assect/pack/right.png" class="middle-info-right"/>
                </div>
              </div>
            </div>
            <div class="ple-btn">
              <div @click="doBuy" class="yellow-btn">购买</div>
            </div>
          </div>
        </div>
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
      showPledge: false,
      Config: config,
      husdApproved: false,
      approveHash: '',
      approveHUSDHash: '',
      detail: false,
      info: [[], []],
      amount: [0, 1, 1, 1],
      weapon: [],
      cards: [],
      selectCard: 0,
      selectShopID: 0,
      imgs: {
        "1": require('../assect/cards/1.png'),
        "2": require('../assect/cards/2.png'),
        "3": require('../assect/cards/3.png'),
        "4": require('../assect/cards/4.png'),
        "5": require('../assect/cards/5.png'),
        "6": require('../assect/cards/6.png'),
        "7": require('../assect/cards/7.png'),
        "8": require('../assect/cards/8.png'),
        "9": require('../assect/cards/9.png'),
        "10": require('../assect/cards/10.png'),
        "11": require('../assect/cards/11.png'),
        "12": require('../assect/cards/12.png'),
        "13": require('../assect/cards/13.png'),
        "14": require('../assect/cards/14.png'),
        "15": require('../assect/cards/15.png'),
        "16": require('../assect/cards/16.png'),
        "17": require('../assect/cards/17.png'),
        "18": require('../assect/cards/18.png'),
        "19": require('../assect/cards/19.png'),
        "20": require('../assect/cards/20.png'),
        "21": require('../assect/cards/21.png'),
        "22": require('../assect/cards/22.png'),
        "23": require('../assect/cards/23.png'),
        "24": require('../assect/cards/24.png'),
        "25": require('../assect/cards/25.png'),
        "26": require('../assect/cards/26.png'),
        "27": require('../assect/cards/27.png'),
        "28": require('../assect/cards/28.png'),
        "29": require('../assect/cards/29.png'),
        "30": require('../assect/cards/30.png'),
        "31": require('../assect/cards/31.png'),
        "32": require('../assect/cards/32.png'),
        "33": require('../assect/cards/33.png'),
        "34": require('../assect/cards/34.png'),
        "35": require('../assect/cards/35.png'),
        "36": require('../assect/cards/36.png'),
        "5036": require('../assect/cards/5036.png'),
        "10036": require('../assect/cards/10036.png'),
      },
      weaponimgs: {
        "1": require('../assect/weapon/1.png'),
        "2": require('../assect/weapon/2.png'),
        "3": require('../assect/weapon/3.png'),
        "4": require('../assect/weapon/4.png'),
        "5": require('../assect/weapon/5.png'),
        "6": require('../assect/weapon/6.png'),
        "7": require('../assect/weapon/7.png'),
        "8": require('../assect/weapon/8.png'),
        "9": require('../assect/weapon/9.png'),
        "10": require('../assect/weapon/10.png'),
        "11": require('../assect/weapon/11.png'),
        "12": require('../assect/weapon/12.png'),
        "13": require('../assect/weapon/13.png'),
        "14": require('../assect/weapon/14.png'),
        "15": require('../assect/weapon/15.png'),
        "16": require('../assect/weapon/16.png'),
        "17": require('../assect/weapon/17.png')
      }
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    account_default_address() {
      return this.$store.state.account.default_address
    },
  },
  watch: {
    //检测到获取了地址
    account_default_address() {
      this.getData()
    }
  },
  methods: {
    async selectCardID(tokenID) {
      this.selectCard = tokenID
    },
    closeDialogWeapon() {
      this.showPledge = false
    },
    //关闭弹窗
    closeDialog() {
      this.detail = false
    },
    async getMyCard() {
      let v = this
      var local_address = await v.action.getAddress()
      let cards = await this.$http.getyMyCard({address: local_address})
      cards = cards.data.data.card
      console.log(`cards`,cards)
      for (let it of cards) {
        it.img = this.imgs[it.thirdId.toString()]
        it.name = config.cards.find(a => a.type == it.thirdId).name
      }
      this.cards = cards
      console.log('my weapons result', cards)
    },
    async doBuy() {
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.market
      let amount = this.amount[this.selectShopID]
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      const saleData = contract.methods.buyTreasure(this.selectCard, this.selectShopID, amount).encodeABI();
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
      this.showPledge = false
      v.$toast('购买成功')
      this.getData()
    },
    async actionBuy(num) {
      let amount = this.amount[num]
      if (amount == 0) {
        this.$toast('请输入购买数量')
        return false
      }
      this.selectShopID = num;
      this.showPledge = true;
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
      this.$toast('购买成功')
      this.getData()
    },
    async getMarket() {
      let v = this
      //approve
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      console.log(`start get market`,config.market)
      let info = await contract.methods.getPriceCoefficientInfo().call();
      console.log(`end get market`)
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
      let weapon = config.weapon
      for (let i of weapon) {
        i.power = info[0][i.type - 1]
        i.price = new Decimal(info[1][i.type - 1]).div(Math.pow(10, 18)).toFixed()
        i.sale = info[2][i.type - 1]
        i.img = this.weaponimgs[i.type.toString()]
      }

      this.weapon = weapon
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
      this.$toast('授权成功')
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
      this.getMyCard()
    },
  }
}
</script>
<style scoped lang="less">
.ple {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  margin-top: 100px;

}

.ple-container {
  padding-top: 40px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

//上半部分
.ple-one-top {
  width: 987px;
  height: 64px;
  background: url("../assect/contentDig/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  img {
    margin-top: -20px;
    width: 134px;
    height: 55px;
  }
}

.ple-error {
  cursor: pointer;
  width: 32px;
  height: 33px;
  background: url("../assect/dialog/error.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  top: -10px;
}

.ple-bottom {
  width: 988px;
  background: url("../assect/pack/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 47px;
}

.ple-select {
  margin-top: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  position: relative;
  z-index: 99;
}

.ple-select-left {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
}

.select-info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-infos {
  margin-left: 35px;
}

.select-infoss {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.compos-icon {
  width: 121px;
  height: 60px;
  cursor: pointer;
}

.select-info-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    width: 12px;
    height: 8px;
    margin-left: 30px;
  }
}

.select-top-title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFD477;
}

.tab-line {
  margin-top: 7px;
  width: 119px;
  height: 3px;
}

.select-tab {
  position: absolute;
  top: 35px;
}

.tab-info {
  position: relative;
  width: 119px;
  height: 58px;
  //line-height: 58;
  background: #212121;
  opacity: 0.7;
  text-align: center;

  span {
    cursor: pointer;
    line-height: 58px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFD477;
  }
}

.ple-brown {
  margin-top: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 154px;
    height: 233px;
  }
}

.ple-brown-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 19px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;

  span {
    padding-top: 21px;
  }

  span:nth-child(1) {
    padding-top: 0;
  }
}


//下选择


.ple-add {
  padding-top: 40px;

  img {
    cursor: pointer;
    width: 69px;
    height: 65px;
  }
}

.ple-green {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  max-height: 400px;
  overflow-y: auto;
}

.green-info {
  width: 154px;
  height: 233px;
  background: url("../assect/pack/green-border.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}

.green-infos {
  cursor: pointer;
  width: 154px;
  height: 233px;
  background: url("../assect/pack/green-border-op.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 57px;
  }
}

.ple-green-text {
  padding-top: 46px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

.ple-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  img {
    cursor: pointer;
    width: 121px;
    height: 60px;
  }

  span {
    width: 25px;
    height: 6px;
    //color: ;
    border-bottom: 2px solid rgba(227, 204, 110, 1);
    transform: rotate(120deg);
  }
}


//弹窗
.middle-info-right {
  width: 60px;
  height: 57px;
  position: absolute;
  left: 30%;
  top: 40%;
  z-index: 100;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .ple-container {
    width: 100%;
  }

  @media (max-width: 960px) {
    //弹窗
    .dialog {
      //margin-top: 81px;
      padding-top: 50px;
    }

    .middle-info-right {
      width: 30px;
      height: 30px;
    }


    .ple {
      overflow: scroll;
      padding-bottom: 100px;
      margin-top: 50px;
    }

    .select-top-title {
      font-size: 12px;
    }

    .select-info-top {
      img {
        margin-left: 10px;
      }
    }

    .tab-info {
      height: 50px;

      span {
        font-size: 12px;
      }
    }

    .select-infos {
      margin-left: 10px;
    }

    .ple-one-top {
      width: 80%;
    }

    .ple-brown {
      img {
        width: 123px;
        height: 185px;
      }
    }

    .ple-bottom {
      width: 80%;
      height: 700px;
    }

    .tab-line {
      width: 70px;
    }

    .ple-green {
      flex-wrap: wrap;
      margin-top: 20px;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .ple-green-content {
      width: 50%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .green-info {
      margin-top: 45px;
      width: 123px;
      height: 185px;
    }

    .green-infos {
      margin-top: 45px;
      width: 123px;
      height: 185px;
    }

  }
}


</style>
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
  width: 90%;
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
    //height: 942px;
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
