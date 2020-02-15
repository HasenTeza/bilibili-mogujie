<template>
  <div>
    <div>{{data1}}</div>
    <div>{{data2}}}</div>
    <button v-for="item in classify" @click="itemclick(item)">{{item.name}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: "子组件向父子间传递数据",
      data2: ["乔峰", "阿朱", "段誉", "王语嫣", "虚竹", "西夏公主"],
      classify: [
        { id: "aaa", name: "热门推荐" },
        { id: "bbb", name: "服装搭配" },
        { id: "ccc", name: "化妆品推荐" },
        { id: "ddd", name: "鞋帽分类" },
        { id: "eee", name: "手表分类" },
        { id: "fff", name: "配饰分类" },
        { id: "zzz", name: "零食推荐" }
      ]
    };
  },
  methods: {
    itemclick(item) {
      console.log(item);
      //   1.用emit 发射自定义事件
      this.$emit("fatherclick", item);
    }
  }
};
</script>