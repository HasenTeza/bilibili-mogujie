<template>
  <div>
    <!-- 1. v-model原理-->
    <!-- <h2>{{mingzi}}</h2> -->
    <!-- <el-input type="text" v-model="message"></el-input> -->
    <!-- <el-input type="text" :value="message" v-on:click="valuechage"></el-input> -->
    <!-- 2. radio  name一样数据互斥形成单选-->
    <el-radio v-model="sex" label="男">男</el-radio>
    <el-radio v-model="sex" label="女">女</el-radio>
    <h2>选择性别：{{sex}}</h2>
    <el-divider></el-divider>
    <!-- 3. 单选 checkbox  disabled禁止输入-->
    <el-checkbox v-model="checked">同意协议</el-checkbox>
    <h2>选择了：{{checked}}</h2>
    <el-button :disabled="!checked">下一步</el-button>
    <el-divider></el-divider>
    <!-- 4. checked 多选 -->
    <el-checkbox v-model="checked2" label="摄影">摄影</el-checkbox>
    <el-checkbox v-model="checked2" label="游泳">游泳</el-checkbox>
    <el-checkbox v-model="checked2" label="看书">看书</el-checkbox>
    <el-checkbox v-model="checked2" label="绘画">绘画</el-checkbox>
    <h2>爱好：{{checked2}}</h2>
    <el-divider></el-divider>
    <!-- 5. select  -->
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in selectlist"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <h2>选择了： {{value}}</h2>
    <el-divider></el-divider>
    <!-- 6. 修饰符 lazy 按回车更新显示输入数据 在饿了么上没用-->
    <input type="text" v-model.lazy="shuru">内容</input>
    <h2>输入内容：{{shuru}}</h2>
    <!-- 7. 修饰符  number修饰符输入框中输入的内容自动转成数字类型-->
    <!-- 8. 修饰符  trim修饰符可以过滤内容左右两边的空格 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 1
      mingzi: "v-model",
      message: "数据的双向绑定",
      //  2.
      sex: "",
      //  3.
      checked: false,
      //   4.
      checked2: [],
      //   5.
      selectlist: [
        {
          value: "黄金糕1",
          label: "黄金糕"
        },
        {
          value: "双皮奶2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",    
      //   6.
      shuru: ""
    };
  },
  methods: {
    // valuechage(event) {
    //   console.log(event);
    //   this.message = event.target.value;
    // }
  }
};
</script>
