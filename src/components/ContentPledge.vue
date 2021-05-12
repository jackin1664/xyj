    <template>
      <div class="ple">
        <div class="dig-line">
          <span><img src="../assect/content/laba.png" alt=""> NFT质押挖矿正式上线啦！</span>
        </div>
        <div class="ple-container">
          <!--              上部分-->
          <div class="ple-one-top">
            <img src="../assect/pack/text.png"/>
          </div>
          <!--          内容-->
          <div class="ple-bottom">
            <!--              上部分-->
            <div class="ple-select">
              <div class="ple-select-left">
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
                <div class="select-info select-infoss">
                  <div @click="showAll=!showAll" class="select-info-top">
                    <div class="select-top-title">{{all}}</div>
                    <img src="../assect/pack/arrow-bottom.png"/>
                  </div>

                  <img class="tab-line" src="../assect/pack/line.png"/>
                  <div v-show="showAll" class="select-tab">
                    <div v-for="(item,index) in tabAll" class="tab-info" :key="index" @click="actionAll(item)">
                      <span>{{item.name}}</span>
                      <!--                    <img class="tab-line" src="../assect/pack/line.png"/>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--            下部分-->
            <div class="ple-green">
<!--              <div class="green-info"></div>-->
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>
              <div class="green-infos">
                <img src="../assect/pack/right.png"/>
              </div>

            </div>
            <div class="ple-green-text">
              已选中，最多可选1张
            </div>
            <div class="ple-btn">
              <div class="yellow-btn" >合成</div>
              <span></span>
              <div class="zhuan-btn">质押</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import '../css/base.less'
    export default {
      name: "ContentPledge",
      data () {
        return {
          showSort:false,//排序显隐
          showType:false,//类型显隐
          showAll:false,//全选
          all:'全选',//
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
          tabAll:[
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
        actionAll(item) {
          this.all=item.name
          this.showAll=false
        },
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
    .ple {
      position: relative;
      width: 100%;
      height: 1200px;
      background-image: url('../assect/content/bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
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

    .ple-bottom {
      width: 988px;
      height: 515px;
      background: url("../assect/pack/bg.png")no-repeat;
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

    @media (max-width: 1100px) {
      .ple-container {
        width: 100%;
      }
      @media (max-width: 960px) {


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


        .ple {
          height: 1223px;
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
          height: 900px;
        }

        .tab-line {
          width: 70px;
        }

        .ple-green {
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
