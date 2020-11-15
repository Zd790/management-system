<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadlist" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card style="margin-bottom:20px">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input placeholder="请输入姓名" v-model.trim="searchValue.name" />
        </el-col>
        <el-col :span="6">
          <el-select v-model="searchValue.education" placeholder="请选择学历" style="width:100%">
            <el-option value="1" label="小学及以下">小学及以下</el-option>
            <el-option value="2" label="初中">初中</el-option>
            <el-option value="3" label="高中">高中</el-option>
            <el-option value="4" label="本科">本科</el-option>
            <el-option value="5" label="研究生">研究生</el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入手机号" v-model.trim="searchValue.mobile" />
        </el-col>
        <el-col :span="6" style="text-align:right">
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <div style="text-align:left;margin-bottom:20px">
        <el-button type="primary" icon="el-icon-plus" @click="addCustomer">新增客户</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="number" label="客户编号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="手机号码"></el-table-column>
        <el-table-column prop="idnum" label="身份证号"></el-table-column>
        <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status==1" effect="dark">已启用</el-tag>
          <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
        </template>
        </el-table-column>
        <el-table-column prop="education" label="学历">
          <template slot-scope="scope">
            <span v-if="scope.row.education==1">小学及以下</span>
            <span v-else-if="scope.row.education==2">初中</span>
            <span v-else-if="scope.row.education==3">高中</span>
            <span v-else-if="scope.row.education==4">本科</span>
            <span v-else-if="scope.row.education==5">研究生</span>
          </template>
        </el-table-column>
        <el-table-column prop="job" label="职业"></el-table-column>
        <el-table-column prop="address" label="住址"></el-table-column>
        <el-table-column prop="marry" label="婚姻状况">
          <template slot-scope="scope">
            <span>{{scope.row.marry==1?"已婚":"未婚"}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作" width="210">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="remove('删除')">删除</el-button>
            <el-button size="mini" @click="detail">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
       <el-dialog :title="tit" :visible.sync="dialogFormVisible" width="40%" style="text-align:center"> 
          <el-form :data="tableData" :model="form" ref="forms" :rules="rules">
            <el-form-item prop="name" v-model="form.name" label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop="mobile" v-model="form.mobile" label="手机号" :label-width="formLabelWidth">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item prop="idnum" v-model="form.idnum" label="身份证号" :label-width="formLabelWidth">
              <el-input v-model="form.idnum"></el-input>
            </el-form-item>
            <el-form-item prop="education" v-model="form.education" label="学历" :label-width="formLabelWidth">
              <el-select v-model="form.education" placeholder="婚姻状况" style="width:100%">
                <el-option  label="小学及以下" value="1"></el-option>
                <el-option  label="初中" value="2"></el-option>
                <el-option  label="高中" value="3"></el-option>
                <el-option  label="本科" value="4"></el-option>
                <el-option  label="研究生" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="job" v-model="form.job" label="职业" :label-width="formLabelWidth">
              <el-input v-model="form.job"></el-input>
            </el-form-item>
            <el-form-item prop="address" v-model="form.address" label="住址" :label-width="formLabelWidth">
              <el-input v-model="form.address "></el-input>
            </el-form-item>
            <el-form-item prop="marry" v-model="form.marry" label="婚姻状况" :label-width="formLabelWidth">
              <el-select v-model="form.marry" placeholder="婚姻状况" style="width:100%">
                <el-option  label="已婚" value="1"></el-option>
                <el-option  label="未婚" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="close">确 定</el-button>
          </div>
        </el-dialog>
    </el-card>
  </div>
</template>

<script>
import breadcrumb from "@/mixins/breadCrumb.js";
export default {
  mixins: [breadcrumb],
  data() {
    return {
      dialogFormVisible:false,
      tit:'',
      form:{
        name:'',
        mobile:'',
        idnum:'',
        education:'',
        job:'',
        address:'',
        marry:''
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        mobile: [{ required: true, message: "请输入手机号" }],
        idnum: [{ required: true, message: "请输入身份证号" }],
        marry: [{ required: true, message: "请选择婚姻状况" }],
        education: [
          { required: true, message: "请选择学历", trigger: "change" },
        ],
        job: [{ required: true, message: "请输入工作" }],
        address: [{ required: true, message: "请输入地址" }],
      },
      formLabelWidth:"100px",
      originData:[
        {
          number: 1001,
          name: "赵铁柱",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 2,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1001,
          name: "詹姆斯",
          mobile: "13533387675",
          idnum: "378489998776546578",
          education: 3,
          job: "球员",
          address: "广东省东莞市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1003,
          name: "李狗盛",
          mobile: "15533325375",
          idnum: "378489990876546578",
          education: 2,
          job: "厨师",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1004,
          name: "张大彪",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 4,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1005,
          name: "王老六",
          mobile: "17673345675",
          idnum: "378489990876546578",
          education: 5,
          job: "老板",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
      ],
      searchValue: {
        name: "",
        education: "",
        mobile: "",
      },
      tableData: [
        {
          number: 1001,
          name: "赵铁柱",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 2,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1001,
          name: "詹姆斯",
          mobile: "13533387675",
          idnum: "378489998776546578",
          education: 3,
          job: "球员",
          address: "广东省东莞市市南区香港中路100号",
          marry: 1,
        },
        {
          number: 1003,
          name: "李狗盛",
          mobile: "15533325375",
          idnum: "378489990876546578",
          education: 2,
          job: "厨师",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1004,
          name: "张大彪",
          mobile: "18833345675",
          idnum: "378489990876546578",
          education: 4,
          job: "司机",
          address: "山东省青岛市市南区香港中路100号",
          marry: 2,
        },
        {
          number: 1005,
          name: "王老六",
          mobile: "17673345675",
          idnum: "378489990876546578",
          education: 5,
          job: "老板",
          address: "山东省青岛市市南区香港中路100号",
          marry: 1,
        },
      ],
    };
  },
  methods: {
    //搜索功能
    handleSearch() {
      let searchArr = [];
      //找到哪些搜索项是填了值的
      for (var key in this.searchValue) {
        if (this.searchValue[key]) {
          searchArr.push({ [key]: this.searchValue[key] });
        }
      }
      this.tableData = this.originData.filter((item) => {
      localStorage.setItem("searchValue",this.searchValue.name);
        return (
          item.name ==
            (this.searchValue.name == "" ? item.name : this.searchValue.name) &&
          item.education ==
            (this.searchValue.education == ""
              ? item.education
              : this.searchValue.education) &&
          item.mobile ==
            (this.searchValue.mobile == ""
              ? item.mobile
              : this.searchValue.mobile)
        )
      });
    },
    //重置功能
    reset() {
      this.searchValue = {
        name: "",
        education: "",
        mobile: "",
      };
      this.tableData=this.originData
    },
    //删除功能
    remove(type){
        this.$notify({
            title: '操作提示',
            message: type+'成功',
            type: 'success'
            });
    },
    //编辑功能
    edit(row){
      this.dialogFormVisible=true
      this.tit='编辑客户信息'
      this.form={
          name:row.name,
          mobile:row.mobile,
          idnum:row.idnum,
          education:row.education,
          job:row.job,
          address:row.address,
          marry:row.marry
      }
    },
    //新增客户功能
    addCustomer(){
      this.dialogFormVisible=true
      this.tit='新增客户'
            this.form={
              name:'',
              mobile:'',
              idnum:'',
              education:'',
              job:'',
              address:'',
              marry:''
            };
            
        this.$nextTick(() => {
            this.$refs.forms.clearValidate()
        })
    },
    //详情功能
    detail(){
        this.$router.push("/customer/detail")
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
  },
};
</script>

<style lang="less" scoped>
</style>