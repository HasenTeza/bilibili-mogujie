<template>
  <div>
    <div></div>
    <zujian>
      <button slot="slot1">插槽1的使用传回数据</button>
    </zujian>
    <hr />
    <zujian>
        <!-- 2. 在引用组件的标签中传回内容，到slot溜的位置， -->
      <sapn >这是span</sapn>
    </zujian>
    <hr />
    <zujian>
      <i slot="slot1">这是i</i>
    </zujian>
    <hr />
    <zujian>
      <p slot="slot1">这是p</p>
    </zujian>
  </div>
</template>
<script>
import zujian from "./zujian1";
export default {
  data() {
    return {};
  },
  components: {
    zujian
  }
};
</script>