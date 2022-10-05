<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Tabs, TabPane} from 'ant-design-vue';

export default defineComponent({
  name: 'tabC',
  setup() {
    const activeKey = ref('1');
    return {
      activeKey
    }
  },
  components: {
    Tabs,
    TabPane
  }
})
</script>

<template>
  <Tabs
      class="tab-c"
      centered
      animated
      v-model:activeKey='activeKey'
  >
    <TabPane key="1" tab="内容设置">
      <slot name="content"></slot>
    </TabPane>
    <TabPane key="2" tab="样式设置">
      <slot name="style"></slot>
    </TabPane>
  </Tabs>
</template>

<style lang="scss">
.tab-c {
  .ant-tabs-nav-list {
    width: 100%;

    .ant-tabs-tab {
      width: 50%;

      .ant-tabs-tab-btn {
        width: 100%;
        text-align: center;
      }
    }
  }

  .region {
    width: 100%;
    background: #f0f2f5;
    margin-bottom: 20px;
    user-select: none;

    .drag {
      cursor: pointer;
    }

    .del {
      color: #aaa;
      cursor: pointer;
    }

    .option-item {
      display: flex;
      justify-content: space-between;

      .l-part {
        line-height: 32px;
      }
    }

    .type-img {
      display: grid;
      grid-template-columns: 1fr 70px;
      line-height: 70px;

      .img-wrap {
        width: 70px;
        height: 70px;
        border: 1px solid #ccc;
      }
    }

  }
  .add-btn {
    width: 100%;
  }
}

</style>
