import Details from '@views/public/details/view.vue'
import AxiosPage from '@views/public/axios_page/view.vue'

let routers = [{
    path: '/public/details',
    name: 'details',
    component: Details
}, {
    path: '/public/axios_page',
    name: 'axiosPage',
    component: AxiosPage
}]

export default routers;