/**
 * service worker 监听数据发送。
 */
self.addEventListener('message', function (event) {
    var promise = self.clients.matchAll().then(function (clientList) {
        var senderId = event.source ? event.source.id : 'unknown'

        clientList.forEach(function (client) {
            if (client.id == senderId) {
                return
            } else {
                client.postMessage({
                    client: senderId,
                    message: event.data
                })
            }
        })
    })

    event.waitUntil(promise)
})