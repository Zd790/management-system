<template>
    <div>
        <el-row type="flex"  justify="center">
            <el-card class="wrap">
                <div slot="header" class="clearfix">
                    <h2 style="text-align:center">樱花金融后台管理系统</h2>
                </div>
                <div >
                    <el-form 
                        :model="ruleForm"
                        :rules="rules" 
                        ref="ruleForm" 
                        label-width="100px" 
                        class="demo-ruleForm"
                    >
                        <el-form-item label="用户名" prop="username" label-width="80px" style="margin-bottom:30px">
                            <el-input type="textb " v-model.trim="ruleForm.username" placeholder="输入用户名"  autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password" label-width="80px">
                            <el-input type="password" v-model.trim="ruleForm.password"  placeholder="输入密码" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label-width="80px">
                            <el-button type="primary" @click="login()" style="width:90%">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
// import service from "@/utils/service"
import {post} from "@/utils/http.js"
import {setToken} from "@/utils/auth.js"
    export default {
        data(){
            var checkName = /^[a-zA-Z]{3,5}[0-9]*$/;
            var checkname = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    if (checkName.test(value)) {
                        callback();
                    }else{
                        callback(new Error('用户名格式不正确'));
                    }
                }
            };
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required:true,validator:checkname, trigger:'blur' }
                    ],
                    password: [
                        {required:true,message:"密码不能为空",trigger:'blur'},
                        {min:5,max:10,message:"密码格式不正确",trigger:'blur'}
                    ]
                }
            };
        },
        methods:{
            login() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid){
                        post("/login",this.ruleForm).then((res)=>{
                            setToken(res.token),
                            sessionStorage.setItem("nickname",res.nickname)
                            this.$router.push("/")
                        }).catch((error)=>{
                            console.log(error)
                        })
                    }
                });
            },
        }
    }
</script>

<style scoped>
.wrap{
    width: 500px;
    margin-top: 200px;
}
</style>