<template>
  <div class="rec">
    <div class="dig-line">
      <span>NFT质押挖矿正式上线啦！</span>
    </div>
    <!--          内容-->
    <div class="rec-container">
      <div class="rec-title">收获/提现</div>
      <div class="rec-info">
        <div class="info-content">
          <div class="info-round">logo</div>
          <div class="info-title">{{token_data.token_earn}} Inocme</div>
          <div class="info-num">{{myReward}}</div>
        </div>
        <div class="info-content info-contents">
          <div class="info-logo">
            <div class="info-round">logo</div>
            <div class="info-round info-round-two">logo</div>
          </div>
          <div class="info-title">{{token_data.token_symbol}} Stake</div>
          <div class="info-num">{{myStaking}}</div>
        </div>
      </div>
      <div class="rec-btn">
        <img  @click="actionDeposit" src="../assect/receipt/withdraw.png"/>
        <img v-if="!husdApproved" @click="actionHUSDApprove" src="../assect/receipt/approve.png"/>
        <img @click="actionGetReward" src="../assect/receipt/withdraw-all.png"/>
        <img @click="actionWithdraw" src="../assect/receipt/haverst.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/base.less'
import config from "@/config/base";
const tokenAbi = require('@/config/token_abi.json');
const LPAbi = require('@/config/lpStakingRewardABI.json');
const  Decimal = require('decimal.js')
export default {
  name: "ContentReceipt",
  data() {
    return{
      husdApproved: false,
      approveHUSDHash: '',
      myStaking:0,
      myReward:0
    }
  },
  computed: {
    token_data() {
      let v = this
      let temp = null
      for (let item of config.farms_list) {
        if (item.id.toLowerCase() === v.$route.params.id.toLowerCase()) {
          temp = item
        }
      }
      return JSON.parse(JSON.stringify(temp))
    },
  },
  methods: {
    async actionHUSDApprove() {
      let v = this
      let reward_address = v.token_data.reward_address
      let token_address = v.token_data.token_address
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
      let token_address = v.token_data.token_address
      let reward_address = v.token_data.reward_address
      let contract = new v.myWeb3.eth.Contract(tokenAbi, token_address)
      contract.methods.allowance(local_address, reward_address).call(function (error, result) {
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
    //质押
    async actionDeposit(){
      let v = this
      let reward_address = v.token_data.reward_address
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      let num = new Decimal(10).mul(Math.pow(10,18)).toFixed()
      const approveData = contract.methods.deposit(v.token_data.index, num).encodeABI();
      console.log('approvedata', approveData)
      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: reward_address,
        value: 0,
        data: approveData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
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
    //提取收益
    async actionGetReward(){
      let v = this
      let reward_address = v.token_data.reward_address
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      const approveData = contract.methods.deposit(v.token_data.index, 0).encodeABI();
      console.log('approvedata', approveData)
      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: reward_address,
        value: 0,
        data: approveData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
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
    //提取本金
    async actionWithdraw(){
      let v = this
      let reward_address = v.token_data.reward_address
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      let num = 10
      let amount = new Decimal(num).mul(Math.pow(10,18)).toFixed()
      const approveData = contract.methods.withdraw(v.token_data.index, amount).encodeABI();
      console.log('approvedata', approveData)
      await v.myWeb3.eth.sendTransaction({
        from: local_address,
        to: reward_address,
        value: 0,
        data: approveData
      })
          .on('transactionHash', function (hash) {
            //hash
            console.log(`hash: ` + hash)
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
    async getMyStake(){
      let v = this
      let reward_address = v.token_data.reward_address
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      const amount = await contract.methods.userInfo(v.token_data.index, local_address).call();
      console.log(`myuserinfo`, amount)
      this.myStaking = new Decimal( amount['amount']).div(Math.pow(10,18)).toFixed()
    },
    async getMyReward(){
      let v = this
      let reward_address = v.token_data.reward_address
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      const amount = await contract.methods.pendingSushi(v.token_data.index, local_address).call();
      console.log(`myuserinfo`, amount)
      this.myReward = new Decimal( amount).div(Math.pow(10,18)).toFixed()

    },
    async getData() {
      this.checkHUSDApproved()
      this.getMyReward()
      this.getMyStake()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="less">

.rec {
  position: relative;
  width: 100%;
  height: 721px;
  background-image: url('../assect/content/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.rec-container {
  padding-top: 40px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rec-title {
  width: 100%;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
  line-height: 25px;
}

.rec-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
}

.info-content {
  width: 482px;
  height: 307px;
  background: url("../assect/receipt/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.info-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
}

.info-round {
  width: 98px;
  height: 98px;
  background: #2C2C2C;
  border: 1px solid #E7E0D0;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-round-two {
  position: absolute;
  left: 230px;
}

.info-title {
  padding-top: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
}

.info-num {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFD477;
}

.rec-btn {
  padding-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    margin-top: 18px;
    width: 226px;
    height: 45px;
  }
}

@media (max-width: 1000px) {
  .rec {
    height: 1000px;
  }

  .rec-container {
    width: 100%;
  }

  .rec-title {
    width: 90%;
  }

  .rec-info {
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .info-content {
    width: 90%;
  }

  .info-contents {
    margin-top: 30px;
  }

  .info-round-two {
    left: 50%;
  }

  .rec-btn {
    width: 80%;

    img {
      width: 158px;
      height: 31px;
    }
  }

}


</style>
