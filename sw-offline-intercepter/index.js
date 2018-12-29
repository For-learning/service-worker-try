if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js', {
        scope: './' // 设置的domain，这host下所有的请求都会进行拦截通过 service worker
    }).then(function (reg) {
        console.log(reg)
    }).catch(function (e) {
        console.log(e)
    })

} else {
    alert('Your browser is not support service worker')
}