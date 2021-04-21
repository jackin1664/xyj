    <template>
      <div class="content">
          <div class="content-container">

<!--            第一部分-->
            <div class="content-top">
              <div class="content-top-info">
                <div class="top-icon"></div>
                <div class="top-icon-two"></div>
                <div class="top-rule">规则</div>
                <div class="top-info">
                  <img class="top-info-icon" src="../assect/content/icon-href.png"/>
                  <span class="top-info-text">我的邀请链接：www.xxx.com</span>
                  <img class="top-info-button" src="../assect/content/icon-copy.png"/>
                </div>
                <div class="top-info">
                  <img class="top-info-icon" src="../assect/content/icon-people.png"/>
                  <span class="top-info-text">我的邀请人数：{{inviteNum}}人</span>
                  <img class="top-info-button" src="../assect/content/icon-get.png"/>
                </div>
                <div class="top-info">
                  <img class="top-info-icon" src="../assect/content/icon-num.png"/>
                  <span class="top-info-text">可是用卡包数量：{{canUseNum}}</span>
                  <img class="top-info-button" src="../assect/content/icon-reward.png"/>
                </div>
              </div>
              <div class="content-top-info">
                  <span class="top-info-inv top-info-invs">张三邀请了100人....................................................................</span>
                  <span class="top-info-inv">张三邀请了100人....................................................................</span>
                  <span class="top-info-inv">张三邀请了100人....................................................................</span>
                  <span class="top-info-inv">张三邀请了100人....................................................................</span>
                  <span class="top-info-inv">张三邀请了100人....................................................................</span>
                  <span class="top-info-inv">张三邀请了100人....................................................................</span>
              </div>
            </div>

<!--            第二部分-->
            <div class="content-middle">
<!--              头部-->
                <div class="middle-top">
                  <div class="middle-top-icon"></div>
                  <div class="middle-top-text"></div>
                </div>
<!--                绿色部分-->
                <div class="middle-green">
<!--                  标题-->
                  <div class="middle-title">花果山阵营</div>
<!--                  下方内容-->
                  <div class="middle-content">
                    <div class="middle-info">
                      <div class="middle-info-card">
                        <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
                        <img src="../assect/content/border-green.png" class="middle-info-border"/>
                      </div>
                      <div class="middle-info-right">
                        <div class="info-right">
                          <span class="info-right-name">角色名称：</span>
                          <span></span>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性1：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性2：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性3：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">数 <span>量</span> ：</span>
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="middle-info middle-infos">
                      <img src="../assect/content/border-green.png" class="middle-info-border"/>
                      <div class="middle-info-right">
                        <div class="info-right">
                          <span class="info-right-name">角色名称：</span>
                          <span></span>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性1：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性2：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性3：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">数 <span>量</span> ：</span>
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="middle-info">
                      <img src="../assect/content/border-green.png" class="middle-info-border"/>
                      <div class="middle-info-right">
                        <div class="info-right">
                          <span class="info-right-name">角色名称：</span>
                          <span></span>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性1：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性2：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性3：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">数 <span>量</span> ：</span>
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="middle-info middle-infos">
                      <img src="../assect/content/border-green.png" class="middle-info-border"/>
                      <div class="middle-info-right">
                        <div class="info-right">
                          <span class="info-right-name">角色名称：</span>
                          <span></span>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性1：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性2：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">角色属性3：</span>
                          <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                        </div>
                        <div class="info-right">
                          <span class="info-right-name">数 <span>量</span> ：</span>
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<!--              蓝色部分-->
                <div class="middle-green middle-bule">
                <!--                  标题-->
                <div class="middle-title">龙宫阵营</div>
                <!--                  下方内容-->
                <div class="middle-content">
                  <div class="middle-info">
                    <img src="../assect/content/border-bule.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info middle-infos">
                    <img src="../assect/content/border-bule.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info">
                    <img src="../assect/content/border-bule.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info middle-infos">
                    <img src="../assect/content/border-bule.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<!--              黄色部分-->
                <div class="middle-green middle-yellow">
                <!--                  标题-->
                <div class="middle-title">天宫阵营</div>
                <!--                  下方内容-->
                <div class="middle-content">
                  <div class="middle-info">
                    <img src="../assect/content/border-yellow.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info middle-infos">
                    <img src="../assect/content/border-yellow.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info">
                    <img src="../assect/content/border-yellow.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div class="middle-info middle-infos">
                    <img src="../assect/content/border-yellow.png" class="middle-info-border"/>
                    <div class="middle-info-right">
                      <div class="info-right">
                        <span class="info-right-name">角色名称：</span>
                        <span></span>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性1：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性2：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">角色属性3：</span>
                        <img src="../assect/content/icon-rule-progress.png" class="info-right-icon"/>
                      </div>
                      <div class="info-right">
                        <span class="info-right-name">数 <span>量</span> ：</span>
                        <span>1</span>
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
      import config from '@/config/base'

      // const tokenAbi = require('@/config/token_abi.json');
      const saleNFTAbi = require('@/config/saleNFTABI.json');
      import Decimal from 'decimal.js'

      export default {
        name: "Stake",
        components: {},
        data() {
          return {
            inviteNum:0,
            canUseNum:0
          }
        },
        computed: {
          account_default_address() {
            return this.$store.state.account.default_address
          },
        },
        watch: {
          //检测到获取了地址
          account_default_address() {
            this.getAllData()
          }
        },
        methods: {
          async getInvite(){
            let v = this
            var local_address = await v.action.getAddress()
            let token_address = config.sale
            //approve
            let contract = new v.myWeb3.eth.Contract(saleNFTAbi, token_address)
            let num = await contract.methods.getPlyFreeGftInfo(local_address).call();
            console.log(`inite`,num)
            this.inviteNum = num[0]
            let usedNum = new Decimal(num[1]).mul(10).toFixed()
            let canUseNum = new Decimal(this.inviteNum).sub(usedNum).toFixed()
            this.canUseNum = new Decimal(canUseNum).div(10).toFixed()
          },
          async getAllData() {
            this.getInvite()
          },
        },
        mounted() {
        },
        created() {
          this.getAllData()
        }
      }
    </script>

    <style scoped lang="less">

      .content {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assect/content/bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .content-container {
        padding-top: 220px;
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .content-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 90%;
      }

      .content-top-info {
        position: relative;
        z-index: 99;
        width: 482px;
        height: 307px;
        background-image: url('../assect/content/border.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .top-icon {
        position: absolute;
        top: -60px;
        left: -30px;
        width: 141px;
        height: 121px;
        background: url('../assect/content/icon-monkey.png') no-repeat ;
        background-size: 100% 100%;
      }

      .top-icon-two {
        position: absolute;
        top:-10px;
        left: 80px;
        width: 128px;
        height: 57px;
        background: url('../assect/content/icon-text.png') no-repeat ;
        background-size: 100% 100%;
      }

      .top-rule {
        padding-top: 20px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFD477;
        line-height: 22px;
      }

      .top-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 90%;
        padding-top: 27px;
      }

      .top-info-icon {
        width: 27px;
        height: 28px;
      }

      .top-info-text {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
        flex: 1;
        padding-left: 8px;
      }


      .top-info-button {
        cursor: pointer;
        width: 102px;
        height: 54px;
      }

      .top-info-inv {
        padding-top: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
      }

      .top-info-invs{
        padding-top: 38px;
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
        //height: 359px;
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
        //width: 50%;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
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
        }
      }


      @media (max-width: 960px) {

        .content-top {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .content-top-info {
          margin-top: 40px;
          width: 301px;
          justify-content: space-around;
          //height: 153px;
        }

        .top-info-inv {
          width: 90%;
          font-size: 14px;
          line-height: 10px;
          padding-top: 5px;
          padding-bottom: 5px;
        }
        .top-info-invs {
          padding-top: 10px;
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
          //width: 282px;
          width: 85%;
          height: 730px;
          background: url("../assect/content/h-border-green.png")no-repeat ;
          background-size: 100% 100%;
        }

        .middle-bule {
          width: 85%;
          height: 730px;
          background: url("../assect/content/h-border-bule.png")no-repeat ;
          background-size: 100% 100%;
        }

        .middle-yellow {
          width: 85%;
          height: 730px;
          background: url("../assect/content/h-border-yellow.png")no-repeat ;
          background-size: 100% 100%;
        }

        .middle-content {
          padding-left: 10px;
          padding-right: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }



        .middle-infos {
          margin-top: 30px;
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
        padding-top: 6px;
      }

      .info-right-name {
        font-size: 12px;
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
          padding-left: 20px;
          width: 61px;
          height: 30px;
        }

      }



    </style>
