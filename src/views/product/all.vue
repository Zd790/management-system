<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="15">
                <el-col :span="6">
                    <el-input placeholder="产品名称" v-model.trim="searchValue" size="mini"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-select v-model="rateValue" placeholder="利率" style="width:100%" size="mini">
                                <el-option label="3.8%" value="3.8">3.8</el-option>
                                <el-option label="3.9%" value="3.9">3.9</el-option>
                                <el-option label="4.1%" value="4.1">4.1</el-option>
                                <el-option label="4.3%" value="4.3">4.3</el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                    v-model="dateValue"
                    type="daterange"
                    size="mini"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" size="mini" @click="search">查询</el-button>
                    <el-button type="primary" size="mini" @click="reset" style="margin-right:10px">重置</el-button>
                    <span class="el-dropdown-link" @click="expand"  style="font-size:12px" v-show="!advanced">
                        展开<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <span class="el-dropdown-link" @click="expand"  style="font-size:12px" v-show="advanced">
                        收起<i class="el-icon-arrow-up el-icon--right"></i>
                    </span>
                </el-col>
            </el-row>
            <el-row :gutter="15" style="margin-top:10px" v-show="advanced">
                <el-col :span="6">
                    <el-select v-model="typesValue" placeholder="产品类别" style="width:100%" size="mini">
                                <el-option label="汽车消费" value="1">汽车消费</el-option>
                                <el-option label="房产消费" value="2">房产消费</el-option>
                                <el-option label="抵押贷款" value="3">抵押贷款</el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-select v-model="stagesValue" placeholder="最高分期数" style="width:100%" size="mini">
                                <el-option label="24" value="1">24</el-option>
                                <el-option label="36" value="2">36</el-option>
                                <el-option label="60" value="360">60</el-option>
                                <el-option label="360" value="4">360</el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-select v-model="statusValue" placeholder="状态" style="width:100%" size="mini">
                                <el-option label="1" value="1">已启用</el-option>
                                <el-option label="2" value="2">已禁用</el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="margin-top:15px">
            <el-row style="float:left">
                <el-button type="primary" @click="publish">+ 产品发布</el-button>
            </el-row>
            <el-table :data="tableData" style="width: 100%;font-size:12px">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="name" label="产品名称"></el-table-column>
                <el-table-column prop="type" label="产品类别"></el-table-column>
                <el-table-column prop="rate" label="利率"></el-table-column>
                <el-table-column prop="date" label="开放日期"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template  slot-scope="scope">
                        <el-button size="mini" :type="scope.row.status==1?'success':'danger'" effect="dark">{{scope.row.status==1?"已启用":"已禁用"}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="highest" label="最高分期数（月）" width="120px"></el-table-column>
                <el-table-column prop="number" label="申请客户数量"></el-table-column>
                <el-table-column prop="total" label="累计签约金额"></el-table-column>
                <el-table-column prop="average" label="件均"></el-table-column>
                <el-table-column label="操作" width="150px">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="setting(scope.row.status==1?'禁用':'启用')" :type="scope.row.status==1?'danger':'success'">{{scope.row.status==1?"禁用":"启用"}}</el-button>
                        <el-button size="mini" type="primary" @click="details">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <all-module :accuseVisible="accuseVisible" @close-dialogStatus="Close_dialog"></all-module>
    </div>
</template>

<script>
import {get} from '@/utils/http.js'
import allModule from "./allModule"
import breadcrumb from '@/mixins/breadCrumb.js'
    export default {
        mixins:[breadcrumb],
        data(){
            return{ 
                searchValue:"",
                rateValue:"",
                dateValue:"",
                typesValue:"",
                stagesValue:"",
                statusValue:"",
                advanced:false,
                tableData:[],
                params:{},
                accuseVisible: false
                
            }
        },
        mounted(){
            this.list()
        },
        methods:{
            expand(){
                this.advanced=!this.advanced
            },
             Close_dialog(data){
                this.accuseVisible=data
            },
            publish(){
                this.accuseVisible = true
            },
            list(){
                get("/productList").then((res)=>{
                    this.tableData=res.data.list
                    console.log(1,res)
                })
            },
            setting(type){
                this.$notify({
                    title: '操作提示',
                    message: type+'成功',
                    type: 'success'
                    });
            },
            search(){
                // this.$moment(this.dateValue[0]).valueOf()  
                this.params.dateValue=[this.$moment(this.dateValue[0]).format('YY-MM-DD'),this.$moment(this.dateValue[1]).format('YY-MM-DD')]
                console.log(this.params.dateValue) 
            },
            reset(){
                this.searchValue="",
                this.rateValue="",
                this.dateValue="",
                this.typesValue="",
                this.stagesValue="",
                this.statusValue=""
            },
            details() {
                this.$router.push("/product/details");
            },
        },
 components:{
    allModule
  }
    }
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.el-input__inner{
    width: 100%;
}
</style>