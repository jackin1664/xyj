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
                <div class="info-title">TMK Inocme</div>
                <div class="info-num">0</div>
              </div>
              <div class="info-content info-contents">
                <div class="info-logo">
                  <div class="info-round">logo</div>
                  <div class="info-round info-round-two">logo</div>
                </div>
                <div class="info-title">TMK/BNB LP Stake</div>
                <div class="info-num">0</div>
              </div>
            </div>
            <div class="rec-btn">
              <img src="../assect/receipt/withdraw.png"/>
              <img src="../assect/receipt/approve.png"/>
              <img src="../assect/receipt/withdraw-all.png"/>
              <img src="../assect/receipt/haverst.png"/>
            </div>
          </div>
        </div>
      </template>

      <script>
      import '../css/base.less'
      export default {
        name: "ContentReceipt"
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
          .rec-btn  {
            width: 80%;
            img {
              width: 158px;
              height: 31px;
            }
          }

        }


      </style>
