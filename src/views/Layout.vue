<template>
    <div>
        <el-container>
            <el-aside style="width:200px">
                <nav-left></nav-left>
            </el-aside>
            <el-container>
                <el-header style="height:50px">
                    <headers></headers>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavLeft from "@/components/navleft.vue"
import Headers from "@/components/header.vue"
    export default {
        components:{
            NavLeft,
            Headers
        }
    }
</script>

<style scoped>
    .el-header {
        color: #333;
        text-align: center;
        z-index: 11;
        line-height: 40px;
    }
  
    .el-aside {
        background-color:#545c64;
        color: #fff;
        line-height:60px;
        overflow: hidden;
    }
  
    .el-main {
        background-color:#eceef1;
        color: #333;
        text-align: center;
        line-height: 20px;
        height:100vh;
    }
.el-main::-webkit-scrollbar { 
 width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
}

  
</style>