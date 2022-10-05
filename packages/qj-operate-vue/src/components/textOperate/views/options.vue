<script lang="ts">
import {defineComponent} from 'vue';
import TopArea from "@/components/topArea.vue";
import example from "@/components/example.vue";

export default defineComponent({
  name: 'options',
  components: {
    TopArea,
    example,
  }
})
</script>
<template>
  <div class="option">
    <TopArea/>
    <example/>
  </div>
</template>

<style lang="less" scoped>
.option {
  width: 350px;
  height: 100vh;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  background-color: #f8f9fa;
}
</style>
