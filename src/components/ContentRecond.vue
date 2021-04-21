    <template>
      <div class="rec">
        <div class="dig-line">
          <span>NFT质押挖矿正式上线啦！</span>
        </div>
        <div class="rec-container">
          <div class="rec-title">交易记录</div>
          <!--            内容-->
          <div class="rec-content">
            <div class="rec-text">您暂无交易记录，快去购买卡牌吧！</div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import '../css/base.less'
    export default {
      name: "ContentRecond",
    }
    </script>


    <style scoped lang="less">
    .rec {
      position: relative;
      width: 100%;
      height: 600px;
      background-image: url('../assect/content/bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .rec-container {
      padding-top: 40px;
      width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .rec-title {
      width: 90%;
      text-align: left;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #E7E0D0;
    }

    .rec-text {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #E7E0D0;
    }

    .rec-content {
      margin-top: 15px;
      width: 988px;
      height: 354px;
      line-height: 345px;
      background-image: url('../assect/invite/bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }



    @media (max-width: 1100px) {
      .rec-container {
        width: 100%;
      }
    }

    @media (max-width: 960px) {
      .rec-content {
        width: 90%;
        //height: 548px;
      }
    }



    </style>
