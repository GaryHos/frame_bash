import Vue from 'vue';
import Router from 'vue-router';

// 按模块引入
import homeRoute from './route.home.js';
import publicRoute from './route.public.js';

Vue.use(Router)
const router = new Router();

router.addRoutes(homeRoute);
router.addRoutes(publicRoute);

export default router
