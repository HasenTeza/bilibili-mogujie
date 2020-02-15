<template>
  <div>
    <!-- 1 -->
    <div>{{tatol()}}</div>
    <!-- 2 计算属性 -->
    <div>{{jisuanshuxing}}</div>
    <!-- 3.  -->
    <div>{{tatolprice}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstname: "123",
      lastname: "qwer",
      books: [
        { id: 123, name: "html", price: 567 },
        { id: 123, name: "html", price: 897 },
        { id: 123, name: "html", price: 567 },
        { id: 123, name: "html", price: 458 },
        { id: 123, name: "html", price: 896 },
        { id: 123, name: "html", price: 123 }
      ]
    };
  },
  computed: {
    // jisuanshuxing() {
    //   return this.firstname + " " + this.lastname;
    // },
    tatolprice() {
      let result = 0;
      for (let i = 0; i < this.books.length; i++) {
        result += this.books[i].price;
      }
      return result;
    },

    // 计算属性有get和set，一般指需要实现get,计算属性只需要得出结果
    jisuanshuxing: {
      get: function() {
        return this.firstname + " " + this.lastname;
      }
    }
  },
  methods: {
    tatol() {
      return this.firstname + " " + this.lastname;
    }
  }
};
</script>