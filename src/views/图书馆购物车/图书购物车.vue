<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>作者</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in books">
          <td>{{item.id}}</td>
          <td>{{item.author}}</td>
          <td>{{item.name}}</td>
          <td>{{item.data}}</td>

          <td>{{item.price | showPrice}}</td>
          <td>
            <button @click="decrement(index)" :disabled="item.count <= 1">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
          </td>
          <td>
            <button @click="removeHandler(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="books.length">总计：{{totalPrice | showPrice}}</div>
    <h2 v-else>购物车为空</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          author: "曹雪芹",
          name: "红楼梦",
          data: "????-??-??",
          price: 32.0,
          count: 1
        },
        {
          id: 2,
          author: "施耐庵",
          name: "水浒传",
          data: "????-??-??",
          price: 30.0,
          count: 1
        },
        {
          id: "3",
          author: "罗贯中",
          name: "三国演义",
          data: "????-??-??",
          price: 24.0,
          count: 1
        },
        {
          id: 4,
          author: "吴承恩",
          name: "西游记",
          data: "????-??-??",
          price: 20.0,
          count: 1
        }
      ]
    };
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  },
  //全局过滤器 ,filter 不能定义在创建的Vue对象后面 ,filters局部过滤器  【toFixed保留两位小数】
  filters: {
    showPrice(price) {
      return "¥" + price.toFixed(2);
    }
  }
};
</script>
<style scoped>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
</style>