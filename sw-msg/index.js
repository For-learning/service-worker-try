if (navigator.serviceWorker) {

    var sendBtn = document.getElementById('sendBtn')
    var sendVal = document.getElementById('sendInput').value
    var msgBox = document.getElementById('msgBox')

    // 主页面向sm发送数据
    sendBtn.addEventListener('click', function () {
        // 主页面向service worker发送数据
        navigator.serviceWorker.controller.postMessage(sendVal)
    })

    navigator.serviceWorker.addEventListener('message', function (event) {
        console.log(event)

        msgBox.innerHTML = msgBox.innerHTML + ' && ' + event.data.message
    })

    // Register service worker
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