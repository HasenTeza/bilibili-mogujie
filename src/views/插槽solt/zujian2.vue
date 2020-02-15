<template>
  <div>
    <slot name="header"></slot>
    <p>子組件</p>
    <div>在父组件中拿到子组件中的数据，使用数据</div>
    <slot :suiyi="data1">
      <ul>
        <li v-for="item in data1" :key="item">{{item}}</li>
      </ul>
    </slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: ["a", "b", "c", "d", "e"]
    };
  }
};
</script>