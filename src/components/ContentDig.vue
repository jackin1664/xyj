<template>
  <div class="dig">
    <div class="dig-line">
      <span>NFT质押挖矿正式上线啦！</span>
    </div>
    <div class="dig-container">
      <!--              第一部分-->
      <div class="dig-one">
        <!--              上部分-->
        <div class="dig-one-top">
          <img src="../assect/contentDig/nft-dig.png"/>
        </div>
        <!--              下部分-->
        <div class="dig-one-bottom">
          <!--                左边-->
          <div class="one-bottom-left">
            <img class="crystal-img" src="../assect/contentDig/crystal.png"/>
            <span>矿池总质押卡牌数量：{{ totalStakingNFTAmount }}</span>
            <span>矿池总战力值：{{ totalStakingPower }}</span>
            <span>矿池合约地址：{{ rewardAddress }}</span>
            <img class="rule-icon" src="../assect/contentDig/rule.png"/>
          </div>
          <!--                右边-->
          <div class="one-bottom-right">
            <!--                  挖矿中-->
            <div class="one-right-top">
              <img src="../assect/contentDig/hammer-icon.png"/>
              <span>挖矿中</span>
            </div>
            <!--                  卡牌数量-->
            <div class="one-right-num">
              <span>质押卡牌数量：{{ myStakingNFTAmount }}</span>
              <span>质押战力值：{{ myStakingPower }}</span>
            </div>
            <!--                    每天产出-->
            <div class="one-right-bit">
              <img class="bit-icon" src="../assect/contentDig/B-icon.png"/>
              <div class="bit-right-num">
                <div class="right-num">
                  <div class="num-title">矿池每天产出</div>
                  <div class="num-text">{{ perDayReward }}TMK</div>
                </div>
                <div class="right-num right-num-s">
                  <div class="num-title">可提取的奖励</div>
                  <div class="num-text">{{ myReward }}TMK</div>
                </div>
                <div class="right-num right-num-ss">
                  <div class="num-title">APY</div>
                  <div class="num-text">2218%</div>
                </div>
              </div>
              <!--                      按钮-->
              <div class="bit-right-btn">
                <div @click="openDialog" class="yellow2-btn">质押</div>
                <div @click="actionGetReward" class="yellow2-btn">提取奖励</div>
                <div @click="actionWithdraw" class="yellow2-btn">取消质押</div>
                <!--                        <img @click="actionHUSDApprove" src="../assect/contentDig/approve.png"/>-->
                <!--                        <img @click="actionDeposit" src="../assect/contentDig/haverst.png"/>-->
                <!--                        <img @click="actionGetReward" src="../assect/contentDig/withdraw.png"/>-->
                <!--                        <img @click="actionWithdraw" src="../assect/contentDig/exit.png"/>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--            锁定奖励-->
      <div class="dig-middle">
        <!--              上部分-->
        <div class="dig-one-top">
          <img class="honer-text" src="../assect/contentDig/honer-text.png"/>
        </div>

        <div class="dig-middle-content">
          <div class="middle-content-info">
            <div class="mid-info-title">奖励锁定数量</div>
            <div class="mid-info-num">{{lockReward}}TMK</div>
          </div>
          <div class="middle-content-info">
            <div class="mid-info-title">我的奖励数量</div>
            <div class="mid-info-num">{{lockMyReward}}TMK</div>
            <div @click="actionWithdrawMyLockReward" class="yellow2-btn mid-btn">领取</div>
          </div>
        </div>
      </div>


      <!--                 第二部分-->
      <div class="dig-two">
        <!--              上部分-->
        <div class="dig-one-top dig-two-top">
          <img src="../assect/contentDig/bg-text.png"/>
        </div>
        <!--              中间-->
        <!--              下部分-->
        <div class="pc-view">
          <div class="two-bottom">
            <div class="two-bottom-info">
              <div class="two-info-title">LP</div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-title">日产出</div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-title">月产出</div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-title">锁仓总量</div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-title">年化</div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-title">奖励</div>
            </div>
          </div>
          <div v-for="item in lists" :key="item.id" class="two-bottom">
            <div class="two-bottom-info">
              <div class="two-info-td">
                <img class="round-one" :src="item.token_icon"/>
                <img class="round-two " :src="item.token_earn_icon"/>
                <span>{{item.token_symbol}}</span>
              </div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-td">
                <span class="two-info-text">{{item.perDay}} TMK</span>
              </div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-td">
                <span class="two-info-text">{{item.perMonth}} TMK</span>
              </div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-td">
                <span class="two-info-text">$ {{item.tvl}}</span>
              </div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-td">
                <span class="two-info-text">{{item.yearMonth}}%</span>
              </div>
            </div>
            <div class="two-bottom-info">
              <div class="two-info-td two-info-tds">
                <span class="two-info-text">{{item.reward}} TMK</span>
                <router-link class="two-blue-bg" :to="`/receipt/${item.id}`">质押</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="two-bottom H5-view">
          <div class="two-bottom-H">
            <div class="two-bottom-Hinfo">
<!--              title-->
              <div class="hinfo-title">
                <div class="hinfo-title-bg">交易对/TVL</div>
                <div class="hinfo-title-bg">个人收益/日产量</div>
                <div class="hinfo-title-bg">APY</div>
              </div>
<!--              info-->
              <div class="hinfo-content">
                <div class="hinfo-con-left">
                  <div class="con-left-title">TMK/MDX</div>
                  <div class="con-left-num">373,044</div>
                </div>
                <div class="hinfo-con-left">
                  <div class="con-left-title">0.00 MDX</div>
                  <div class="con-left-num">2,823.84 MDX</div>
                </div>
                <div class="hinfo-con-left">433.93%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--          弹窗-->
    <div v-show="showPledge" class="dialog">
      <div class="ple">
        <div class="ple-container">
          <!--              上部分-->
          <div class="ple-one-top">
            <img src="../assect/pack/text.png"/>
            <div @click="closeDialog" class="ple-error"></div>
          </div>
          <!--          内容-->
          <div class="ple-bottom">
            <!--            下部分-->
            <div class="ple-green">
              <div v-for="item in cards" :key="item.thirdId" class="ple-green-content">
                <div v-if="selectCards.indexOf(item.tokenId)< 0" @click="selectCardID(item.tokenId)"
                     class="middle-info-card">
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
              <div v-if="!husdApproved" @click="actionHUSDApprove" class="yellow-btn">授权</div>
              <div v-if="husdApproved" @click="actionDeposit()" class="yellow-btn">质押</div>
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
const NFTStakingAbi = require('@/config/nftStakingRewardABI.json');
const LPAbi = require('@/config/lpStakingRewardABI.json');
const LockAbi = require('@/config/lockRewardABI.json');
const Decimal = require('decimal.js')
export default {
  name: "ContentDig",
  components: {},
  data() {
    return {
      showCard: true, //卡片选择
      showCard2: true,
      showCard3: true,
      showCard4: true,
      showCard5: true,
      showPledge: false,
      husdApproved: false,
      approveHUSDHash: '',
      inviteAddress: '0x0000000000000000000000000000000000000001',
      myNFTCount: 0,
      nftAreadySale: 0,
      perDayReward: 0,
      myReward: 0,
      lockReward:0,
      lockMyReward:0,
      totalStakingNFTAmount: 0,
      totalStakingPower: 0,
      myStakingNFTAmount: 0,
      myStakingPower: 0,
      rewardAddress: '',
      cards: [],
      showSort: false,//排序显隐
      showType: false,//类型显隐
      showAll: false,//全选
      all: '全选',//
      sort: '默认排序',
      type: '默认筛选',
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
        },
        {
          name: '卡片',
        }
      ],
      tabAll: [
        {
          name: '武器',
        },
        {
          name: '卡片',
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
      selectCards: [],
      lists:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    openDialog() {
      this.getMyCard()
      this.showPledge = true
    },
    closeDialog() {
      this.showPledge = false
    },
    //池子质押挖矿列表
    async getLPs() {
      let lists = config.farms_list;
      let v = this
      var local_address = await v.action.getAddress()
      let reward_address = config.lpReward
      //approve
      let contract = new v.myWeb3.eth.Contract(LPAbi, reward_address)
      const lpData = await contract.methods.sushiPerBlock().call();
      let perDay = new Decimal(lpData).div(Math.pow(10, 18)).mul(28800).toFixed();
      let perMonth = new Decimal(perDay).mul(30).toFixed()
      let totalAllocPoint = await contract.methods.totalAllocPoint().call();
      let i = 0

      for (let it of lists) {
        let poolInfo = await contract.methods.poolInfo(i).call();
        let allocPoint = poolInfo.allocPoint
        it.perDay = new Decimal(allocPoint).div(totalAllocPoint).mul(perDay).toFixed()
        it.perMonth = new Decimal(allocPoint).div(totalAllocPoint).mul(perMonth).toFixed()
        it.yearMonth = new Decimal(it.perMonth).mul(12).toFixed()
        it.reward = await contract.methods.pendingSushi(i,local_address).call();
        let tokenContract = new v.myWeb3.eth.Contract(tokenAbi, it.token_address)
        let totalBalance = await tokenContract.methods.balanceOf(it.reward_address).call();
        totalBalance = new Decimal(totalBalance).div(Math.pow(10, 18)).toFixed()
        console.log(`totalBalance`, totalBalance)
        if (it.type == 0) {
          it.tvl = new Decimal(totalBalance).mul(100000).toFixed()
        } else {
          console.log(2222)
        }
        it.apy = new Decimal(it.yearMonth).mul(100000).div(it.tvl).mul(100).toFixed()
        i++
      }

      this.lists = lists


      console.log('lists', this.lists)
    },
    async selectCardID(cardId) {
      let index = this.selectCards.indexOf(cardId);
      if (index >= 0) {
        this.selectCards.splice(index, 1);
      } else {
        this.selectCards.push(cardId)
      }
    },
    async getMyCard() {
      let v = this
      var local_address = await v.action.getAddress()
      let cards = await this.$http.getyMyCard({address: local_address})
      cards = cards.data.data.card
      for (let it of cards) {
        it.img = this.imgs[it.thirdId.toString()]
        it.name = config.cards.find(a => a.type == it.thirdId).name
      }
      this.cards = cards
      console.log('my weapons result', cards)
    },
    actionAll(item) {
      this.all = item.name
      this.showAll = false
    },
    //tab类型
    actionType(item) {
      this.type = item.name
      this.showType = false
    },
    actionSort(item) {
      console.log(item.name)
      this.sort = item.name
      this.showSort = false
    },
    async actionWithdraw() {
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const saleData = contract.methods.withdraw(0).encodeABI();
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
    async getRewardAddress() {
      let v = this
      this.rewardAddress =  v.action.sortAddress(config.nftReward)
    },
    async getMyUserInfo() {
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const amount = await contract.methods.userInfo(0, local_address).call();
      console.log(`myuserinfo`, amount)
      this.myStakingPower = amount['amount']
    },
    async getMyDeposit() {
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const amount = await contract.methods.balanceOfNFT(0, local_address).call();
      console.log(`getMyDeposit`, amount)
      this.myStakingNFTAmount = amount
    },
    async getAllDeposit() {
      let v = this
      let reward_address = config.nftReward
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const amount = await contract.methods.poolInfo(0).call();
      console.log(`getAllDeposit`, amount)
      this.totalStakingNFTAmount = amount['totalStakingNFTAmount']
      this.totalStakingPower = amount['lpSupply']
    },
    async getMyReward() {
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const amount = await contract.methods.pendingSushi(0, local_address).call();
      console.log(`myReward`, amount)
      try {
        this.myReward = new Decimal(amount).div(Math.pow(10, 18)).toFixed(6)
      } catch (ex) {
        this.myReward = 0
      }
    },
    async getLockReward() {
      let v = this
      let reward_address = config.lock
      //approve
      let contract = new v.myWeb3.eth.Contract(LockAbi, reward_address)
      const amount = await contract.methods.totalLock().call();
      console.log(`myReward`, amount)
      try {
        this.lockReward = new Decimal(amount).div(Math.pow(10, 18)).toFixed(6)
      } catch (ex) {
        this.lockReward = 0
      }
    },
    async getMyLockReward() {
      let v = this
      let reward_address = config.lock
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LockAbi, reward_address)
      const amount = await contract.methods.calcCanWithdrawLock(local_address).call();
      console.log(`myReward`, amount)
      try {
        this.lockMyReward = new Decimal(amount).div(Math.pow(10, 18)).toFixed(6)
      } catch (ex) {
        this.lockMyReward = 0
      }
    },
    async actionWithdrawMyLockReward(){
      let v = this
      let reward_address = config.lock
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(LockAbi, reward_address)
      const saleData = contract.methods.withdraw().encodeABI();
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
    async getPerDayReward() {
      let v = this
      let reward_address = config.nftReward
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const amount = await contract.methods.sushiPerBlock().call();
      console.log(`perDayAmount`, amount)
      this.perDayReward = new Decimal(amount).div(Math.pow(10, 18)).mul(24 * 60 * 20).toFixed()
    },
    async actionGetReward() {
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const saleData = contract.methods.getReward(0).encodeABI();
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
    //质押
    async actionDeposit() {
      if (this.selectCards.length <= 0) {
        this.$toast('请选择质押的卡牌')
        return false
      }
      let v = this
      let reward_address = config.nftReward
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
      const saleData = contract.methods.deposit(0, this.selectCards).encodeABI();
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
      this.showPledge = false
      this.getData()
    },
    async getNFTSaleAmount() {
      let v = this
      //approve
      let contract = new v.myWeb3.eth.Contract(saleNFTAbi, config.sale)
      let count = await contract.methods.nftAreadySale().call();
      this.nftAreadySale = count
    },
    async getMyNFT() {
      let v = this
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTAbi, config.nft)
      let count = await contract.methods.balanceOf(local_address).call();
      this.myNFTCount = count
    },
    async actionBuy(num) {
      let v = this
      let reward_address = config.sale
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(saleNFTAbi, reward_address)
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
      let reward_address = config.nftReward
      let token_address = config.nft
      var local_address = await v.action.getAddress()
      //approve
      let contract = new v.myWeb3.eth.Contract(NFTAbi, token_address)
      const approveData = contract.methods.setApprovalForAll(reward_address, '10000000000000000000000000').encodeABI();
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
      let contract = new v.myWeb3.eth.Contract(NFTAbi, config.nft)
      contract.methods.isApprovedForAll(local_address, config.nftReward).call(function (error, result) {
        if (result) {
          v.husdApproved = true;
          //清空检测事件
          v.approveHUSDHash = '';
          clearInterval(v.timerHUSD);
        } else {
          v.husdApproved = false;
        }
      });
    },
    goPack() {
      this.$router.push('pack')
    },
    async getData() {
      this.checkHUSDApproved()
      this.getMyNFT()
      this.getNFTSaleAmount()
      this.getPerDayReward()
      this.getMyReward()
      this.getAllDeposit()
      this.getMyDeposit()
      this.getMyUserInfo()
      this.getRewardAddress()
      this.getMyCard()
      this.getLPs()
      this.getLockReward()
      this.getMyLockReward()
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
  height: 515px;
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
    .middle-info-right {
      width: 30px;
      height: 30px;
    }

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

  }
}


</style>

<style scoped lang="less">


.dig {
  position: relative;
  width: 100%;
  //height: 1621px;
  padding-bottom: 100px;
  background-image: url('../assect/content/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.dig-container {
  padding-top: 40px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dig-line {
  width: 100%;
  height: 35px;
  background: url("../assect/contentDig/bg-line.png") no-repeat;
  background-size: 100% 100%;
  line-height: 35px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 70%;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    //margin-right: 20%;
  }
}

//第一部分

.dig-one-top {
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
    width: 155px;
    height: 48px;
  }
}

.dig-two-top {
  background: url("../assect/contentDig/bg-two.png") no-repeat;
  background-size: 100% 100%;
}

.dig-one-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 987px;
  height: 442px
}


//左边
.one-bottom-left {
  width: 383px;
  height: 442px;
  background: url("../assect/contentDig/left-bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    padding-top: 10px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
  }
}

.crystal-img {
  width: 332px;
  height: 203px;
  margin-bottom: 24px;
}

.rule-icon {
  width: 102px;
  height: 51px;
  margin-top: 10px;
  cursor: pointer;
}


//右边
.one-bottom-right {
  width: 609px;
  height: 439px;
  background: url("../assect/contentDig/right-bg.png") no-repeat;
  background-size: 100% 100%;
}

.one-right-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 13px;

  img {
    width: 38px;
    height: 44px;
  }

  span {
    padding-left: 10px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
  }
}

.one-right-num {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 25px;

  span {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #E7E0D0;
    line-height: 25px;
  }
}

//B

.one-right-bit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bit-icon {
  margin-top: 25px;
  width: 60px;
  height: 77px;
}

.bit-right-num {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.right-num {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-num-s {
  //padding-left: 60px;
}

.right-num-ss {
  //padding-left: 70px;
}

.num-title {
  padding-top: 5px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
}

.num-text {
  padding-top: 3px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFD477;
}

//按钮
.bit-right-btn {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    cursor: pointer;
    margin-top: 20px;
    width: 255px;
    height: 45px;
  }
}

.yellow2-btn {
  margin-top: 20px;
}


//中间部分
.dig-middle {
  margin-top: 60px;
}

.honer-text {
  width: 152px !important;
  height: 39px !important;
}

.dig-middle-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.middle-content-info {
  background:url("../assect/contentDig/honer-bg.png")no-repeat;
  background-size: 100% 100%;
  width: 495px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mid-info-title {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #E7E0D0;
}


.mid-info-num {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFD477;
}


.mid-btn {
  margin-top: 14px;
}


//第二部分
.dig-two {
  padding-top: 67px;
}

.two-middle {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.two-middle-info {
  width: 493px;
  height: 117px;
  background: url("../assect/contentDig/bg-two-left.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.two-middle-title {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

.two-middle-num {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #52A5EB;
}

.two-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.two-bottom-info {

}

.two-info-title {
  width: 164px;
  height: 56px;
  background: url("../assect/contentDig/cotent.png") no-repeat;
  background-size: 100% 100%;
  line-height: 56px;
  text-align: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #797A79;
}

.two-info-td {
  width: 164px;
  height: 56px;
  background: url("../assect/contentDig/cotent.png") no-repeat;
  background-size: 100% 100%;
  line-height: 56px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  span {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    padding-left: 25px;
  }

  img {
    width: 23px;
    height: 23px;
  }
}

.two-info-tds {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 25px;
}

.two-info-text {
  width: 100%;
  text-align: center;
  padding-left: 0 !important;
}

.two-blue-bg {
  width: 161px !important;
  height: 25px !important;
  background: url("../assect/contentDig/blue-bg.png") no-repeat !important;
  background-size: 100% 100% !important;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}

.round-one {
  margin-left: 13px;
}

.round-two {
  position: absolute;
  left: 30px;
  //margin-right: 5px;
}

.two-bottom-H {
  display: none;
}

@media (max-width: 1200px) {
  .dig-container {
    width: 100%;
  }
}


@media (max-width: 960px) {
  .pc-view{
    display: none;
  }
  .dig {
    //height: 3200px;
  }

  .dig-line {
    span {
      text-align: center;
    }
  }

  .dig-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }


  .dig-middle-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .middle-content-info {
    width: 90%;
  }


  .dig-one {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .dig-one-top {
    width: 90%;
  }

  .one-right-num {
    span {
      font-size: 14px;
    }
  }

  .num-title {
    font-size: 12px;

  }

  .num-text {
    font-size: 14px;
  }

  .right-num-s {
    //padding-left: 25px;
  }

  .right-num-ss {
    //padding-left: 30px;
  }

  .bit-right-btn {
    padding-top: 30px;

    img {
      width: 137px;
      height: 31px;
    }
  }


  .dig-one-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .one-bottom-left {
    width: 90%;
  }

  .crystal-img {
    width: 265px;
    height: 162px;
    padding-top: 62px;
  }

  .rule-icon {
    padding-bottom: 20px;
  }

  .one-bottom-right {
    width: 90%;
  }

  .dig-two {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  //蓝色
  .dig-two-top {
    width: 90%;
  }

  .two-middle {
    width: 90%;
  }

  .two-middle-info {
    width: 50%;
  }

  .two-middle-title {
    font-size: 16px;
  }

  .two-middle-num {
    font-size: 20px;
  }


  .two-bottom-info {
    display: none;
  }


  //h5
  .two-bottom-Hinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .hinfo-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .hinfo-title-bg {
    width: 33.3333%;
    height: 71px;
    background:url("../assect/contentDig/title-bg.png")no-repeat;
    background-size: 100% 100%;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    text-align: center;
    line-height: 71px;
    color: #797A79;
  }

  .hinfo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 71px;
    background:url("../assect/contentDig/info-bg.png")no-repeat;
    background-size: 100% 100%;
  }


  .hinfo-con-left {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
  }

  .con-left-title {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }

  .con-left-num {
    font-size: 12px;
    font-family: Menlo-Regular, Menlo;
    font-weight: 400;
    color: #E7E0D0;
    padding-top: 1px;
  }




  .two-bottom-Hinfos {
    margin-top: 20px;
  }

  .Hinfo-left {
    width: 50%;
  }

  .Hinfo-left-title {
    width: 100%;
    height: 56px;
    background: url("../assect/contentDig/cotent.png") no-repeat;
    background-size: 100% 100%;
    line-height: 56px;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #797A79;
  }

  .Hinfo-right {
    width: 50%;
  }

  .two-bottom {
    width: 90%;
  }

  .Hinfo-right-text {
    width: 100%;
    height: 56px;
    background: url("../assect/contentDig/cotent.png") no-repeat;
    background-size: 100% 100%;
    line-height: 56px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      padding-left: 25px;
    }

    img {
      width: 23px;
      height: 23px;
    }
  }

  .round-two-s {
    left: 20px;
  }

  .two-info-Htds {
    width: 100%;
  }

  .two-blue-bg {
    width: 97% !important;
  }

  .two-bottom-H {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


}


</style>
