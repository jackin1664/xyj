<template>
  <div class="picture">
    <div class="dig-line">
      <span><img src="../assect/content/laba.png" alt=""> NFT质押挖矿正式上线啦！</span>
    </div>
    <div class="picture-people-one">
      <img src="../assect/picture/people-one.png"/>
    </div>
    <div class="picture-people-two">
      <img src="../assect/picture/people-two.png"/>
    </div>
    <div class="picture-people-twos">
      <img src="../assect/picture/h-monkey.png"/>
    </div>
    <div class="picture-clound">
      <img src="../assect/picture/blackclound.png"/>
    </div>
    <div class="picture-clounds">
      <img src="../assect/picture/h-blackclound.png"/>
    </div>
    <div class="picture-clound-s">
      <img src="../assect/picture/colorclound.png"/>
    </div>
    <div class="picture-clound-ss">
      <img src="../assect/picture/h-colorclound.png"/>
    </div>
  </div>
</template>

<script>
export default {
name: "Picture"
}
</script>

<style scoped lang="less">
  .picture {
    position: relative;
    width: 100%;
    height: 786px;
    background-image: url('../assect/picture/bg.png') ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .picture-people-one {
    position: absolute;
    left: 23%;
    top: 15%;
    z-index: 9;
    img {
      width: 425px;
      height: 656px;
    }
  }

  .picture-people-twos {
    display: none;
  }

  .picture-people-two {
    position: absolute;
    right: 9%;
    top: 4%;
    z-index: 9;
    img {
      width: 499px;
      height: 813px;
    }
  }

  .picture-clound {
    position: absolute;
    left: 0;
    bottom: -18%;
    z-index: 99;
    img {
      width: 100%;
      height: 556px;
    }
  }

  .picture-clound-s {
    position: absolute;
    left: 0;
    bottom: -18%;
    z-index: 98;
    img {
      width: 100%;
      height: 556px;
    }
  }

  .picture-clounds {
    display: none;
  }

  .picture-clound-ss {
    display: none;
  }

  @media (max-width: 960px) {
    .picture {
      width: 100%;
      height: 400px;
      background-image: url('../assect/picture/h-bg.png') ;
      background-size: 100%;
    }

    .picture-people-one {
      left: 0;
      top: 10%;
      img {
        width: 198px;
        height: 328px;
      }
    }



    .picture-people-twos {
      display: block;
      position: absolute;
      right: 0;
      top: 2%;
      z-index: 9;
      width: 40%;
      img {
        width: 100%;
        //height: 402px;
      }
    }

    .picture-people-two {
     display: none;
    }


    .picture-clound {
      display: none;
      img {
        height: 278px;
      }
    }
    .picture-clound-s {
      display: none;
      img {
        height: 278px;
      }
    }

    .picture-clounds {
      position: absolute;
      left: 0;
      bottom: -20%;
      z-index: 98;
      display: block;
      img {
        width: 100%;
      }
    }
    .picture-clound-ss {
      display: block;
      position: absolute;
      left: 0;
      bottom: -18%;
      z-index: 98;
      img {
        width: 100%;
      }
    }
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
    z-index: 9999;

    span {
      width: 1000px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      //margin-right: 20%;
    }
  }

  @media (max-width: 960px) {
    .dig-line {
      span {
        width: 100%;
      }
    }
  }
</style>
