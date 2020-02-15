<template>
  <div>
    <!-- v-on绑定事件监听  语法糖@-->
    <!-- <botton @click="btn1('123',$event)"></botton> -->
    <button @click="btn1(abc,$event)">按钮1</button>

    <!-- 修饰符 -->
    <div @click="divclick()">{{qqqqqqqqqqqqqq}}
        <el-button @click.stop="btnclick">阻止冒泡</el-button>
    </div>
  </div>    
</template>
<script>
export default {
  data() {
    return {
      abc: "321",
      qqqqqqqqqqqqqq:"321"
    };
  },
  methods:{
      btn1(canshu,event){
          console.log("---------------" ,canshu)
          console.log("+++++++++++++++",event)
      },
      divclick(){
          console.log('divclick')
      },
      btnclick(){
          console.log('btnclick')
      }
  }
};
</script>