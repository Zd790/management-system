<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="always" style="background:#5088ff;color:#fff">
                    <i class="el-icon-tickets ico"></i>
                    <div class="float:left">
                        <p>本月进件</p>
                        <p style="font-weight:bold">6588</p>
                        <p>+20.12%  <span style="font-size:10px">与上月同比</span></p>
                    </div>
                    <div class="clear"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" style="background:#f54a76;color:#fff">
                    <i class="el-icon-money ico"></i>
                    <div class="card-con">
                        <p>本月放款（元）</p>
                        <p style="font-weight:bold">121000000</p>
                        <p>+1.25%  <span style="font-size:10px">与上月同比</span></p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" style="background:#4c3cff;color:#fff">
                    <i class="el-icon-date ico"></i>
                    <div class="float:left">
                        <p>累计进件</p>
                        <p style="font-weight:bold">128700</p>
                        <p>+11.48%  <span style="font-size:10px">与去年同比</span></p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" style="background:#fd9d3a;color:#fff">
                    <i class="el-icon-coin ico"></i>
                    <div class="float:left">
                        <p>累计放款</p>
                        <p style="font-weight:bold">923380079</p>
                        <p>-2.06%<span style="font-size:12px">与去年同比</span></p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="18">
                <el-card>
                    <div ref="analysis" style="height:200px;"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <div ref="circle" style="height:200px;"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
            <el-col :span="12">
                    <el-calendar v-model="value"></el-calendar>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:new Date()
            }
        },
        mounted(){
            this.drawline(),
            this.drawpie()
        },
        methods:{
            drawline(){
                //初始化容器
                var myChart = this.$echarts.init(this.$refs["analysis"])
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text:"进件统计分析",
                        x:"center",
                        textAlign:"left"
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['20-01', '20-02', '20-03', '20-04', '20-05', '20-06', '20-07']
                        },
                    yAxis: {
                        type: 'value',
                        max:'100'
                    },
                    series: [{
                        data: [30,84,56,47,84,61,90],
                        type: 'line',
                        smooth:true,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#4f88ff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        itemStyle: {
                            borderColor: "#4f88ff"
                        },
                        lineStyle:{
                            color:"#4f88ff"
                        }
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            drawpie(){
                //初始化容器
                var myChart = this.$echarts.init(this.$refs["circle"])
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    title:{
                        text:"进件产品占比",
                        x:"center",
                        textAlign:"left",
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
        
    }
</script>

<style scoped>
.el-row{
    margin-top: 15px;
}
.el-timeline,.el-calendar{
    text-align: left;
    background:#fff ;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 0 20px 2px #d5d6d9;
}
.el-calendar-day{
    height: 50px !important;
}
.ico{
    float: right;
    display: block;
    color: #ebebec;
    font-size: 50px;
}
</style>