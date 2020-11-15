<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="margin:15px 0px">
            <el-row>
                <el-col :span="8">
                    <el-input v-model.trim="searchValue" placeholder="手机号、姓名、角色类型"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
                </el-col>
                <el-col :span="8" :offset="8" style="text-align:right">
                    <el-button @click="create" type="primary">新增人员</el-button>
                    <el-button  @click="operate('启动')" type="success" :disabled="!selected.length">启动</el-button>
                    <el-button  @click="operate('删除')" type="danger" :disabled="!selected.length">删除</el-button>
                    <el-button  @click="operate('冻结')" type="info" :disabled="!selected.length">冻结</el-button>
                </el-col>
                <el-dialog title="提示" :visible.sync="dialogFormVisible" width="30%">
                    <el-form :model="form" :rules="rules" ref="forms">
                        <el-form-item label="角色" :required="true" :label-width="formLabelWidth" prop="character">
                            <el-select v-model="form.character" placeholder="请选择角色" style="width:100%">
                                <el-option label="业务人员" value="1"></el-option>
                                <el-option label="审核人员" value="2"></el-option>
                                <el-option label="风控经理" value="3"></el-option>
                                <el-option label="管理员" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="备注" :required="true" :label-width="formLabelWidth" prop="remark">
                            <el-input v-model="form.remark" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="创建原因" :required="true" :label-width="formLabelWidth" prop="reason">
                            <el-input v-model="form.reason" type="textarea" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="close">确 定</el-button>
                    </div>
                </el-dialog>
            </el-row>
        </el-card>
        <el-card>
            <el-table :data="tableData" style="width: 100%" @selection-change="HandleSelectionChange">
                <el-table-column type="selection" ></el-table-column>
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="account" label="账户" width="100px"></el-table-column>
                <el-table-column prop="name" label="用户名" width="100px"></el-table-column>
                <el-table-column prop="character" label="角色" width="100px"></el-table-column>
                <el-table-column prop="remark" label="备注" width="180px"></el-table-column>
                <el-table-column prop="reason" label="创建原因" width="180px"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">{{scope.row.status==1?"已启用":"未启用"}}</template>
                </el-table-column>
                <el-table-column label="操作" width="180px">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handlEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" @click="setting('删除')" type="danger">删除</el-button>
                        <el-button size="mini" @click="setting(scope.row.status==1?'禁用':'启用')" :type="scope.row.status==1?'danger':'success'">{{scope.row.status==1?"禁用":"启用"}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import breadcrumb from '@/mixins/breadCrumb.js'
import {get} from '@/utils/http'
export default {
    mixins:[breadcrumb],
    data(){
        return{
            tableData:[],
            selected:[],
            accountlist:[],
            searchValue:'',
            dialogFormVisible: false,
            form: {
                name: '',
                remark:'',
                reason:'',
                character: '',
                delivery: false,
            },
            formLabelWidth:"80px",
            rules:{
                character:[{required:true,message:"请输入角色",tigger:"change"}],
                remark:[{required:true,message:"请输入备注",tigger:"blur"}],
                reason:[{required:true,message:"请输入创建原因",tigger:"blur"}]
            },
        }
    },
    mounted(){
        this.list()
    },
    methods:{
        list(){
            get("/all").then((res)=>{
                this.tableData=res.data.list
                console.log(1,res)
            })
        },
        close() {
            this.$refs.forms.validate((valid) => {
               if(valid){
                    this.dialogFormVisible = false,
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    }),
                    this.$refs.forms.resetFields()
                } 
            })
        },
     HandleSelectionChange(selection){
        this.selected=selection;
            var arr=selection.map((item)=>{
                return item.account
            });
            this.accountlist=arr
        },
    operate(type){
        this.$notify({
            title: '操作提示',
            message: JSON.stringify(this.accountlist)+type+'成功',
            type: 'success'
            });
        },
    setting(type){
        this.$notify({
            title: '操作提示',
            message: type+'成功',
            type: 'success'
            });
        },
    create(){
        this.dialogFormVisible=true,
            this.form={
            remark:"",
            reason:"",
            character:"",
            };
            
        this.$nextTick(() => {
            this.$refs.forms.clearValidate()
        })
    },
    handlEdit(row){
        this.dialogFormVisible = true,
        this.form={
                remark:row.remark,
                reason:row.reason,
                character: row.character,
            };
        }
    }
}
</script>

<style scoped>
.el-button{
    padding: 6px 8px;
}
</style>