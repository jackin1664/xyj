      <template>
        <div class="inv">
          <div class="dig-line">
            <span>NFT质押挖矿正式上线啦！</span>
          </div>
          <div class="inv-container">
            <div class="inv-title">邀请好友</div>
<!--            内容-->
            <div class="inv-content">
              <div class="inv-content-text">
                <span>分享链接邀请好友，</span> <br>
                <span>每邀请10个好友通过链接登录并任意消费，</span> <br>
                <span>邀请者可免费随机获得一张卡牌。</span> <br>
              </div>
              <div class="inv-href">
                <a>http://www.xxx.com</a>
              </div>
              <img class="inv-copy"  src="../assect/invite/copy.png"/>
              <div class="inv-content-success">已成功邀请100位好友，已免费获得10张卡牌</div>
            </div>
          </div>
        </div>
      </template>

      <script>
      import '../css/base.less'
      export default {
        name: "ContentInvite"
      }
      </script>

      <style scoped lang="less">
      .inv {
        position: relative;
        width: 100%;
        height: 600px;
        background-image: url('../assect/content/bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .inv-container {
        padding-top: 40px;
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .inv-title {
        width: 90%;
        text-align: left;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #E7E0D0;
      }

      .inv-content {
        margin-top: 15px;
        width: 988px;
        height: 354px;
        background-image: url('../assect/invite/bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .inv-content-text {
        padding-top: 52px;
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #E7E0D0;
      }

      .inv-href {
        margin-top: 30px;
        width: 550px;
        height: 42px;
        background:url("../assect/invite/line.png")no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 42px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFD477;
      }

      .inv-copy {
        margin-top: 5px;
        width: 102px;
        height: 51px;
      }

      .inv-content-success {
        margin-top: 30px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #E7E0D0;
      }

      @media (max-width: 1100px) {
        .inv-container {
          width: 100%;
        }
      }

      @media (max-width: 960px) {
        .inv-content {
          width: 90%;
          //height: 548px;
        }
        .inv-href {
          width: 80%;
        }
        .inv-content-text {
          font-size: 16px;
        }
        .inv-content-success {
          font-size: 16px;
        }
      }



      </style>
