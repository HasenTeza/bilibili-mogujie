<template>
  <div>
    <!-- 使用子页面注册的数据名称 -->
    <ul>
      <li v-for="item in ceshi1" :key="item">{{item}}</li>
    </ul>
    <h2>{{ceshi2}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neirong: "组件加载的内容"
    };
  },
  //   5. 注册在子页面使用数据名称
  //   【第一种方法】
  //   props: ["ceshi1", "ceshi2"]
  // 【第二种方法】
  //   props: {
  //     ceshi1: String,
  //     ceshi2: Array
  //   }
  // 【第三种方法】
  props: {
    ceshi2: {
      type: String,
      default: "这里写默认值内容",
      //   required必传，不传这个值就会报错
      required: true
    },
    ceshi1: {
      type: Array,
      default() {
        return ["1", "2", "3", "4", "5", "6"];
      },

    }
  }
};
</script> 