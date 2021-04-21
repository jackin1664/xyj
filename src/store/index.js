import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        account: {
            state: {
                default_address: ""
            },
            mutations: {
                setAccountKey(state, obj) {
                    for (let key in obj) {
                        state[key] = obj[key];
                    }
                },
            },
        },
    },
});
