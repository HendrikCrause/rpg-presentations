import Vue from 'vue'
import Eagle from 'eagle.js'
import 'animate.css'
import '~/styles/globals.scss'

import App from '~/App.vue'

Vue.use(Eagle)

new Vue({
    render: createElement => createElement(App)
}).$mount('#app')