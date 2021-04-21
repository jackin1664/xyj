import Vue from 'vue'
import http from './http'

//接口方法定义
let requests = {
  getMyNFT: (params) => http.get('api/getCoin', params),//首页数据
};
Vue.prototype.$http = requests;
export default requests;
