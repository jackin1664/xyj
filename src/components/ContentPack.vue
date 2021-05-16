<template>
  <div class="pack">
    <div class="dig-line">
      <span><img src="../assect/content/laba.png" alt=""> NFT质押挖矿正式上线啦！</span>
    </div>
    <div class="pack-container">
      <!--              上部分-->
      <div class="pack-one-top">
        <img src="../assect/pack/text.png"/>
      </div>
      <!--          下部分-->
      <div class="pack-bottom">
        <!--              上部分-->
        <div class="pack-select">
          <div class="pack-select-left">
            <div class="select-info">
              <div @click="showType=!showType" class="select-info-top">
                <div class="select-top-title">{{ type }}</div>
                <img src="../assect/pack/arrow-bottom.png"/>
              </div>
              <img class="tab-line" src="../assect/pack/line.png"/>
              <div v-show="showType" class="select-tab">
                <div v-for="(item,index) in tabType" class="tab-info" :key="index" @click="actionType(item)">
                  <span>{{ item.name }}</span>
                  <!--                    <img class="tab-line" src="../assect/pack/line.png"/>-->
                </div>
              </div>
            </div>
          </div>
          <!--          <img class="compos-icon" src="../assect/pack/composite-icon.png"/>-->
        </div>
        <!--            下半部分-->
        <div v-if="selectType==1" class="pack-bottom-info">
          <div v-for="item in cards" :key="item.tokenId" class="bottom-info">
            <div class="middle-info-card">
              <img :src="item.img" class="middle-info-moncard"/>
              <img :src="item.bgimg" class="middle-info-border"/>
            </div>
            <div class="bottom-info-right">
              <span>角色：{{ item.name }} <a @click="makeGive(item.tokenId)" class="unInstall" >赠送</a></span>
              <span>编号：{{ item.tokenId }}</span>
              <span>战斗力：{{ item.power }}</span>
              <span>合成战斗力：{{ item.extPower }}</span>
              <span>阵营：{{ item.camp }}</span>
              <span>武器战斗力：{{ item.weaponPower }}</span>
              <span>武器：{{item.weaponName}}  <a @click="doUnInstall(item.tokenId)" class="unInstall" v-if="item.weaponPower" >卸载</a></span>
            </div>
          </div>
        </div>
        <div v-else class="pack-bottom-info">
          <div v-for="item in weapons" :key="item.weapon" class="bottom-info">
            <div class="middle-info-card">
                            <img :src="item.img" class="middle-info-moncard"/>
              <img src="../assect/stop/boder.png" class="middle-info-border"/>
            </div>
            <div class="bottom-info-right">
              <span>名称：{{ item.name }} <a @click="makeGiveWeapon(item.weapon)" class="unInstall" >赠送</a></span>
              <span>战斗力：{{ item.weaponPower }}</span>
              <div @click="actionInstall(item.weapon)" class="right-info-buy">挂载</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--        弹窗-->
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
              <div @click="doInstall" class="yellow-btn">挂载</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showGive" class="wrap-bg">
      <div @click="closeGive" class="wrap-close">
        <img src="../assect/pack/toast-close.png" alt="">
      </div>
      <div class="wrap-title">卡牌赠送</div>
      <div>赠送地址：<input v-model="giveAddress" class="right-info-num"/></div>
      <div @click="doGive"  class="right-info-buy" style="margin: 0 auto">赠送</div>
    </div>
    <div v-if="showGiveWeapon" class="wrap-bg">
      <div @click="closeGiveWeapon" class="wrap-close">
        <img src="../assect/pack/toast-close.png" alt="">
      </div>
      <div class="wrap-title">武器赠送</div>
      <div>赠送地址：<input v-model="giveWeaponAddress" class="right-info-num"/></div>
      <div @click="doGiveWeapon"  class="right-info-buy" style="margin: 0 auto">赠送</div>
    </div>
  </div>
</template>

<script>
import '../css/base.less'
import config from "@/config/base";
const marketAbi = require('@/config/marketABI.json');
const NFTAbi = require('@/config/nftABI.json');

export default {
  name: "ContentPack",
  data() {
    return {
      showGiveWeapon:false,
      giveWeaponAddress:'',
      giveWeaponId:0,
      giveId:0,
      giveAddress:'',
      showGive: false,
      showPledge:false,
      showType: false,//类型显隐
      selectType: 1,
      type: '卡片',
      tab: [
        {
          name: '战斗力',
        },
        {
          name: '购买时间',
        }
      ],
      tabType: [
        {
          name: '武器',
          type: 2
        },
        {
          name: '卡片',
          type: 1
        }
      ],
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
      },
      bgimgs: {
        "1": require('../assect/pack/green-border.png'),
        "2": require('../assect/pack/blue-border.png'),
        "3": require('../assect/pack/yellow-border.png'),
      },
      cards: [],
      weapons: [],
      selectCard : 0,
      selectShopID:0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async makeGive(id){
      this.giveId = id
      this.showGive = true
    },
    async makeGiveWeapon(id){
      this.giveWeaponId = id
      this.showGiveWeapon = true
    },
    closeGive(){
      this.showGive = false
    },
    closeGiveWeapon(){
      this.showGiveWeapon = false
    },
    async selectCardID(tokenID) {
      this.selectCard = tokenID
    },
    closeDialogWeapon() {
      this.showPledge = false
    },
    async actionInstall(num) {
      this.selectShopID = num;
      this.showPledge = true;
    },
    async doInstall(){
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.market
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      const saleData = contract.methods.installWeaponToNFT(this.selectCard,this.selectShopID).encodeABI();
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
      v.$toast('挂载成功')
      this.getMyWeapons()
      this.showPledge = false
    },
    async doUnInstall(tokenId){
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.market
      let contract = new v.myWeb3.eth.Contract(marketAbi, config.market)
      const saleData = contract.methods.unInstalWeaponToNFT(tokenId).encodeABI();
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
      this.$toast('卸载成功')
      this.getMyWeapons()
      this.showPledge = false
    },
    //tab类型
    actionType(item) {
      this.type = item.name
      this.selectType = item.type
      this.showType = false
      if (this.selectType == 1) {
        this.getMyCards()
      } else {
        this.getMyWeapons()
      }

    },
    async getMyWeapons() {
      let v = this
      var local_address = await v.action.getAddress()
      let weapons = await this.$http.getMyWeapon({address: local_address})
      weapons = weapons.data.data.weapon
      for (let it of weapons) {
        let weapon = config.weapon.find(a => a.type == it.weapon)
        it.name = weapon.name
        it.img = this.weaponimgs[weapon.type.toString()]
      }
      this.weapons = weapons
      console.log('weapons', weapons)
    },
    async getMyCards() {
      let v = this
      var local_address = await v.action.getAddress()
      let cards = await this.$http.getyMyCard({address: local_address})
      cards = cards.data.data.card
      for (let it of cards) {
        it.img = this.imgs[it.thirdId.toString()]
        it.name = config.cards.find(a => a.type == it.thirdId).name
        it.camp = config.cards.find(a => a.type == it.thirdId).camp
        it.bgimg = this.bgimgs[it.team.toString()]
        let weapon = config.weapon.find(a => a.type == it.weapon)
        if (weapon) {
          it.weaponName = weapon.name
        } else {
          it.weaponName = ''
        }

      }
      this.cards = cards
      console.log('my weapons result', cards)
    },
    async doGive(){
      if(!this.giveId || !this.giveAddress){
        this.$toast('数据错误')
        return false
      }
      let v = this
      let token_address = config.nft
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTAbi, token_address)
      const approveData = contract.methods.transferFrom(local_address, this.giveAddress,this.giveId).encodeABI();
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
            v.$toast('交易已发出，等待结果。。。')
            v.showGive = false
            //server order
          }).on('receipt', function (receipt) {
            //receipt
            console.log(receipt)
          }).on('error', function (receipt) {
            //receipt
            console.log(receipt)
          })
      this.$toast('赠送成功')
      this.getData()
    },
    async doGiveWeapon(){
      alert(this.giveWeaponId)
      if(!this.giveWeaponId || !this.giveWeaponAddress){
        this.$toast('数据错误')
        return false
      }
      let v = this
      let token_address = config.nft
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTAbi, token_address)
      const approveData = contract.methods.tranferWeapoon(local_address, this.giveWeaponId,1).encodeABI();
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
            v.$toast('交易已发出，等待结果。。。')
            v.showGiveWeapon = false
            //server order
          }).on('receipt', function (receipt) {
            //receipt
            console.log(receipt)
          }).on('error', function (receipt) {
            //receipt
            console.log(receipt)
          })
      this.$toast('赠送成功')
      this.getData()
    },
    async getData() {
      this.getMyCards()
    }
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
.middle-info-right{
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
    .middle-info-right {
      width: 30px;
      height: 30px;
    }

  }
}


</style>


<style scoped lang="less">

.dialog-sure {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialog-btns {
  margin-top: 10px;
}

.dialog-address {
  width: 80%;
  height: 42px;
  background: url("../assect/dialog/addres.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFD477;
  margin-bottom: 15px;
}

.pack {
  position: relative;
  width: 100%;
  min-height: 600px;
  padding-bottom: 100px;
  background-image: url('../assect/content/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.pack-container {
  padding-top: 40px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

//上半部分
.pack-one-top {
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
    width: 134px;
    height: 55px;
  }
}

//下部分

.pack-bottom {
  width: 988px;
  //height: 652px;
  background: url("../assect/pack/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
}


.pack-select {
  position: relative;
  z-index: 100;
  margin-top: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}

.pack-select-left {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.select-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.select-infos {
  margin-left: 35px;
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
  width: 100px;
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

//下半部分
.pack-bottom-info {
  margin-top: -15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
}

.bottom-info {
  width: 45%;
  cursor: pointer;
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  //height: 45%;
  img {
    width: 154px;
    height: 233px;
  }
}

.bottom-infos {
  //margin-left: 170px;
}

.bottom-infoss {
  //margin-left: 195px;
}

.bottom-info-right {
  display: flex;
  height: 238px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 20px;

  span {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
    //padding-top: 27px;
  }
}

@media (max-width: 1100px) {
  .pack-container {
    width: 100%;
  }
}

@media (max-width: 960px) {

  .select-top-title {
    font-size: 12px;
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

  .pack {
    padding-bottom: 50px;
    //height: 1223px;
  }

  .pack-one-top {
    width: 80%;
  }

  .pack-bottom {
    width: 80%;
    //height: 983px;
  }

  .tab-line {
    width: 80px;
  }

  .compos-icon {
    width: 70px;
    height: 35px;
  }

  .pack-bottom-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
  }

  .bottom-info-right {
    height: 190px;

    span {
      font-size: 12px;
    }
  }

  .bottom-info {
    //height: 25%;
    width: 100%;
  }

  .bottom-infos {
    margin-left: 0;
  }

  .bottom-infoss {
    margin-left: 0;
  }

  .bottom-info {
    img {
      width: 123px;
      height: 185px;
    }
  }
}

.right-info-buy {
  cursor: pointer;
  width: 121px;
  height: 60px;
  margin-left: -8px;
  background: url(../assect/contentTwo/btn-yellow.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 60px;
  color: #222;

}
.unInstall{
  color: #FFD477;
}

.wrap-close{
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -10px;

}
.wrap-bg {
  font-size: 16px;
  position: fixed;
  left: 50%;
  top: 50%;
  background: url(../assect/pack/toast-bg.png);
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
.right-info-num {
  width: 260px;
  height: 28px;
  line-height: 28px;
  background: url("../assect/stop/bg-box.png") no-repeat;
  background-size: 100% 100%;
  color: #FFD477;
  text-align: left;
  margin-left: 5px;
  padding-left: 4px;
}

</style>
