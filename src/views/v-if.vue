<template>
  <div>
    <!-- v-if 和 v-else条件变量 key不一样输入的内用就不会被服用-->
    <div v-if="ok" key="123">1234567</div>
    <div v-else key="qwe">qwertyu</div>
    <button @click="qiehuan">切换</button>
    <!-- v-else-if 最好在函数中判断-->
    <div>
      <h2 v-if="chengji>=90">优秀</h2>
      <h2 v-else-if="chengji>=80">良好</h2>
      <h2 v-else-if="chengji>=70">及格</h2>
      <h2 v-else>不及格</h2>
    </div>
    <!-- v-show与v-if -->
    <!-- if 加载运行是从新加载div这段代码 【所以在加载次数少的时候用】 -->
    <div v-if="false">v-if</div>
    <!-- show是在class上加载一个  display：none【在使用次数很频繁的时候用】 -->
    <div v-show="true">v-show</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ok: "true",
      chengji: "70"
    };
  },
  methods: {
    qiehuan() {
      this.ok = !this.ok;
    }
  }
};
</script>