const dev = {
    host: 'https://www.easy-mock.com/mock',
    api: '',
    // 图片相关
    imgHost: 'http://120.55.195.152:8080/canzhi/api',
    // 获得图片路径  上传图片路径
    imgGetAPI: '/image/p/',
    imgPostAPI: '/image/upload',
}

const prod = {

}

export default process.env.NODE_ENV === 'development' ? dev : prod;