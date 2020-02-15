<template>
  <div>
    <!-- v-bind动态绑定 -->
    <!-- 1.1 S -->
    <a :href="link">这是一个链接</a>
    <el-divider></el-divider>
    <!-- 1.2 -->
    <div class="yangshi" :class="{active:isactive,lineone:islink}">{{sjxys}}</div>
    <el-divider></el-divider>
    <div :class="getclass()">{{sjxys2}}</div>
    <el-divider></el-divider>
    <el-button v-on:click="btnclick">{{button}}</el-button>
    <!-- 1.3 -->
    <ul>
      <li v-for="(item,index) in shuzifor">{{item}}</li>
    </ul>
    <el-divider></el-divider>
    <!-- 1.4 -->
    <!-- "-"不能用，样式属性用驼峰显示 -->
    <div class="dongtai" :style="{fontSize:fontsize+'px', backgroundColor: brown}">{{sjxys}}</div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "http://www.w3school.com.cn",
      sjxys: "数据响应式",
      sjxys2: "测试二",
      isactive: true,
      islink: true,
      button: "测试按钮",
      shuzifor: ["1", "2", "3"],
      fontsize: 100,
      brown: "brown"
    };
  },
  methods: {
    btnclick() {
      this.isactive = !this.isactive;
      this.islink = !this.islink;
    },
    getclass() {
      return { active: this.isactive, lineone: this.islink };
    }
  },
  mounted() {}
};
</script>
<style scoped>
.yangshi {
  color: blueviolet;
  font-size: 5px;
}
.active {
  color: blue;
}
.lineone {
  font-size: 80px;
}
</style>
