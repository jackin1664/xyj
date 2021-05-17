    <template>
      <div class="mount">
        <div class="dig-line">
          <span><img src="../assect/content/laba.png" alt=""> NFT开始预售啦！</span>
        </div>
        <div class="mount-container">
          <!--              上部分-->
          <div class="mount-one-top">
            <img src="../assect/pack/text.png"/>
          </div>
<!--          内容-->
          <div class="mount-bottom">
            <!--              上部分-->
            <div class="mount-select">
            <div class="mount-select-left">
              <div class="select-info">
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
          </div>
<!--            中间-->
            <div class="mount-brown">
              <div class="middle-info-card">
                <img src="../assect/content/mon-card.png" class="middle-info-moncard"/>
                <img class="middle-info-border" src="../assect/pack/brown-border.png"/>
              </div>
              <div class="mount-brown-right">
                <span>名称：金箍棒</span>
                <span>数量：1</span>
                <span>战斗力：+2000</span>
              </div>
            </div>
<!--            下部分-->
            <div class="mount-add">
              <img src="../assect/pack/add.png"/>
            </div>
            <div class="mount-green">
              <div class="green-info"></div>
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>
              <div class="green-info"></div>
              <div class="green-info"></div>
              <div class="green-info"></div>
            </div>
            <div class="mount-green-text">
              已选中，最多可选1张
            </div>
            <div class="mount-btn">
              <img src="../assect/pack/gua.png"/>
              <span></span>
              <img src="../assect/pack/xie.png"/>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import '../css/base.less'
    export default {
    name: "ContentMount",
      data () {
        return {
          showSort:false,//排序显隐
          showType:false,//类型显隐
          sort:'默认排序',
          type:'默认筛选',
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
          ],
        }
      },
      methods : {
        //tab类型
        actionType(item) {
          this.type=item.name
          this.showType=false
        },
        actionSort(item) {
          console.log(item.name)
          this.sort=item.name
          this.showSort=false
        }
      }
    }
    </script>

    <style scoped lang="less">
    .mount {
      position: relative;
      width: 100%;
      height: 1200px;
      background-image: url('../assect/content/bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .mount-container {
      padding-top: 40px;
      width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    //上半部分
    .mount-one-top {
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

    .mount-bottom {
      width: 988px;
      height: 915px;
      background: url("../assect/pack/bg.png")no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 47px;
    }

    .mount-select {
      margin-top: 27px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      position: relative;
      z-index: 100;
    }

    .mount-select-left {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
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

    .mount-brown {
      margin-top: 55px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 154px;
        height: 233px;
      }
    }

    .mount-brown-right {
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


    .mount-add {
      padding-top: 40px;
      img {
        cursor: pointer;
        width: 69px;
        height: 65px;
      }
    }

    .mount-green {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
    }

    .green-info {
      width: 154px;
      height: 233px;
      background: url("../assect/pack/green-border.png")no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }

    .green-infos {
      cursor: pointer;
      width: 154px;
      height: 233px;
      background: url("../assect/pack/green-border-op.png")no-repeat;
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

    .mount-green-text {
      padding-top: 46px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
    }

    .mount-btn {
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

    @media (max-width: 1100px) {
      .mount-container {
        width: 100%;
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


        .mount {
          height: 1623px;
        }

        .mount-one-top {
          width: 80%;
        }

        .mount-brown {
          img {
            width: 123px;
            height: 185px;
          }
        }

        .mount-bottom {
          width: 80%;
          height: 1270px;
        }

        .tab-line {
          width: 110px;
        }

        .mount-green {
          flex-wrap: wrap;
          margin-top: 0;
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
