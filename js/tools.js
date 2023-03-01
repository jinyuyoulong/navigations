var app = new Vue({
    el: "#app",
    data: {
        age: "",
        m_num:"",
        y_num: "",
        rate: ""
    },
    methods: {
        
    },
    computed:{
        m_y_num: function () {
            if (!this.y_num) {
                this.y_num = this.m_num * 12
            }
            return this.y_num.toLocaleString()
        },
        m_m_num: function () {
            if (!this.m_num) {
                this.m_num = this.y_num/12
            }
            return this.m_num.toLocaleString()
        },
        totolNum: function () {
            // 财务自由实现资本=日常开支/被动收益率
            let realRate = this.rate/100
            let totalNum = retireNumberOfYear(this.y_num,realRate)
            console.log(totalNum)
            if (!totalNum) {
                return 0
            }else{
                return totalNum.toLocaleString()
            }
        },
        realRate: function () {
            if (!this.rate) {
                return 0
            }
            return this.rate-3
        }
    }
})