<script lang="ts">
import {defineComponent} from "vue";
import {CollapsePanel, Form, FormItem, Input, Collapse} from 'ant-design-vue';

export default defineComponent({
  name: 'pageSetting',
  components: {
    CollapsePanel,
    Form,
    FormItem,
    Input,
    Collapse,
  }
})
</script>
<template>
  <div class="page-setting">
    <Collapse
        ghost
    >
      <CollapsePanel>
        <template #header>页面设置</template>
        <Form>
          <FormItem
              label="页面名称"
              name="pageName"
              :rules="[{ required: true, message: '请填写页面名称' }]"
          >
            <Input/>
          </FormItem>
        </Form>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<style lang="less">
@import "../common/style/const.less";

.page-setting {
  .ant-collapse-item {
    .ant-collapse-header {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .ant-collapse-content-box {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>
