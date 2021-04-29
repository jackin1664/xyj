<template>
  <div class="content">
    <div class="dig-line">
      <span>NFT质押挖矿正式上线啦！</span>
    </div>
    <div class="content-container">

      <!--            第一部分-->
      <div class="content-top">
        <div class="middle-top">
          <div class="middle-top-icon content-top-icon"></div>
          <div class="middle-top-text content-top-text"></div>
          <div class="content-top-card">
            <span class="content-top-num">总卡牌数量：15035</span>
            <span class="content-top-num">剩余数量：{{nftAreadySale}}</span>
          </div>
        </div>
        <div class="middle-tops">
          <div class="content-top-cards">
            <span class="content-top-num">总卡牌数量：15035</span>
            <span class="content-top-num">剩余数量：{{nftAreadySale}}</span>
          </div>
        </div>
        <!--              内容-->
        <div class="content-top-info">
          <!--                  左边-->
          <div class="top-info-left">
            <div class="top-info-box">
              <img src="../assect/contentTwo/box.png"/>
            </div>
            <div class="top-info-button">
              <div class="top-info-usdt">
                <div class="top-info-money">
                  <img src="../assect/contentTwo/money.png"/>
                  <span>500USDT</span>
                </div>
                <div class="top-info-iconbtn">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="btn-yellow">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(10)" class="btn-yellow">抽10次</div>
                </div>
              </div>
              <div class="top-info-usdt">
                <div class="top-info-money">
                  <img src="../assect/contentTwo/money.png"/>
                  <span>50USDT</span>
                </div>
                <div class="top-info-iconbtn">
                  <div v-if="!husdApproved" @click="actionHUSDApprove" class="btn-grey">授权</div>
                  <div v-if="husdApproved" @click="actionBuy(1)" class="btn-grey">抽1次</div>
                </div>
              </div>
            </div>
          </div>
          <!--                中间-->
          <div @click="goPack()" class="top-info-middle">
            <span class="info-middle-title">我的卡牌</span>
            <span class="info-middle-num">{{myNFTCount}}</span>
          </div>
          <!--                右边-->
          <div class="top-info-right">
            <div class="top-info-right-icon">
              <img src="../assect/contentTwo/change.png"/>
              <span>交易记录</span>
            </div>
            <div class="top-info-right-table">
              <table>
                <tr>
                  <th>用户</th>
                  <th>购买</th>
                  <th>数量</th>
                </tr>
                <tr v-for="(item,index) in getCards" :key="index">
                  <td>{{item.address}}</td>
                  <td>购买</td>
                  <td>{{item.amount}} 张</td>
                </tr>
              </table>
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
const saleNFTAbi = require('@/config/saleNFTABI.json');
const NFTAbi = require('@/config/nftABI.json');
const Decimal = require('decimal.js');
export default {
  name: "ContentTwo",
  data() {
    return {
      husdApproved: false,
      approveHUSDHash: '',
      inviteAddress: '0x0000000000000000000000000000000000000001',
      myNFTCount:0,
      nftAreadySale:0,
      getCards:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getNFTSaleAmount(){
      let v = this
      //approve
      let contract = new v.myWeb3.eth.Contract(saleNFTAbi, config.sale)
      let count = await contract.methods.nftAreadySale().call();

      this.nftAreadySale = new Decimal(15035).sub(count).toFixed()
    },
    async getMyNFT(){
      let v = this
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTAbi, config.nft)
      let count = await contract.methods.balanceOf(local_address).call();
      this.myNFTCount = count
    },
    async actionBuy(num){
      let v = this
      let reward_address = config.sale
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(saleNFTAbi, reward_address)
      let inviteAddress = window.localStorage.getItem(`inviteID`)
      if(inviteAddress && inviteAddress.toLowerCase() != local_address.toLowerCase()){
        this.inviteAddress = inviteAddress
      }
      const saleData = contract.methods.buyGftUseUSDT_user(num, this.inviteAddress).encodeABI();
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
    async actionHUSDApprove() {
      let v = this
      let reward_address = config.sale
      let token_address = config.usdt
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
      let contract = new v.myWeb3.eth.Contract(tokenAbi, config.usdt)
      contract.methods.allowance(local_address, config.sale).call(function (error, result) {
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
    async getyMyCard(){
      let result = await this.$http.getBuyList();
      let getCards = result.data.data.list
      for(let it of getCards){
          it.address =  this.action.sortAddress(it.address)
      }
      this.getCards = getCards
      console.log(`getcards`,getCards)
    },

    goPack() {
      this.$router.push('pack')
    },
    async getData() {
      this.checkHUSDApproved()
      this.getMyNFT()
      this.getNFTSaleAmount()
      this.getyMyCard()
    }
  }
}
</script>

<style scoped lang="less">

.content {
  position: relative;
  //top: -150px;
  width: 100%;
  //height: 100%;
  padding-bottom: 100px;
  background-image: url('../assect/content/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.content-container {
  padding-top: 10px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


//第一部分

.content-top {
  padding-top: 58px;
}

.content-top-icon {
  //position: absolute;
  //top: -90px;
  //left: -50px;
  width: 131px !important;
  height: 125px !important;
  background: url('../assect/contentTwo/top-icon.png') no-repeat !important;
  background-size: 100% 100% !important;
}


.content-top-text {
  position: absolute !important;
  top: -20px !important;
  left: 60px !important;
  width: 126px !important;
  height: 61px !important;
  background: url('../assect/contentTwo/top-text.png') no-repeat !important;
  background-size: 100% 100% !important;
}

.content-top-card {
  position: absolute;
  bottom: 20px;
  right: 44px;
}

.content-top-num {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
  padding-left: 40px;
}

.content-top-info {
  width: 100%;
  //height: 64px;
  background: url('../assect/contentTwo/bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

}

.top-info-box {
  padding-left: 40px;

  img {
    width: 305px;
    height: 182px;
  }
}

.top-info-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 53px;
  width: 80%;
  justify-content: space-between;
}

.top-info-usdt {

}

.top-info-money {
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 26px;
    height: 26px;
  }

  span {
    padding-left: 6px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
  }
}

.top-info-iconbtn {
  cursor: pointer;
  padding-top: 6px;

  img {
    width: 102px;
    height: 52px;
  }
}

//上中
.top-info-middle {
  cursor: pointer;
  margin-left: 41px;
  width: 178px;
  height: 273px;
  background: url("../assect/contentTwo/card.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-middle-title {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
}

.info-middle-num {
  font-size: 48px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

//上右
.top-info-right {
  padding-left: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  padding-right: 42px;
}

.top-info-right-icon {
  img {
    width: 19px;
    height: 15px;
  }

  span {
    padding-left: 6px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
    line-height: 25px;
  }

}

.top-info-right-table {
  margin-top: 18px;
  width: 348px;
  height: 234px;
  background: url("../assect/contentTwo/table.png") no-repeat;
  background-size: 100% 100%;

  table {
    border-collapse: collapse;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
  }

  th {
    padding: 8px 30px;
  }

  td {
    text-align: center;
    //border: 1px solid #46494F;
    padding: 3px 20px;
  }

  td:nth-child(2) {
    padding-top: 2px;
  }

  td:nth-child(3) {
    padding-top: 5px;
  }
}


//中间部分

.content-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  padding-top: 145px;
  padding-bottom: 145px;
}

.middle-top {
  position: relative;
  width: 994px;
  height: 64px;
  background: url('../assect/content/bgs.png') no-repeat;
  background-size: 100% 100%;
}

.middle-tops {
  display: none;
  position: relative;
  width: 994px;
  height: 64px;
  background: url('../assect/content/bgs.png') no-repeat;
  background-size: 100% 100%;
}

.middle-top-icon {
  position: absolute;
  top: -90px;
  left: -50px;
  width: 186px;
  height: 177px;
  background: url('../assect/content/icon-rule.png') no-repeat;
  background-size: 100% 100%;
}

.middle-top-text {
  position: absolute;
  top: -10px;
  left: 130px;
  width: 119px;
  height: 60px;
  background: url('../assect/content/icon-rule-text.png') no-repeat;
  background-size: 100% 100%;
}

.middle-green {
  width: 994px;
  height: 700px;
  background: url('../assect/content/bg-one.png') no-repeat;
  background-size: 100% 100%;
}

.middle-bule {
  background: url('../assect/content/bg-two.png') no-repeat;
  background-size: 100% 100%;
}

.middle-yellow {
  background: url('../assect/content/bg-three.png') no-repeat;
  background-size: 100% 100%;
}

.middle-title {
  padding-left: 34px;
  padding-top: 34px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

.middle-content {
  padding-top: 23px;
  padding-left: 34px;
  padding-right: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.middle-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
}

.middle-info-card {
  position: relative;
}

.middle-info-moncard {
  width: 154px;
  height: 233px;
  position: absolute;
  left: 0;
  top: 0;
}

.middle-info-border {
  width: 154px;
  height: 233px;
}

.middle-info-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.info-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  padding-left: 20px;
  padding-top: 25px;
  width: 100%;
}

.info-right-name {
  padding-right: 3px;

  span {
    padding-left: 15px;
  }
}

.info-right-icon {
  width: 162px;
  height: 18px;
}


//结尾
.content-bottom {
  margin-top: 42px;
  width: 1061px;
  height: 366px;
  background: url("../assect/content/bg-four.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;
}

.bottom-btn {
  padding-top: 64px;
  cursor: pointer;
  width: 122px;
  height: 59px;
  padding-left: 30px;
}

@media (max-width: 1200px) {
  .content-container {
    width: 100%;
    //margin-top: 100px;
    padding-top: 20px;
  }
}


@media (max-width: 960px) {

  .content-top {
    width: 100%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-top-text {
    left: 90px !important
  }

  .content-top-card {
    display: none;
  }

  .middle-top {
    width: 85%;
  }

  .middle-top-icon {
    left: -10px;
  }

  .middle-top-text {
    left: 170px;
  }

  .middle-green {
    width: 85%;
    height: 830px;
    background: url("../assect/content/h-border-green.png") no-repeat;
    background-size: 100% 100%;
  }

  .middle-bule {
    width: 85%;
    height: 830px;
    background: url("../assect/content/h-border-bule.png") no-repeat;
    background-size: 100% 100%;
  }

  .middle-yellow {
    width: 85%;
    height: 830px;
    background: url("../assect/content/h-border-yellow.png") no-repeat;
    background-size: 100% 100%;
  }

  .middle-infos {
    margin-top: 30px;
  }

  .middle-content {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  //.middle-info {
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  margin-top: 30px;
  //}
  .middle-info-border {
    width: 78px;
    height: 116px;
  }

  .middle-info-moncard {
    width: 78px;
    height: 116px;
  }


  .info-right {
    padding-top: 10px;
  }

  .info-right-name {
    font-size: 14px;
  }

  .info-right-icon {
    width: 82px;
  }

  .content-bottom {
    width: 100%;
    height: 180px;
  }


  .bottom-btn {
    //padding-top: 30px;
    padding-left: 10px;
    width: 61px;
    height: 30px;
  }

  //
  .middle-tops {
    width: 90%;
    display: block;
  }

  .content-top-cards {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  .content-top-num {
    text-align: center;
    font-size: 12px;
    padding-left: 0;
    width: 90%;
  }

  .top-info-left {
    width: 100%;
  }

  .top-info-middle {
    margin-top: 40px;
    margin-left: 0;
    width: 178px;
    height: 273px !important;
  }

  .content-top-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 895px;
    padding-top: 0;
    padding-left: 0;
  }

  .top-info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding-top: 55px;

    img {
      width: 241px;
      height: 172px;
    }
  }

  .top-info-right {
    padding-top: 38px;
    width: 90%;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }

  .top-info-right-table {
    width: 313px;
    height: 211px;
  }

  .top-info-right-table {
    th {
      padding: 5px 30px;
    }

    td {
      width: 104px;
      padding: 0 6px;
      text-align: center;
      //margin: -1px 10px ;
    }

    td:nth-child(2) {
      padding: 2px 6px;

    }

    td:nth-child(3) {
      padding-top: 0;
      padding: 0 6px;
    }

  }


}

.btn-yellow {
  width: 102px;
  height: 52px;
  background: url(../assect/contentTwo/btn-yellow.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 52px;
  color: #222222;
}

.btn-grey {
  width: 102px;
  height: 52px;
  background: url(../assect/contentTwo/btn-grey.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 52px;
  color: #fff;
}

</style>
