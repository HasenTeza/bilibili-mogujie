<template>
  <div>
    <p>这是子组件</p>
    <h2>solt 插槽 【组件再多个地方使用，有共性的地方写死在组件中，没有共性的地方写上 solt插槽，使用时，组件中不同的地方，返回各自不同的内容】</h2>
    <!-- 1. 写插槽，留位置，写name属性，用来识别那个slot -->
    <slot name="slot1"><div>这里写的是插槽的默认值，如果没有在这个位置传回内容，会默认显示这个div</div></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>