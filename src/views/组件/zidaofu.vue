<template>
  <div>
    <div>父组件测试</div>
    <div>
      <!-- 2.用v-on 监听子组件发射的自定义事件，创建处理方法 -->
      <zujian @fatherclick="jieshouclick()"></zujian>
    </div>
  </div>
</template>
<script>
import zujian from "./zujian2";
export default {
  data() {
    return {};
  },
  components: {
    zujian
  },
  methods: {
    //   3. 到方法中处理事件
    jieshouclick(item) {
      console.log("jieshouclick", item);
    }
  }
};
</script>