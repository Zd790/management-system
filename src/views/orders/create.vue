<template>
  <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    <el-form ref="form" :model="form">
      <el-card>
        <div style="margin:10px;margin-left:0;text-align:left">
          <span style="width:4px;height:18px;background:#5696ff;display:inline-block"></span>
          <p
            style="line-height:20px;display:inline-block;vertical-align:middle;margin-left:8px;margin-top:-10px"
          >新建订单信息</p>
          <p></p>
        </div>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄">
              <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电话">
              <el-input v-model="form.tel" placeholder="请输入电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="家庭住址">
              <el-input v-model="form.address" placeholder="请输入家庭住址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="收入">
              <el-input v-model="form.salary" placeholder="请输入收入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学历">
              <el-select v-model="form.major" placeholder="请选择学历" style="width:100%">
                <el-option label="小学" value="1"></el-option>
                <el-option label="初中" value="2"></el-option>
                <el-option label="高中" value="3"></el-option>
                <el-option label="本科" value="4"></el-option>
                <el-option label="研究生" value="5"></el-option>
                <el-option label="博士" value="6"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="工作单位">
              <el-input v-model="form.job" placeholder="请输入工作单位"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="备注">
              <el-radio-group v-model="form.remark" style="width:100%">
                <el-input v-model="form.remark" placeholder="备注..."></el-input>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card style="margin-top:20px">
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="产品类型">
              <el-select v-model="form.type" placeholder="请选择产品类型" style="width:100%">
                <el-option label="汽车消费" value="1"></el-option>
                <el-option label="房产消费" value="2"></el-option>
                <el-option label="抵押贷款" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品编号">
              <el-input v-model="form.num" placeholder="请输入产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申请日期">
              <el-date-picker
                v-model="form.date"
                style="width:100%"
                type="date"
                placeholder="选择申请日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分期数">
              <el-input v-model="form.month" placeholder="请输入分期数"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="申请金额">
              <el-input v-model="form.money" placeholder="请输入申请金额"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="利率">
              <el-select v-model="form.major" placeholder="请选择利率" style="width:100%">
                <el-option label="3.9%" value="3.9"></el-option>
                <el-option label="4.1%" value="4.1"></el-option>
                <el-option label="4.3%" value="4.3"></el-option>
                <el-option label="5.0%" value="5.0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="创建人">
              <el-input v-model="form.createName" placeholder="请输入创建人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="创建日期">
              <el-date-picker
                v-model="form.createDate"
                style="width:100%"
                type="date"
                placeholder="选择创建日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-alert
        title="订单一经创建立即生效，请仔细核对填写信息，如填写有误造成的损失，本公司概不负责"
        type="warning"
        style="margin-top:10px"
      ></el-alert>
      <el-card style="margin-top:10px;text-align:right">
        <el-button type="primary">创建</el-button>
        <el-button>重置</el-button>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import breadcrumb from '@/mixins/breadCrumb.js';
export default {
  mixins: [breadcrumb],
  data() {
    return {
      form: {
        name: "",
        age: "",
        tel: "",
        address: "",
        salary: "",
        major: "",
        job: "",
        remark: "",
        type: "",
        num: "",
        date: "",
        month: "",
        money: "",
        createName: "",
        createTime: "",
      },
    };
  },
  methods() {},
};
</script>

<style scoped>
</style>