    <template>
      <div class="pack">
        <div class="dig-line">
          <span>NFT质押挖矿正式上线啦！</span>
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
                    <div class="select-top-title">{{type}}</div>
                    <img src="../assect/pack/arrow-bottom.png"/>
                  </div>
                  <img class="tab-line" src="../assect/pack/line.png"/>
                  <div v-show="showType" class="select-tab">
                    <div v-for="(item,index) in tabType" class="tab-info" :key="index" @click="actionType(item)">
                      <span>{{item.name}}</span>
                      <!--                    <img class="tab-line" src="../assect/pack/line.png"/>-->
                    </div>
                  </div>
                </div>
                <div class="select-info select-infos">
                  <div @click="showSort=!showSort" class="select-info-top">
                    <div class="select-top-title">{{sort}}</div>
                    <img src="../assect/pack/arrow-bottom.png"/>
                  </div>

                  <img class="tab-line" src="../assect/pack/line.png"/>
                  <div v-show="showSort" class="select-tab">
                    <div v-for="(item,index) in tab" class="tab-info" :key="index" @click="actionSort(item)">
                      <span>{{item.name}}</span>
                      <!--                    <img class="tab-line" src="../assect/pack/line.png"/>-->
                    </div>
                  </div>
                </div>
              </div>
              <img class="compos-icon" src="../assect/pack/composite-icon.png"/>
            </div>
<!--            下半部分-->
            <div class="pack-bottom-info">
              <div @click="actionDetail" class="bottom-info">
                <div class="middle-info-card">
                  <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
                  <img src="../assect/pack/green-border.png" class="middle-info-border"/>
                </div>
<!--                    <img src="../assect/pack/green-border.png"/>-->
                    <div class="bottom-info-right">
                      <span>角色：孙悟空</span>
                      <span>战斗力：10000</span>
                      <span>阵营：花果山</span>
                      <span>武器战斗力：1000</span>
                      <span>数 &nbsp;&nbsp; 量：1</span>
                    </div>
                </div>
              <div class="bottom-info bottom-infos">
                <img src="../assect/pack/green-border.png"/>
                <div class="bottom-info-right">
                  <span>角色：猴狲</span>
                  <span>战斗力：10000</span>
                  <span>阵营：花果山</span>
                  <span>武器战斗力：1000</span>
                  <span>数 &nbsp;&nbsp; 量：5</span>
                </div>
              </div>
              <div class="bottom-info">
                <img src="../assect/pack/blue-border.png"/>
                <div class="bottom-info-right">
                  <span>角色：龟丞相</span>
                  <span>战斗力：2000</span>
                  <span>阵营：龙宫</span>
                  <span>武器战斗力：0</span>
                  <span>数 &nbsp;&nbsp; 量：1</span>
                </div>
              </div>
              <div class="bottom-info bottom-infoss">
                <img src="../assect/pack/blue-border.png"/>
                <div class="bottom-info-right">
                  <span>角色：虾兵蟹将</span>
                  <span>战斗力：1000</span>
                  <span>阵营：龙宫</span>
                  <span>武器战斗力：0</span>
                  <span>数 &nbsp;&nbsp; 量：5</span>
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
              <img class="middle-info-border" src="../assect/dialog/card.png"/>
            </div>
              <div class="dialog-right">
                <div class="dialog-text">名称：金箍棒</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-text">提升战斗力：2000</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-text">价格：3000TMK</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-btn">
                  <div class="gua-btn">挂载</div>
                  <div class="zhuan-btn">转让赠送</div>
                </div>
              </div>
            <div @click="closeDialog" class="dialog-error"></div>
          </div>

        </div>
        <div v-show="detailTwo" class="dialog">
          <div class="dialog-content">
            <div class="middle-info-card">
              <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
              <img class="middle-info-border" src="../assect/dialog/green-card.png"/>
            </div>
            <div class="dialog-right">
              <div class="dialog-text">角色：猴狲</div>
              <img class="dialog-line" src="../assect/dialog/line.png"/>
              <div class="dialog-text">阵营：花果山</div>
              <img class="dialog-line" src="../assect/dialog/line.png"/>
              <div class="dialog-text">战斗力：10000</div>
              <img class="dialog-line" src="../assect/dialog/line.png"/>
              <div class="dialog-text">质押：30TMK</div>
              <img class="dialog-line" src="../assect/dialog/line.png"/>
              <div class="dialog-btn dialog-btns">
                <div class="zhi-btn" >质押挖矿</div>
                <div class="zhuan-btn">转让赠送</div>
              </div>
            </div>
            <div @click="closeDialogTwo" class="dialog-error"></div>
          </div>

        </div>
        <div v-show="detailThree" class="dialog">
          <div class="dialog-sure">
            <div class="dialog-content">
              <div class="middle-info-card">
                <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
                <img class="middle-info-border" src="../assect/dialog/green-card.png"/>
              </div>
              <div class="dialog-right">
                <div class="dialog-text">角色：猴狲</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-text">阵营：花果山</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-text">战斗力：10000</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-text">质押：30TMK</div>
                <img class="dialog-line" src="../assect/dialog/line.png"/>
                <div class="dialog-btn dialog-btns">
                  <div class="zhi-btn" >质押挖矿</div>
                  <div class="zhuan-btn">转让赠送</div>
                </div>
              </div>
              <div @click="closeDialogThree" class="dialog-error"></div>
            </div>
            <div class="dialog-contents">
                <div class="dialog-address">请填写对方钱包地址</div>
                <div class="gua-btn">确定</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import '../css/base.less'
    export default {
      name: "ContentPack",
      data () {
        return {
          detailThree:true,
          detailTwo: false,//
          detail:false,
          sort:'排序',
          showSort:false,//排序显隐
          showType:false,//类型显隐
          type:'类型',
          tab:[
            {
              name:'战斗力',
            },
            {
              name:'购买时间',
            }
          ],
          tabType:[
            {
              name:'武器',
            },
            {
              name:'卡片',
            }
          ]
        }
      },
      methods : {
        closeDialogThree() {
          this.detailThree=false
        },
        closeDialogTwo() {
          this.detailTwo=false
        },
        //关闭弹窗
        closeDialog() {
          this.detail=false
        },
        //弹窗详情
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
        },
        //tab类型
        actionType(item) {
          this.type=item.name
          this.showType=false
        },
        //tab排序
        actionSort(item) {
          console.log(item.name)
          this.sort=item.name
          this.showSort=false
        }
      }
    }
    </script>

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
          background: url("../assect/dialog/addres.png")no-repeat;
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
          background: url("../assect/contentDig/bg.png")no-repeat;
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
          background: url("../assect/pack/bg.png")no-repeat;
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
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
        }

        .bottom-info {
          cursor: pointer;
          margin-top: 45px;
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 45%;
          img {
            width: 154px;
            height: 233px;
          }
        }

        .bottom-infos {
          margin-left: 170px;
        }
        .bottom-infoss {
          margin-left: 195px;
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
            height: 25%;
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



    </style>
