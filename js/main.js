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
            },
            {
                category:"练",
                urls: [{url:"https://leetcode-cn.com/",content:"leetcode-cn"}]
            },
            {
                category: "学",
                urls: [
                    {url:"https://tech.meituan.com/",content:"美团技术团队"},
                    {url:"https://refactoringguru.cn/design-patterns/catalog",content:"设计模式讲解"},
                    {url:"https://account.geekbang.org/dashboard/buy",content:"极客时间"},
                    {url:"http://www.imooc.com/",content:"慕课网"},
                    {url:"https://developer.mozilla.org/zh-CN/docs/Web",content:"W3C"},
                    {url:"http://www.xuetangx.com/",content:"学堂在线"},
                    {url:"https://cn.udacity.com/",content:"优达学院"},
                    {url:"http://study.163.com/curricula/cs.htm",content:"顶尖中文大学计算机专业课程体系"},
                    {url:"http://phpbook.phpxy.com/33183",content:"7天学会PHP"},
                    {url:"https://opensource.guide/zh-cn/",content:"开源指导手册"},
                    {url:"http://linux.vbird.org/",content:"鸟哥的Linux"},
                    {url:"http://cn.linux.vbird.org/",content:"鸟哥的Linux-简体"},
                    {url:"https://learningenglish.voanews.com/",content:"OVA英语听力学习"},
                    {url:"https://study.163.com/",content:"网易云课堂"},
                    {url:"https://boxueio.com/",content:"泊学"},
                    {content:"北京科技大学", url:"http://cec.ustb.edu.cn/cms/"},
                    {content:"Linux就该这么学",url:"https://www.linuxprobe.com/chapter-00.html" },
                    {content:"sublime text文档",url:"http://sublime-text.readthedocs.io/en/latest/editing/editing.html" },
                    {content:"极客学院",url:"http://wiki.jikexueyuan.com/" },
                    {content:"nodeSchool",url:"https://nodeschool.io/zh-cn/" },
                    {content:"酷学园",url:"http://www.study-area.org/menu2.htm" },
                    {content:"测试驱动开发",url:"https://studygolang.gitbook.io/learn-go-with-tests/", title:"Learn go With test"},
                    {content:"LFS",url:"https://linux.cn/lfs/LFS-BOOK-7.7-systemd/index.html", title:"编译自己的Linux"},
                    {content:"我要自学网",url:"https://www.51zxw.net/",title:"自学" },
                    {content:"编程语言预览学习",url:"https://learnxinyminutes.com/", title:"编程语言预览学习"},
                    {content:"算法思想学习",url:"https://labuladong.gitbook.io/algo/", title:"算法思想学习"},
                    {content:"leetcode-Go算法题解",url:"https://books.halfrost.com/leetcode/" },
                    {content:"表严肃",url:"https://biaoyansu.com/", title:"前端学习路径"},
                    {content:"oeasy",url:"http://oeasy.org/", title:"个人生活常用只是教程"},
                    {content:"AntDesign",url:"https://www.yuque.com/ant-design/course/intro", title:"阿里设计框架"},
                    {content:"正则表达式",url:"https://regexr.com/" },
                    {content:"阿里iOS面试题",url:"https://hit-alibaba.github.io/interview/" },
                ]
            },
            {
                category:"读",
                urls:[
                    {content:"RSS",url:"http://azreader.net/" },
                    {content:"swift编程语言",url:"https://www.cnswift.org/" },
                    {content:"神经病出院OC",url:"https://halfrost.com/archives/" },
                    {content:"ObjC中国",url:"https://objccn.io/issues/" },
                    {content:"swiftGG",url:"http://swift.gg/" },
                    {content:"FreeBSD使用手册",url:"https://www.freebsd.org/doc/zh_CN/books/handbook/index.html" },
                    {content:"科技行者",url:"https://www.solidot.org/" },
                    {content:"暴漫",url:"http://baozoumanhua.com/" },
                    {content:"reddit",url:"https://www.reddit.com/" },
                    {content:"infoQ",url:"http://www.infoq.com/cn" },
                    {content:"经济观察报",url:"http://www.eeo.com.cn/" },
                    {content:"GotGitHub",url:"http://www.worldhello.net/gotgithub/" },
                    {content:"开源之道",url:"http://www.ocselected.org/" },
                    {content:"程序员的自我修养",url:"https://leohxj.gitbooks.io/a-programmer-prepares/" },
                    {content:"Affiliate marketing",url:"https://affroad.com/stm%E8%AE%BA%E5%9D%9B-finch%E3%80%8Aaffiliate-marketing-%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97%E3%80%8B%E4%B8%AD%E6%96%87%E7%89%88/" },
                    {content:"Wordpress个人服务商",url:"https://wpshushu.com/wysm/" }
                ]
            },
            {
                category:"器",
                urls:[
                    {content:"随手记",url:"https://www.sui.com/" },
                    {content:"有道云笔记",url:"https://note.youdao.com/web/#/file/recent/markdown/WEBff89278e20d2ecf1f9f7b5deae6b02bb/" },
                    {content:"番茄土豆", url:"https://www.pomotodo.com/"},
                    {content:"看板管理", url:"https://kanbanflow.com/"},
                    {content:"慢慢卖", url:"http://www.manmanbuy.com/"},
                    {content:"linnk", url:"https://linnk.net/my/?#/all"},
                    {content:"户型工具", url:"https://www.kujiale.com/huxing/flash"},
                    {content:"电子书书柜", url:"https://bookset.me/"},
                    {content:"搬书匠", url:"http://www.banshujiang.cn/"},
                    {content:"开发技术应用state", url:"https://stateofdev.com/"},
                    {content:"worktile", url:"https://worktile.com/"},
                    {content:"在线懒设计", url:"https://www.fotor.com.cn/"},
                    {content:"MIT安卓APP制作", url:"http://appinventor.mit.edu/"},
                    {content:"gitbook", url:"http://www.chengweiyang.cn/gitbook/introduction/README.html"},
                    {content:"书栈网", url:"https://www.bookstack.cn/"},
                    {content:"gif", url:"https://www.soogif.com/"},
                    {content:"coding", url:"https://fanyiqing.coding.net/user/teams"},
                    {content:"鸠摩搜索", url:"https://www.jiumodiary.com/",title:"文档搜索引擎"},
                    {content:"Ubuntu代码交流", url:"https://paste.ubuntu.com/"},
                    {content:"image占位图生成", url:"https://dummyimage.com/"},
                    {content:"图标生成", url:"https://squircley.app/"},
                    {content:"搜狗文档翻译", url:"https://fanyi.sogou.com/text",title:"在线文档翻译，免费导出"},
                ]
            },
            {
                category:"财",
                urls:[
                    {content: "十年期国债", url:"https://cn.investing.com/rates-bonds/china-10-year-bond-yield"},
                    {content: "晨星网", url:"http://cn.morningstar.com/main/default.aspx"},
                    {content: "申万指数", url:"http://www.swsindex.com/"},
                    {content: "亿牛网", url:"https://eniu.com",title: "历史ROE市盈率查询"},
                    {content: "it大数据研究报告", url:"http://www.199it.com/archives/category/report"},
                    {content: "i问财", url:"https://www.iwencai.com/robot-index?"},
                    {content: "东方财富数据中心", url:"http://data.eastmoney.com/cjsj/hbgyl.html"},
                    {content: "中国人民银行统计数据", url:"http://www.pbc.gov.cn/diaochatongjisi/116219/116319/index.html"},
                    {content: "https://qieman.com/idx-eval", url:"且慢指数估值"},
                    {content: "指数估值", url:"https://danjuanapp.com/djmodule/value-center?channel=1300100141"},
                    {content: "CRB", url:"http://quote.eastmoney.com/gb/zsCRB.html"},
                ]
            },
            {
                category:"活",
                urls:[
                    {content: "社保", url:"http://www.bjrbj.gov.cn/"},
                    {content: "统考教育", url:"http://server1.cdce.cn/student/default.aspx"},
                    {content: "北京住房公积金", url:"http://www.bjgjj.gov.cn/"},
                    {content: "考试酷", url:"https://www.examcoo.com/index/ku",title:"各类证书考试题库"},
                    {content: "易社保", url:"https://www.eshebao.cn/",title:"自由职业者社保缴纳平台"},
                    {content: "明日故乡", url:"https://guxiang.app/filter-home/",title:"中国版数字游民指南"}
                ]
            },
            {
                category:"英语",
                urls: [
                    {content:"词缀",url:"http://www.prefixsuffix.com/rootchart.php"},
                    {content:"优词",url:"http://www.youdict.com"},
                    {content:"词源",url:"https://www.etymonline.com/"},
                    {content:"dictionary",url:"https://www.dictionary.com/"},
                    {content:"摩西英语",url:"http://www.mosesenglish.com/"},
                ]
            },
            {
                category: "业",
                title: "以此为生",
                urls: [
                    {content:"icon 生成",url:"http://icon.wuruihong.com/"},
                    {content:"苹果过审技巧",url:"http://www.it9188.com/"},
                    {content:"hacking with swift",url:"https://www.hackingwithswift.com/"},
                    {content:"版本分布",url:"https://david-smith.org/iosversionstats/"},
                    {content:"App Store统计数据",url:"https://developer.apple.com/support/app-store/"},
                    {content:"千牛卖家平台",url:"https://myseller.taobao.com/home.htm"},
                ]
            },
            {
                category: "建站",
                urls: [
                    {content: "七麦数据", title:"App Store运营", url:"https://www.qimai.cn/"},
                    {content: "站长工具", url:"http://tool.chinaz.com/"},
                    {content: "最高法大数据", url:"http://www.court.gov.cn/fabu-gengduo-662.html"},
                    {content: "专利搜索", url:"http://www2.soopat.com/Home/IIndex"},
                    {content: "微信公众平台", url:"https://mp.weixin.qq.com/"},
                    {content: "七牛云", url:"https://sso.qiniu.com/"},
                    {content: "配色设计", url:"https://www.materialpalette.com/grey/brown"},
                    {content: "中国色", url:"http://zhongguose.com"},
                    {content: "忘续费域名抢注", title:"帮助抢注忘记续费的域名，收费60$", url:"https://www.pool.com/index.aspx"},
                    {content: "网赚联盟", url:"https://www.fuyuzhe.com/"},
                    {content: "知妖", title:"收集中国古今妖怪", url:"https://www.cbaigui.com/"},
                    {content: "孔夫子", title:"旧书网", url:"https://www.kongfz.com/"},
                    
		        ]
            },
            {
                category: "站长",
                urls: [
                    {content: "面向信仰编程", url:"https://draveness.me/"},
                    {content: "ibian", url:"https://www.ibian.online/"},
                    {content: "陈斌的blog",title:"Emacs提高编程效率", url:"http://blog.binchen.org/categories/index.html"},
                    {content: "Go101", url:"https://gfw.go101.org/article/101.html"},
                    {content: "白明-Go", url:"https://tonybai.com"},
                    {content: "李文周的blog+Go", url:"https://www.liwenzhou.com/"},
                    {content: "白话C++", url:"http://17de.com/library/CPP/"},
                    {content: "绿帽子大学", url:"https://lmzdx.com/"},
                    {content: "刘延栋",  url:"https://liuyandong.com"},
                    {content: "草根站长杨青", url:"https://www.yangqq.com/"},
                    {content: "凯凯刘",  url:"http://liujinkai.com/"},
                    {content: "casa-iOS", url:"https://casatwy.com/"},
                    {content: "酷壳",url:"https://coolshell.cn/"},
                    {content: "macTalk",url:"http://macshuo.com/"},
                    {content: "廖雪峰的官方博客",url:"https://www.liaoxuefeng.com/"},
		        ]
            }
        ]
    }
})
