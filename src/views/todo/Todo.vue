<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div  v-for="(item,index) in Todo " :key="index">
                <el-row  style="margin:15px">
                    <el-col :span="2">待办事项      {{index+1}}.</el-col>
                    <el-col :span="2"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="9">{{item.content}}</el-col>
                    <el-col :span="2"><el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="9">
                        <el-progress :percentage="item.percentage" :color="item.color"></el-progress>
                    </el-col>
                </el-row>
            </div>
        </el-card>   
    </div>
</template>

<script>
import breadcrumb from '@/mixins/breadCrumb.js'
    export default {
        mixins:[breadcrumb],
        data(){
            return{
                Todo:[{
                    content:"与赵铁柱签订抵押贷款合同",
                    percentage:70,
                    color:"#f56c6c",
                },{
                    content:"与刘二狗商定汽车消费细则",
                    percentage:50,
                    color:"#fffc6c",
                },{
                    content:"对所有订单进行审核",
                    percentage:60,
                    color:"#febc6c",
                },{
                    content:"与赵铁柱签订抵押贷款合同",
                    percentage:46,
                    color:"#f86c6c",
                },{
                    content:"与刘二狗商定汽车消费细则",
                    percentage:59,
                    color:"#fbfc6c",
                },{
                    content:"对所有订单进行审核",
                    percentage:88,
                    color:"#feec6c",
                }]
            }
        }
    }
</script>

<style scoped>

</style>