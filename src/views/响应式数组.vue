<template>
  <dev>
    <ul>
      <li v-for="item in letter" :key="item">{{item}}</li>
    </ul>
    <button @click="btnclick">anniu</button>
    <button @click="btnpop">pop</button>
    <button @click="btnshift">shift</button>
    <button @click="btnunshift">unshift</button>
    <button @click="btnsplice">splice</button>
    <button @click="btnsort">sort</button>
    <button @click="btnreverse">reverse</button>
  </dev>
</template>
<script>
export default {
  data() {
    return {
      letter: ["q", "w", "e", "r"]
    };
  },
  methods: {
    btnclick() {
      // 添加一个
      this.letter.push("123456789", "wertyuio");
    },
    btnpop() {
      // 从最后倒数减少  减少一个
      this.letter.pop("pop");
    },
    btnshift() {
      // 从开头正面减少
      this.letter.shift("shift");
    },
    btnunshift() {
      // 从开头添加一条
      this.letter.unshift("unshift", "unshift1");
    },
    btnsplice() {
      // 出入一个参数，将参数及以后的数据全部删掉
      //   从第几个元素，删掉几个元素，
      const start = 2;
      //   删除
      //   this.letter.splice(start, this.letter.length - start);
      //   替换
      //   this.letter.splice(start, 3, "m", "n", "b");
      //   添加
      this.letter.splice(start, 0, "m", "n", "b");
    },
    btnsort() {
      // 排列数据
      this.letter.sort();
    },
    btnreverse() {
      this.letter.reverse();
    }
  }
};
</script>