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
.monitor {
  padding: 10px;
  max-width: 375px;
  width: 375px;
  margin: 60px auto;
  min-height: 667px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 28px 0 #ccc;
  box-shadow: 0 0 28px 0 #ccc;
  position: relative;

  .monitor-node {
    position: relative;

    .icon-operate {
      position: absolute;
      left: 375px;
      width: 120px;
      top: 0;

      span {
        cursor: pointer;
        padding: 5px;
        background: #fff;
        border-radius: 4px;
        margin-right: 4px;
        box-shadow: 2px 2px 4px rgba(100, 100, 100, 0.2);

        :hover {
          color: #ff0000;
        }
      }
    }

    .component-name {
      position: absolute;
      top: 0;
      padding: 5px;
      font-weight: 500;
      width: 40px;
      background: #fff;
      border-radius: 4px;
      //margin-right: 4px;
      box-shadow: 2px 2px 4px rgba(100, 100, 100, 0.2);
    }

    .component-name-left {
      left: 375px;
    }

    .component-name-right {
      right: 375px;
    }

    .left {
      left: 0;
    }
  }

  .actived {
    position: relative;

    &:after {
      display: block;
      content: "";
      border: solid 2PX #1d77ff;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      z-index: 1;
    }
  }
}
.dragActived{
  background: rgb(222, 235, 255);
}
</style>
