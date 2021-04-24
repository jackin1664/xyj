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
                      <span>矿池总质押卡牌数量：{{totalStakingNFTAmount}}</span>
                      <span>矿池总战力值：{{totalStakingPower}}</span>
                      <span>矿池合约地址：{{rewardAddress}}</span>
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
                      <span>质押卡牌数量：{{myStakingNFTAmount}}</span>
                      <span>质押战力值：{{myStakingPower}}</span>
                    </div>
<!--                    每天产出-->
                    <div class="one-right-bit">
                      <img class="bit-icon" src="../assect/contentDig/B-icon.png"/>
                      <div class="bit-right-num">
                        <div class="right-num">
                          <div class="num-title">矿池每天产出</div>
                          <div class="num-text">{{perDayReward}}TMK</div>
                        </div>
                        <div class="right-num right-num-s">
                          <div class="num-title">可提取的奖励</div>
                          <div class="num-text">{{myReward}}TMK</div>
                        </div>
                        <div class="right-num right-num-ss">
                          <div class="num-title">APY</div>
                          <div class="num-text">2218%</div>
                        </div>
                      </div>
<!--                      按钮-->
                      <div class="bit-right-btn">
                        <img @click="actionHUSDApprove" src="../assect/contentDig/approve.png"/>
                        <img @click="actionDeposit" src="../assect/contentDig/haverst.png"/>
                        <img @click="actionWithdraw" src="../assect/contentDig/withdraw.png"/>
                        <img src="../assect/contentDig/exit.png"/>
                      </div>
                    </div>
                </div>
              </div>
            </div>

<!--            锁定奖励-->
            <div class="dig-middle">
              <!--              上部分-->
              <div class="dig-one-top">
                <img src="../assect/contentDig/nft-dig.png"/>
              </div>

              <div class="dig-middle-content">
                <div class="middle-content-info">
                  <div class="mid-info-title">奖励锁定数量</div>
                  <div class="mid-info-num">1000TMK</div>
                </div>
                <div class="middle-content-info">
                  <div class="mid-info-title">奖励锁定数量</div>
                  <div class="mid-info-num">1000TMK</div>
                  <div class="yellow2-btn mid-btn">领取</div>
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
              <div class="two-middle">
                <div class="two-middle-info">
                  <span class="two-middle-title">总锁仓数量</span>
                  <span class="two-middle-num">166,666TMK</span>
                </div>
                <div class="two-middle-info">
                  <span class="two-middle-title">待领取的奖励</span>
                  <span class="two-middle-num">825,643TMK</span>
                </div>
              </div>
<!--              下部分-->
              <div class="two-bottom">

                <div class="two-bottom-info">
                  <div class="two-info-title">LP</div>
                  <div class="two-info-td">
                    <img class="round-one" src="../assect/contentDig/round.png"/>
                    <img class="round-two " src="../assect/contentDig/round.png"/>
                    <span>HGT/HUSD</span>
                  </div>
                  <div class="two-info-td">
                    <img class="round-one" src="../assect/contentDig/round.png"/>
                    <img class="round-two" src="../assect/contentDig/round.png"/>
                    <span>SH/HUSD</span>
                  </div>
                  <div class="two-info-td">
                    <img class="round-one" src="../assect/contentDig/round.png"/>
                    <img class="round-two" src="../assect/contentDig/round.png"/>
                    <span>HGT/FILDA</span>
                  </div>
                  <div class="two-info-td">
                    <img class="round-one" src="../assect/contentDig/round.png"/>
                    <img class="round-two" src="../assect/contentDig/round.png"/>
                    <span>PIPI/HUSD</span>
                  </div>
                </div>

                <div class="two-bottom-info">
                  <div class="two-info-title">Daily Output</div>
                  <div class="two-info-td">
                    <span class="two-info-text">1,068,48 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">1,068,48 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">2,289,60 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">1,068,48 MDX</span>
                  </div>
                </div>

                <div class="two-bottom-info">
                  <div class="two-info-title">Monthly output</div>
                  <div class="two-info-td">
                    <span class="two-info-text">32,054,40 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">32,054,40 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">68,688,00 MDX</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">32,054,40 MDX</span>
                  </div>
                </div>

                <div class="two-bottom-info">
                  <div class="two-info-title">Value Locked</div>
                  <div class="two-info-td">
                    <span class="two-info-text">$ 373,044</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">$ 381,144</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">$ 883,819</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">$ 883,819</span>
                  </div>
                </div>

                <div class="two-bottom-info">
                  <div class="two-info-title">APY</div>
                  <div class="two-info-td">
                    <span class="two-info-text">433.93%</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">424.71%</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">392.47%</span>
                  </div>
                  <div class="two-info-td">
                    <span class="two-info-text">376.91%</span>
                  </div>
                </div>

                <div class="two-bottom-info">
                  <div class="two-info-title">Your Reward</div>
                  <div class="two-info-td two-info-tds">
                    <span class="two-info-text">0.0000%</span>
                    <div class="two-blue-bg">Stake</div>
                  </div>
                  <div class="two-info-td two-info-tds">
                    <span class="two-info-text">0.0000%</span>
                    <div class="two-blue-bg">Stake</div>
                  </div>
                  <div class="two-info-td two-info-tds">
                    <span class="two-info-text">0.0000%</span>
                    <div class="two-blue-bg">Stake</div>
                  </div>
                  <div class="two-info-td two-info-tds">
                    <span class="two-info-text">0.0000%</span>
                    <div class="two-blue-bg">Stake</div>
                  </div>
                </div>

                <div class="two-bottom-H">
                  <div class="two-bottom-Hinfo">
                    <div class="Hinfo-left">
                      <div class="Hinfo-left-title">LP</div>
                      <div class="Hinfo-left-title">Daily Output</div>
                      <div class="Hinfo-left-title">Monthly output</div>
                      <div class="Hinfo-left-title">Value Locked</div>
                      <div class="Hinfo-left-title">APY</div>
                      <div class="Hinfo-left-title">Your Reward</div>
                    </div>
                    <div class="Hinfo-right">
                      <div class="Hinfo-right-text">
                        <img class="round-one" src="../assect/contentDig/round.png"/>
                        <img class="round-two round-two-s" src="../assect/contentDig/round.png"/>
                        <span>HGT/HUSD</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>1,068,48 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>32,054,40 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>$ 373,044</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>433.93%</span>
                      </div>
                      <div class="two-info-td two-info-tds two-info-Htds">
                        <span class="two-info-text">0.0000%</span>
                        <div class="two-blue-bg">Stake</div>
                      </div>

                    </div>
                  </div>
                  <div class="two-bottom-Hinfo two-bottom-Hinfos">
                    <div class="Hinfo-left">
                      <div class="Hinfo-left-title">LP</div>
                      <div class="Hinfo-left-title">Daily Output</div>
                      <div class="Hinfo-left-title">Monthly output</div>
                      <div class="Hinfo-left-title">Value Locked</div>
                      <div class="Hinfo-left-title">APY</div>
                      <div class="Hinfo-left-title">Your Reward</div>
                    </div>
                    <div class="Hinfo-right">
                      <div class="Hinfo-right-text">
                        <img class="round-one" src="../assect/contentDig/round.png"/>
                        <img class="round-two round-two-s" src="../assect/contentDig/round.png"/>
                        <span>SH/HUSD</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>1,068,48 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>32,054,40 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>$ 373,044</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>433.93%</span>
                      </div>
                      <div class="two-info-td two-info-tds two-info-Htds">
                        <span class="two-info-text">0.0000%</span>
                        <div class="two-blue-bg">Stake</div>
                      </div>

                    </div>
                  </div>
                  <div class="two-bottom-Hinfo two-bottom-Hinfos">
                    <div class="Hinfo-left">
                      <div class="Hinfo-left-title">LP</div>
                      <div class="Hinfo-left-title">Daily Output</div>
                      <div class="Hinfo-left-title">Monthly output</div>
                      <div class="Hinfo-left-title">Value Locked</div>
                      <div class="Hinfo-left-title">APY</div>
                      <div class="Hinfo-left-title">Your Reward</div>
                    </div>
                    <div class="Hinfo-right">
                      <div class="Hinfo-right-text">
                        <img class="round-one" src="../assect/contentDig/round.png"/>
                        <img class="round-two round-two-s" src="../assect/contentDig/round.png"/>
                        <span>HGT/FILDA</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>1,068,48 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>32,054,40 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>$ 373,044</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>433.93%</span>
                      </div>
                      <div class="two-info-td two-info-tds two-info-Htds">
                        <span class="two-info-text">0.0000%</span>
                        <div class="two-blue-bg">Stake</div>
                      </div>

                    </div>
                  </div>
                  <div class="two-bottom-Hinfo two-bottom-Hinfos">
                    <div class="Hinfo-left">
                      <div class="Hinfo-left-title">LP</div>
                      <div class="Hinfo-left-title">Daily Output</div>
                      <div class="Hinfo-left-title">Monthly output</div>
                      <div class="Hinfo-left-title">Value Locked</div>
                      <div class="Hinfo-left-title">APY</div>
                      <div class="Hinfo-left-title">Your Reward</div>
                    </div>
                    <div class="Hinfo-right">
                      <div class="Hinfo-right-text">
                        <img class="round-one" src="../assect/contentDig/round.png"/>
                        <img class="round-two round-two-s" src="../assect/contentDig/round.png"/>
                        <span>PIPI/HUSD</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>1,068,48 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>32,054,40 MDX</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>$ 373,044</span>
                      </div>
                      <div class="Hinfo-right-text">
                        <span>433.93%</span>
                      </div>
                      <div class="two-info-td two-info-tds two-info-Htds">
                        <span class="two-info-text">0.0000%</span>
                        <div class="two-blue-bg">Stake</div>
                      </div>

                    </div>
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
      const Decimal = require('decimal.js')
      export default {
        name: "ContentDig",
        data() {
          return {
            husdApproved: false,
            approveHash: '',
            approveHUSDHash: '',
            inviteAddress: '0x0000000000000000000000000000000000000001',
            myNFTCount:0,
            nftAreadySale:0,
            perDayReward:0,
            myReward:0,
            totalStakingNFTAmount:0,
            totalStakingPower:0,
            myStakingNFTAmount:0,
            myStakingPower:0,
            rewardAddress:''

          }
        },
        mounted() {
          this.getData()
        },
        methods: {
          async getRewardAddress(){
            let v = this
            this.rewardAddress = await v.action.sortAddress(config.nftReward)
          },
          async getMyUserInfo(){
            let v = this
            let reward_address = config.nftReward
            var local_address = await v.action.getAddress()
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const amount  =  await contract.methods.userInfo(0,local_address).call();
            console.log(`myuserinfo`,amount)
            this.myStakingPower = amount['amount']
          },
          async getMyDeposit(){
            let v = this
            let reward_address = config.nftReward
            var local_address = await v.action.getAddress()
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const amount  =  await contract.methods.balanceOfNFT(0,local_address).call();
            console.log(`getMyDeposit`,amount)
            this.myStakingNFTAmount = amount
          },
          async getAllDeposit(){
            let v = this
            let reward_address = config.nftReward
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const amount  =  await contract.methods.poolInfo(0).call();
            console.log(`getAllDeposit`,amount)
            this.totalStakingNFTAmount = amount['totalStakingNFTAmount']
            this.totalStakingPower = amount['lpSupply']
          },
          async getMyReward(){
            let v = this
            let reward_address = config.nftReward
            var local_address = await v.action.getAddress()
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const amount  =  await contract.methods.pendingSushi(0,local_address).call();
            console.log(`myReward`,amount)
            try{
            this.myReward = new Decimal(amount).div(Math.pow(10,18)).toFixed()
            }catch (ex){
              this.myReward = 0
            }
          },
          async getPerDayReward(){
            let v = this
            let reward_address = config.nftReward
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const amount  =  await contract.methods.sushiPerBlock().call();
            console.log(`perDayAmount`,amount)
            this.perDayReward = new Decimal(amount).div(Math.pow(10,18)).mul(24*60*20).toFixed()
          },
          async actionWithdraw(){
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
                  v.$toast('Transaction has send please wait result')
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
          async actionDeposit(){
            let v = this
            let reward_address = config.nftReward
            var local_address = await v.action.getAddress()
            //approve
            let contract = new v.myWeb3.eth.Contract(NFTStakingAbi, reward_address)
            const saleData = contract.methods.deposit(0,[21,22]).encodeABI();
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
                  v.$toast('Transaction has send please wait result')
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
          async getNFTSaleAmount(){
            let v = this
            //approve
            let contract = new v.myWeb3.eth.Contract(saleNFTAbi, config.sale)
            let count = await contract.methods.nftAreadySale().call();
            this.nftAreadySale = count
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
                  v.$toast('Transaction has send please wait result')
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
          }
        }
      }
      </script>

      <style scoped lang="less">





      .dig {
        position: relative;
        width: 100%;
        height: 1621px;
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
        background: url("../assect/contentDig/bg-line.png")no-repeat;
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
        background: url("../assect/contentDig/bg.png")no-repeat;
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
        background: url("../assect/contentDig/bg-two.png")no-repeat;
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
        background: url("../assect/contentDig/left-bg.png")no-repeat;
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
        background: url("../assect/contentDig/right-bg.png")no-repeat;
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

      .one-right-bit{
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


      //中间部分
      .dig-middle {
        margin-top: 60px;
      }

      .dig-middle-content {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .middle-content-info {
        background: #000;
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
        background: url("../assect/contentDig/bg-two-left.png")no-repeat;
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
        background: url("../assect/contentDig/cotent.png")no-repeat;
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
        background: url("../assect/contentDig/cotent.png")no-repeat;
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
        background: url("../assect/contentDig/blue-bg.png")no-repeat !important;
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
        .dig {
          height: 3200px;
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
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
          height: 100%;
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
          background: url("../assect/contentDig/cotent.png")no-repeat;
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
          background: url("../assect/contentDig/cotent.png")no-repeat;
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
