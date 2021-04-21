/*
2 * 路由对象模块
3 * */
import Vue from 'vue'
import VueRouter from 'vue-router'


/*引入*/
const Home = () => import('../Views/Home');
const Buy = () => import('../Views/Buy');
const Dig = () => import('../Views/Dig');
const Receipt = () => import('../Views/Receipt');
const Stop = () => import('../Views/Stop');
const Pack = () => import('../Views/BackPack');
const Mount = () => import('../Views/Mount');
const Invite = () => import('../Views/Invite');
const ReCord = () => import('../Views/ReCord');

//申明使用插件
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: "/buy",
        component: Buy,
    },
    {
        path: "/dig",
        component: Dig,
    },
    {
        path: "/receipt",
        component: Receipt,
    },
    {
        path: "/stop",
        component: Stop,
    },
    {
        path: "/pack",
        component: Pack,
    },
    {
        path: "/mount",
        component: Mount,
    },
    {
        path: "/invite",
        component: Invite,
    },
    {
        path: "/record",
        component: ReCord,
    }

]
export default new VueRouter({
    mode: 'history',
    routes
})
