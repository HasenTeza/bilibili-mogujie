<template>
  <div>
    <zujian>
      <button slot="header">按钮</button>
      <button slot="footer">结束按钮</button>
    </zujian>
    <hr />
    <zujian>
      <template slot-scope="suiyiname">
        <span>{{suiyiname.suiyi.join('-')}}</span>
      </template>
    </zujian>
    <hr />
    <zujian></zujian>
    <hr />
  </div>
</template>
<script>
import zujian from "./zujian2";
export default {
  data() {
    return {
      dete: "ceshi"
    };
  },
  components: {
    zujian
  }
};
</script>