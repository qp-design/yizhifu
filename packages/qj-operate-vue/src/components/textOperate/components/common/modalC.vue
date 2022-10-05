<script setup lang="ts">
import {defineProps, ref} from 'vue';
import {Button, Modal} from 'ant-design-vue';

const props = defineProps(['btnWord', 'width', 'btnType']);
const visible = ref(false);

const showModal = () => {
  visible.value = true;
}

const handleOk = () => {
  visible.value = false;
}
</script>

<template>
  <div class="modalC">
    <Button @click="showModal" :type="btnType||'link'">{{ props.btnWord || "按钮" }}</Button>
    <Modal
        title=""
        :width="props.width || '50vw'"
        v-model:visible="visible"
        @ok="handleOk"
    >
      <slot name="content"/>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.modalC {
  display: inline-block;
}
</style>
