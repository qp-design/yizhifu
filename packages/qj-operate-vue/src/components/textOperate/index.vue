<template>
  <Options/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Options from './views/options.vue'
import './common/style/init.css'

export default defineComponent({
  name: 'App',
  components: {
    Options
  }
});
</script>

<style lang="less">

</style>
