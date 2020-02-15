<template>
  <div>
    <div>1245</div>
    <zujian ref="abc"></zujian>
    <button @click="btnclick">按钮</button>
  </div>
</template>
<script>
import zujian from "./zujian3";
export default {
  data() {
    return {
      data2: {
        once: "a"
      }
    };
  },
  components: {
    zujian
  },
  methods: {
    btnclick() {
      console.log(this.$children);
      this.$children[0].zizujianfangfa();
      console.log(this.$children[0].fuzujian);
      //必須在组件标签上加上  ref="abc"
      console.log(this.$refs);
    }
  }
};
</script>