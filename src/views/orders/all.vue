<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card style="text-align:left">
            <el-radio-group v-model="radio1">
                <el-radio-button :label="1">待审核</el-radio-button>
                <el-radio-button :label="2">审核中</el-radio-button>
                <el-radio-button :label="3">审核通过</el-radio-button>
                <el-radio-button :label="4">审核拒绝</el-radio-button>
                <el-radio-button :label="5">已放款</el-radio-button>
            </el-radio-group>
            <keep-alive>
                <component v-bind:is="currentTabComponent" class="tab"></component>
            </keep-alive>
            <my-tabs></my-tabs>
        </el-card>
    </div>
</template>

<script>
import breadcrumb from '@/mixins/breadCrumb.js';
import myTabs1 from './tabs1';
import myTabs2 from './tabs2';
import myTabs3 from './tabs3';
import myTabs4 from './tabs4';
import myTabs5 from './tabs5'
export default {
  mixins: [breadcrumb],
  data() {
    return {
      radio1: 1,
    };
  },
  computed:{
      currentTabComponent(){
          return "myTabs"+this.radio1
      }
  },
  components:{
      myTabs1,myTabs2,myTabs3,myTabs4,myTabs5
  }
};
</script>

<style scoped>

</style>