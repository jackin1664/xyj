import Vue from 'vue'
import http from './http'

//接口方法定义
let requests = {
  getMyWeapon: (params) => http.post('api/getMyWeapon', params),//首页数据
  getyMyCard: (params) => http.post('api/getyMyCard', params),//首页数据
  getBuyList: (params) => http.post('api/getBuyList', params),//首页数据
  queryMyInv: (params) => http.post('api/queryMyInv', params),//首页数据
};
Vue.prototype.$http = requests;
export default requests;
