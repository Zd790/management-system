<template>
  <div>
    <el-tabs v-model="activeName"  @tab-click="handleClick">
      <el-tab-pane label="汽车消费" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="province" label="省份"></el-table-column>
          <el-table-column prop="city" label="地区"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="seeCon(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click="handEdit(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="订单详情" :visible.sync="dialogFormVisible" style="text-align:center"> 
          <el-form :data="tableData" :model="form" ref="forms" style="width:500px">
            <el-form-item prop="date" v-model="form.date" label="日期" :label-width="formLabelWidth">
              <el-input v-model="form.date" v-bind:disabled="dis"></el-input>
            </el-form-item>
            <el-form-item prop="name" v-model="form.name" label="姓名" :label-width="formLabelWidth"><el-input v-model="form.name" v-bind:disabled="dis"></el-input></el-form-item>
            <el-form-item prop="address" v-model="form.address" label="地址" :label-width="formLabelWidth"><el-input v-model="form.address " v-bind:disabled="dis"></el-input></el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="close">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="房产消费" name="second">
        <el-transfer
           filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入房产地址"
          v-model="value"
          :titles="['最新消费', '历史消费']"
          :button-texts="['添加到最新消费', '添加到历史消费']"
          :data="data">
        </el-transfer>
        <!-- filterable：是否可搜索 -->
      </el-tab-pane>
      <el-tab-pane label="抵押贷款" name="third">
        <el-tree
          :data="treedata"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 4]"
          :props="defaultProps"
        ></el-tree>
      </el-tab-pane>
      <el-tab-pane label="其他" name="fourth">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    const generateData =()=> {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            cities: cities[index]
          });
        });
        return data;
    };
    return {
      dialogFormVisible:false,
      dis:false,
      form:{
        date:'',
        name:'',
        address:''
      },
      formLabelWidth:'100px',
      treedata: [
        {
          id: 1,
          label: "贷款人---归还贷款本息",
          children: [
            {
              id: 4,
              label: "抵押贷款公司---出售债券",
              children: [
                {
                  id: 7,
                  label: "投资银行",
                }
              ],
            },
          ],
        },
        {
          id: 2,
          label: "投资银行---提供贷款现金",
          children: [
            {
              id: 5,
              label: "抵押贷款公司---提供抵押贷款",
            },
            {
              id: 6,
              label: "贷款人",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
       data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.cities.indexOf(query) > -1;
        },
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    seeCon(row){
      this.dialogFormVisible=true
      this.dis=true
      this.form={
                date:row.date,
                name:row.name,
                address:row.address,
            };
    },
    handEdit(row){
      this.dialogFormVisible=true
      this.dis=false
      this.form={
                date:row.date,
                name:row.name,
                address:row.address,
      }
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

<style scoped>
</style>