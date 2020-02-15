<template>
  <div>
    <!-- 【遍历数组】v-for 遍历对象  循环-->
    <ul>
      <li v-for="item in once" :key="item">{{item}}</li>
    </ul>
    <!-- 2. 遍历过程中获取索引值 -->
    <li v-for="(books,index) in two" :key="books">{{index+1}}....{{books}}</li>
    <!-- 3. [遍历对象] -->
    <li v-for="(info,index) in itemone" :key="info">{{info}}.{{index}}</li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      once: [1, 2, 3, 4, 5, 6, 7],
      two: ["q", "w", "e", "r"],
      itemone: {
        name: "chulu",
        age: "26"
      }
    };
  }
};
</script>