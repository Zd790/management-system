<template>
    <div>
        <div class="head">
            <el-dropdown @command="fn">
                <span class="el-dropdown-link">
                    欢迎你{{info}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="b">修改密码</el-dropdown-item>
                    <el-dropdown-item command="c">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <p class="date">今天是你在阿里的第<span class="tips">{{days}}</span>天</p>
        <div class="clear"></div>
    </div>
</template>

<script>
import {get} from "@/utils/http.js"
import {removeToken} from "@/utils/auth.js"
    export default {
        data(){
            return{
                time:"",
                info: sessionStorage.getItem("nickname")
            }
        },
        mounted(){
            get("/in").then((res)=>{
                this.time=res.time
            })
        },
        methods:{
           fn(m){
               if(m=="c"){
                   removeToken()
                   this.$router.push("/login")
               }else if(m=="a"){
                   this.$router.push("/my")
               }
           }
        },
        computed:{
            days(){
                let target = new Date(this.time)
                let now = new Date()
                return Math.floor((now-target)/1000/60/60/24)
            }
        }
    }
</script>

<style scoped>
    .head,.date{
        float: right;
        letter-spacing: 2px;
    }
    .head{
        margin-left: 15px;
    }
    .tips{
        font-size: 26px;
        margin: 0 5px;
        font-weight: bold;
        color: aqua;
    }
</style>