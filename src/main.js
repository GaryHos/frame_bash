import Vue from 'vue'
import router from './router'
import init from '@common/app.init'

init((cb) => {
    window.$root = new Vue({
        el: '#app',
        router,
        template: `
			<transition name="fade">
				<router-view></router-view>
			</transition>
		`,
    })
})

