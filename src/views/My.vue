<template>
    <div>
        <el-page-header @back="goBack" style="font-size: 14px"></el-page-header>
        <el-row>
            <el-col :span="6" style="background:#ebebec;height:100vh">
                <div class="left">
                    <el-avatar style="margin: 10vh 0 2vh 0;" shape="circle" :size="80">张</el-avatar>
                    <h4>MeiHua Su</h4><p>枯木会逢春  你也会与美好相遇</p>
                    <div class="job">
                        <i class="el-icon-suitcase"></i>   前端工程师<br>
                        <i class="el-icon-mouse"></i>   XX金融--某某事业群--某某平台部--某某技术部<br>
                        <i class="el-icon-office-building"></i>   北京市海淀区<br>
                    </div>
                    <el-divider></el-divider>
                    <div style="text-align:left">
                        <p>标签</p>
                        <el-tag type="info" size="small">创新</el-tag>
                        <el-tag type="info" size="small">专注力</el-tag>
                        <el-tag type="info" size="small">人群里的开心果</el-tag>
                        <el-tag type="info" size="small">聪明</el-tag>
                        <el-tag type="info" size="small">+</el-tag>
                    </div>
                    <div style="text-align:left">
                        <p style="margin:13px 0px">团队</p>
                        <el-row>
                                <div v-for="(item,index) in teams" :key="index" style="width:50%;float:left">
                                    <el-avatar style="float:left;margin:5px 8px" shape="circle" :size="25">{{item.name}}</el-avatar>
                                    <p style="font-size:12px">{{item.title}}</p>
                                    <div class="clear"></div>
                                </div>
                        </el-row>

                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="right">
                    <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="文章(98)" name="first">
                                <el-card class="card">
                                <h1>产品信息<el-badge class="mark" :value="12" type="primary" /></h1>
                                <el-row class="product-detail">
                                    <el-col :span="5">
                                        <p>标题:上海甲壳虫车质贷</p>
                                        <p>借款总金额:90000元</p>
                                        <p>是否定向标:是</p>
                                        <p>还款来源:月薪8000</p>
                                        <p>合伙人:王成元</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>借款人用户名:王全安</p>
                                        <p>年利率:12%+0.5%</p>
                                        <p>定向标密码:123456</p>
                                        <p>所属大区:浙江</p>
                                        <p>是否允许提前还款:否</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>用户等级:95分</p>
                                        <p>借款用途:资金周转</p>
                                        <p>借最低投标额:10000</p>
                                        <p>所属营业部:杭州营业部</p>
                                        <p>受托支付标识:非受托支付</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>标的类型:质押贷</p>
                                        <p>借款期限:三个月</p>
                                        <p>最高投标额:无上限</p>
                                        <p>所属业务员:苏澄海</p>
                                        <p>收款人手机号:18888888888</p>
                                    </el-col>
                                    <el-col :span="4">
                                        <p>借款人信息:此人有还款能力</p>
                                        <p>有效时间:七天</p>
                                        <p>还款方式:先息后本</p>
                                        <p>渠道来源:合伙人</p>
                                        <p>垫款时间:2020-09-20</p>
                                    </el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <h1>费用明细</h1>
                                <el-row class="product-detail">
                                    <el-col :span="5">
                                        <p>利息B:2%</p>
                                        <p>GPS成本费:500元</p>
                                        <p>手续费:500</p>
                                        <p>首月利息:1000</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>借分期管理费:2000元</p>
                                        <p>停车费:500</p>
                                        <p>押金:10000元</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>借款管理费:2000元</p>
                                        <p>续贷提现费:500元</p>
                                        <p>预留保费:1000</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>保证金:500元</p>
                                        <p>VIP发标费:500元</p>
                                        <p>业务服务费:5000</p>
                                    </el-col>
                                    <el-col :span="4">
                                        <p>风险金:500</p>
                                        <p>信贷提现费:500</p>
                                        <p>业务手机号:13012345678</p>
                                    </el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <h1>资产明细</h1>
                                <el-row class="product-detail">
                                    <el-col :span="5">
                                        <p>车辆品牌:大众</p>
                                        <p>评估金额:80000元</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>车辆型号:甲壳虫豪华版</p>
                                        <p>数量:1</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>车牌号:浙B888888</p>
                                    </el-col>
                                    <el-col :span="5">
                                        <p>购车年份:2018年</p>        
                                    </el-col>
                                    <el-col :span="4">
                                        <p>购车价格:90000元</p>
                                    </el-col>
                                </el-row>
                            </el-card>
                            </el-tab-pane>
                            <el-tab-pane label="应用(11)" name="second">
                                <div class="block">
                                    <el-timeline :reverse="reverse">
                                        <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :timestamp="activity.timestamp">
                                        {{activity.content}}
                                        </el-timeline-item>
                                    </el-timeline>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="项目(25)" name="third">这是项目页面</el-tab-pane>
                        </el-tabs>
                    </template>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                teams:[
                    {
                        name:'黑',
                        title:'小黑课堂'
                    },
                    {
                        name:'软',
                        title:'软件工程师奇谈'
                    },
                    {
                        name:'学',
                        title:'学习之巅'
                    },
                    {
                        name:'前',
                        title:'前端历劫成仙之路'
                    }],
                    reverse: true,
                    activities: [{
                    content: '分析'
                    }, {
                    content: '设计'
                    }, {
                    content: '选择框架'
                    },{
                    content: '开发'
                    }, {
                    content: '测试'
                    }, {
                    content: '应用的发布'
                    }],
                activeName: 'first'
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.left{
    font-size: 14px;
    margin-right:10px;
    padding: 0 10px 30px 10px;
    text-align: center;
    background: #fff;
}
.left p{
    margin-top: 8px;
}
.job{
    width: 90%;
    font-size: 14px;
    margin-left: 5%;
    text-align: left;
    margin-top: 10px;
    line-height: 25px;
}
.el-tag{
    margin: 10px 3px;
}
.right{
    height: 100vh;
    padding: 0 10px;
}
</style>