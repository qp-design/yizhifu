<script lang="ts">
import {defineComponent} from 'vue';
import TabC from "@/components/common/tabC.vue";
import ModalC from "@/components/common/modalC.vue";
import PickColorC from "@/components/common/pickColorC.vue";
import {Card, RadioButton, RadioGroup, Button} from "ant-design-vue";
import {HolderOutlined, PlusOutlined} from "@ant-design/icons-vue";
import PageSetting from "@/components/pageSetting.vue";
import draggable from "vuedraggable";

export default defineComponent({
  data() {
    return {
      dragArr: [
        {
          name: '图片1'
        },
        {
          name: '图片2'
        }
      ]
    }
  },
  name: 'example',
  components: {
    draggable,
    TabC,
    PickColorC,
    Card,
    RadioButton,
    RadioGroup,
    HolderOutlined,
    Button,
    PlusOutlined,
    PageSetting,
    ModalC
  },
  setup() {
    const handleModal = () => {
      alert(123)
    }

    return {
      handleModal
    }
  }
})
</script>
<template>
  <div class="example">
    <PageSetting/>
    <div style="height: 50px;">
      <PickColorC/>
    </div>
    <tab-c>
      <template #content>
        <draggable
          v-model="dragArr"
          item-key="name"
        >
          <template #item="{element}">
            <Card
                class="region"
                :bordered="false"
                size="small"
            >
              <template #title>
                <div class="drag">
                  <HolderOutlined/>
                  {{ element.name }}
                </div>
              </template>
              <template #extra>
                <span class="del">删除</span>
              </template>
              <div class="type-img">
                <div class="link">
                  <span>链接</span>
                  <ModalC btnWord="请选择链接">
                    <template #content>
                      我是获取的数据列表
                    </template>
                  </ModalC>
                </div>
                <div class="img-wrap"></div>
              </div>
            </Card>
          </template>
        </draggable>
        <Button class="add-btn"><PlusOutlined/>添加图片</Button>
      </template>
      <template #style>
        <Card
            class="region"
            title="内容样式"
            :bordered="false"
            size="small"
        >
          <div class="option-item">
            <div class="l-part">
              边角样式
            </div>
            <div class="r-part">
              <RadioGroup button-style="solid">
                <RadioButton value="round">圆角</RadioButton>
                <RadioButton value="straight">直角</RadioButton>
              </RadioGroup>
            </div>
          </div>
        </Card>
        <Card
            class="region"
            title="组件样式"
            :bordered="false"
            size="small"
        >
          <div class="option-item">
            <div class="l-part">
              页边距
            </div>
            <div class="r-part">
              <RadioGroup button-style="solid">
                <RadioButton value="round">上边距</RadioButton>
                <RadioButton value="straight">下边距</RadioButton>
              </RadioGroup>
            </div>
          </div>
        </Card>
      </template>
    </tab-c>
  </div>
</template>
<style lang="less" scoped>
@import "../common/style/const.less";

.example {
  padding: @material-gap;

}
</style>
