<template>
  <div>子组件</div>
</template>
<script>
export default {
  data() {
    return {
      data2: {
        fuzujian: "fuzujian測試"
      }
    };
  },
  methods: {
    zizujianfangfa() {
      console.log("子组件方法");
    }
  }
}; 
</script>