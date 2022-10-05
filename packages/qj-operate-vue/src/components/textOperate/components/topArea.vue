<script lang="ts">
import {defineComponent} from 'vue';
import {Button} from "ant-design-vue";

export default defineComponent({
  name: 'topArea',
  components: {
    Button
  }
})
</script>

<template>
  <div class="top-area">
    <div class="wrap">
      <Button>预览</Button>
      <Button type="primary" class="save">保存并发布</Button>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .top-area {
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    display: grid;
    place-content: center right;
    gap: 10px;
    .save {
      width: 100px;
      margin: 0 10px;
    }
  }

</style>
