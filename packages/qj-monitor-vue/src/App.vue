<template>
    <MonitorVue :materials="materials"></MonitorVue>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MonitorVue from './view'

export default defineComponent({
  props: {
    materials: {
      type: Object,
      default: {}
    }
  },
  components: {
    MonitorVue
  }
});
</script>
<style lang="scss">
@import "s-material-vue/css";
</style>
