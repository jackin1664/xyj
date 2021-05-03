import vue from 'vue'

import toastComponent from './toast.vue'
import toastDocComponent from './toastDoc.vue'

// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(toastComponent)
const ToastDocConstructor = vue.extend(toastDocComponent)

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(text, duration = 2000) {

    // 实例化一个 toast.vue
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                text:text,
                show:true
            }
        }
    })

    // 把 实例化的 toast.vue 添加到 body 里
    document.body.appendChild(toastDom.$el)

    // 过了 duration 时间后隐藏
    setTimeout(() => {toastDom.show = false} ,duration)
}
function showDocToast(title,text) {

    // 实例化一个 toast.vue
    const toastDom = new ToastDocConstructor({
        el: document.createElement('div'),
        data() {
            return {
                title:title,
                text:text,
                show:true
            }
        }
    })

    // 把 实例化的 toast.vue 添加到 body 里
    document.body.appendChild(toastDom.$el)
}

// 注册为全局组件的函数
function registryToast() {
    // 将组件注册到 vue 的 原型链里去,
    // 这样就可以在所有 vue 的实例里面使用 this.$toast()
    vue.prototype.$toast = showToast
    vue.prototype.$toastDoc = showDocToast
}

export default registryToast
