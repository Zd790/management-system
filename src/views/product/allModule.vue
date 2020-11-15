<template>
  <div style="text-align:left">
    <el-dialog title="提示" :visible.sync="vis" width="30%" @click="closeDialog">
                    <el-form :model="forms" :rules="rules" ref="forms">
                        <el-form-item label="产品名称" :required="true" :label-width="formLabelWidth" prop="name">
                            <el-input v-model="forms.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="产品类型" :required="true" :label-width="formLabelWidth" prop="type">
                            <el-select v-model="forms.type" placeholder="请选择产品类型" style="width:100%">
                                <el-option label="汽车消费" value="1"></el-option>
                                <el-option label="房产消费" value="2"></el-option>
                                <el-option label="抵押贷款" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="开放日期"  :label-width="formLabelWidth" prop="date"> 
                            <el-row :gutter="5">
                                <el-col  :span="11"><el-date-picker clearable style="width:130px" size="mini" :span="2" v-model="forms.date1" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" ></el-date-picker></el-col>
                                <el-col  :span="11"><el-time-picker style="width:150px" arrow-control  v-model="forms.date2" size="mini" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点"></el-time-picker></el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
                            <el-switch v-model="forms.status" style="float:left;display:block;line-height:40px"></el-switch>
                        </el-form-item>
                        <el-form-item label="利率" :label-width="formLabelWidth" :required="true" prop="rate">
                            <el-radio-group v-model="forms.rate" style="float:left;display:block;line-height:50px">
                                <el-row :gutter="10">
                                    <el-radio label="3.8%" value="1"></el-radio>
                                    <el-radio label="4.3%" value="2"></el-radio>
                                    <el-radio label="3%" value="3"></el-radio>
                                    <el-radio label="5%"  value="4"></el-radio>
                                </el-row>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="发布对象" :label-width="formLabelWidth" :required="true" prop="people">
                            <el-radio-group v-model="forms.people" style="float:left;display:block;line-height:50px">
                                <el-row>
                                    <el-radio label="企业" value="1"></el-radio>
                                    <el-radio label="个人" value="2"></el-radio>
                                </el-row>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="备注" :required="true" :label-width="formLabelWidth" prop="remark">
                            <el-input v-model="forms.remark" autocomplete="off" type="textarea"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="submitForm('forms')">立即创建</el-button>
                        <el-button @click="resetForm('forms')">重置</el-button>
                    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    accuseVisible: Boolean,
  },
  data() {
    return {
    forms: {
            name: '',
            type:'',
            date1:'',
            date2:'',
            status:'',
            rate:'',
            people:'',
            remark:'',
            delivery: false,
        },
    formLabelWidth:"80px",
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        type:[{required:true,message:"请选择产品类型",tigger:"change"}],
        date1: [
          {
            type: "date",
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            message: "请选择时间",
            trigger: "change",
          },
        ],
        people: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
         remark: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      vis: false,
    };
  },
  watch: {
    accuseVisible() {
      this.vis = this.accuseVisible;
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close-dialogStatus", false);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("close-dialogStatus", false);
                this.$message({
                    message: '操作成功',
                    type: 'success'
                }),
                this.$refs[formName].clearValidate()
                } else {
                console.log("error submit!!");
                return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
</style>