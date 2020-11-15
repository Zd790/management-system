<template>
    <div style="width:200px,height:100vh">
        <h4 style="text-align:center">樱花金融后台管理系统</h4>
        <el-menu
            text-align="left"
            text-color="#fff"
            background-color="#545c64"
        >
            <menus  v-for="(item,index) in menuData" :menu="item" :key="index"></menus>
        </el-menu>
    </div>
</template>

<script>
import {get} from "@/utils/http.js"
import menus from "./menu"
    export default {
        data(){
            return{
                menuData:[]
            }
        },
        mounted(){
            get("/menu").then((res)=>{
                console.log(res)
                this.menuData=res.data
            })
        },
        components:{
            menus
        }
    }
</script>

<style scoped>
.el-menu{
    border: none;
}
</style>