<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :model="form"
      :inline="true"
      label-width="100px"
      style="text-align:left"
      :rules="rules"
    >
      <el-card>
        <div style="margin-bottom:30px">
          <span style="width:4px;height:18px;background:#5696ff;display:inline-block"></span>
          <p
            style="line-height:20px;display:inline-block;vertical-align:middle;margin-left:8px;margin-top:-10px"
          >个人基本信息</p>
        </div>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="客户编号:">
              <el-input v-model="form.num" placeholder="请输入客户编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户名称:" prop="name">
              <el-input v-model="form.name" placeholder="请输入客户名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号码:" prop="mobile">
              <el-input v-model="form.mobile" placeholder="请输入电手机号码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="身份证号:" prop="idnumber">
              <el-input v-model="form.idnumber" placeholder="请输入身份证号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="婚姻状况:" prop="marry">
              <el-input v-model="form.marry" placeholder="请选择婚姻状况"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="最高学历:" prop="education">
              <el-select v-model="form.education" placeholder="请选择学历" style="width:100%">
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
            <el-form-item label="职业:" prop="job">
              <el-input v-model="form.job" placeholder="请输入职业"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="住址:" prop="address">
              <el-radio-group v-model="form.address" style="width:100%">
                <el-input v-model="form.remark" placeholder="请输入地址"></el-input>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card style="margin-top:20px">
        <div style="margin-bottom:30px">
          <span style="width:4px;height:18px;background:#5696ff;display:inline-block"></span>
          <p
            style="line-height:20px;display:inline-block;vertical-align:middle;margin-left:8px;margin-top:-10px"
          >产品申请信息</p>
          <p></p>
        </div>
        <div class="review">
          <i class="el-icon-success" style="font-size:100px;color:rgb(82,196,26)"></i>
        </div>
        <p style="text-align:center;font-size:30px;margin-bottom:40px">提交成功</p>
        <el-steps :active="2" align-center>
          <el-step title="发起申请" description="申请了房屋贷款,金额1000,000元"></el-step>
          <el-step title="部门审核" description="负责人周毛毛,审批时间2020-09-01"></el-step>
          <el-step title="财务复核" description></el-step>
          <el-step title="放款" description></el-step>
        </el-steps>
      </el-card>
      <el-card style="margin-top:10px;text-align:right">
        <el-button type="primary">提交</el-button>
        <el-button>取消</el-button>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import breadcrumb from "@/mixins/breadCrumb.js";
export default {
  mixins: [breadcrumb],
  data() {
    return {
      form: {
        num: "",
        name: "",
        mobile: "",
        idnumber: "",
        marry: "",
        education: "",
        job: "",
        address: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        mobile: [{ required: true, message: "请输入手机号" }],
        idnumber: [{ required: true, message: "请输入身份证号" }],
        marry: [{ required: true, message: "请选择婚姻状况" }],
        education: [
          { required: true, message: "请选择学历", trigger: "change" },
        ],
        job: [{ required: true, message: "请输入工作" }],
        address: [{ required: true, message: "请输入地址" }],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.review {
  width: 100px;
  margin: auto;
  margin-bottom: 30px;
}
</style>