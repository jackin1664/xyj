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
                    <div @click="actionDetail" class="stop-bottom-info">
                      <div class="middle-info-card">
                        <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
                        <img src="../assect/stop/boder.png" class="middle-info-border"/>
                      </div>
<!--                      <div class="stop-bottom-box">蟠桃</div>-->
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
                        </div>
                      </div>

                    </div>
                    <div class="stop-bottom-info">
                      <div class="stop-bottom-box">仙丹</div>
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
                        </div>
                      </div>

                    </div>
                    <div class="stop-bottom-info stop-bottom-infos">
                      <div class="stop-bottom-box">天马</div>
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
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
                    <div class="stop-bottom-info">
                      <div class="stop-bottom-box">金箍棒</div>
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
                        </div>
                      </div>

                    </div>
                    <div class="stop-bottom-info">
                      <div class="stop-bottom-box">大环刀</div>
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
                        </div>
                      </div>

                    </div>
                    <div class="stop-bottom-info stop-bottom-infos">
                      <div class="stop-bottom-box">青龙偃月刀</div>
                      <div class="stop-right-info">
                        <div class="right-info">
                          <span class="right-info-title">数量</span>
                          <div class="right-info-num">100</div>
                        </div>
                        <div class="right-info">
                          <span class="right-info-neng">能力值：1000</span>
                        </div>
                        <div class="right-info">
                          <img class="right-info-money" src="../assect/stop/money.png"/>
                          <div class="right-info-tmk">100TMK</div>
                        </div>
                        <div class="right-info">
                          <img class="right-info-buy" src="../assect/stop/buy.png"/>
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
                  <div class="dialog-text">能力值：100</div>
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
      export default {
        name: "ContentStop",
        data() {
          return {
            detail:false
          }
        },
        methods: {
          //关闭弹窗
          closeDialog() {
            this.detail=false
          },
          actionDetail() {
            this.detail=true
            if (this.detail==true){
              var mo=function(e){e.preventDefault();};
              document.body.style.overflow='hidden';
              document.addEventListener("touchmove",mo,false);//禁止页面滑动
            }else  {
              var mos=function(e){e.preventDefault();};
              document.body.style.overflow='';//出现滚动条
              document.removeEventListener("touchmove",mos,false);
            }
          }
        }
      }
      </script>

      <style scoped lang="less">
      .stop {
        position: relative;
        width: 100%;
        height: 1621px;
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
        background: url("../assect/contentDig/bg.png")no-repeat;
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
        height: 652px;
        background: url("../assect/stop/bg.png")no-repeat;
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
        background: url("../assect/stop/boder.png")no-repeat;
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
        background: url("../assect/stop/bg-box.png")no-repeat;
        background-size: 100% 100%;
        color: #FFD477;
        text-align: center;
        margin-left: 5px;
      }

      .right-info-money {
        width: 26px;
        height: 26px;
      }
      .right-info-tmk{
        padding-left: 6px;
      }

      .right-info-buy {
        width: 121px;
        height: 60px;
        margin-left: -8px;
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
