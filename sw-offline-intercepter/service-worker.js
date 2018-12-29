/**
 * 当service worker在 install 也就是初始化的时候做一些事情。
 */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('app-v1') // 打开一个缓存
        .then(function (cache) {
            console.log('open cache')
            return cache.addAll([ // 将获取的缓存加入到缓存中
                './style.css',
                'index.html',
                'index.js'
            ])
        })
    )
})

/**
 * 每次请求过来，通过fetch进行请求拦截，将service worker的缓存返回给请求
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (res) {
            if (res) {
                return res
            } else {
                // 如果没有的话，去网络上得到资源。
            }
        })
    )
})