<template>
    <MonitorVue></MonitorVue>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MonitorVue from './view'

export default defineComponent({
  components: {
    MonitorVue
  }
});
</script>
<style lang="scss">
@import "s-material-vue/css";
</style>
