import Eagle from 'eagle.js'
import Vue from 'vue'
import 'animate.css'

import App from './App.vue'

Vue.use(Eagle)

new Vue({
    render: createElement => createElement(App)
}).$mount('#app')