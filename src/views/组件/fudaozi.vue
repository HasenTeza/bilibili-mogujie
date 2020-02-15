<template>
  <div id="app">
    <p>98978675674354</p>
    <!-- 3. 引用组件 -->
    <!-- 4.v-bind绑定父组件于子组件数据 -->
    <zujian :ceshi1="ceshiyi" :ceshi2="ceshier"></zujian>
  </div>
</template>
<script>
// 1. 载入组件页面
import zujian from "./zujian1.vue";
export default {
  data() {
    return {
      ceshiyi: ["王语嫣", "王夫人", "阮星竹", "阿紫", "阿朱", "宝宝", "灵儿"],
      ceshier: "ceshi222222222"
    };
  },
  components: {
    //   2. 注册组件
    zujian
  }
};
</script>1
