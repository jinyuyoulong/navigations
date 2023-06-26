var app = new Vue({
    el: "#app",
    data: {
        groups: [
            {
                category:"论坛",
                urls:[
                    {url: "https://www.v2ex.com/",title: "",content:"v2ex", class:"item"},
                    {url: "https://www.macx.cn/",title: "",content:"苹果福利社", class:"item"},
                    {url: "http://www.lkong.net/forum.php",title: "",content:"龙空", class:"item"},
                    {url: "http://laravel-china.org",title: "",content:"Laravel", class:"item"},
                    {url: "http://www.oschina.net",title: "",content:"开源中国", class:"item"},
                    {url: "https://www.hostloc.com/forum.php",title: "",content:"全球主机交流", class:"item"},
                    {url: "https://eleduck.com/",title: "自由职业者论坛",content:"电鸭社区", class:"item"},
                    {url: "https://beijing.craigslist.org/",title: "",content:"craigslist", class:"item"},
                    {url: "https://gocn.vip/",title: "",content:"Go中国技术社区", class:"item"},
                    {url: "https://studygolang.com/",title: "",content:"Go中文论坛", class:"item"},
                    {url: "https://www.huodongxing.com/",title: "线下论坛",content:"活动行", class:"item"},
                    {url: "https://emacs-china.org/top/monthly",title: "emacs社区",content:"emacs-china", class:"item"},
                    {url: "https://segmentfault.com/",title: "",content:"思否", class:"item"},
                    {url: "https://juejin.cn",title: "一个帮助开发者成长的社区，技术总结文章",content:"掘金", class:"item"}
                ]
            },
            {
                category:"文档",
                urls:[
                    {url: "https://rsy.me/gin-chn-document/",title: "",content:"gin"},
                    {url: "https://studygolang.com/pkgdoc",title: "",content:"Go"},
                    {url: "https://swiftgg.gitbook.io/swift/",title: "",content:"Swift"},
                    {url: "http://www.fuzihao.org/blog/2015/02/19/org-mode教程",title: "",content:"org-mode教程"}
                ]
            }
        ]
    }
})