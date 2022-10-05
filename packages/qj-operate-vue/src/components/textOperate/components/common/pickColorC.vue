<script lang="ts">
import {defineComponent, ref} from "vue";
import {ColorPicker} from 'vue-accessible-color-picker';
import {Popover} from "ant-design-vue";
import {PlusOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  name: 'pickColorC',
  components: {
    ColorPicker,
    Popover,
    PlusOutlined
  },
  setup() {
    const colorArr = [
      {
        id: 1,
        value: '#EB144C',
      },
      {
        id: 2,
        value: '#FF6900',
      },
      {
        id: 3,
        value: '#FCB900',
      },
      {
        id: 4,
        value: '#00D084',
      },
      {
        id: 5,
        value: '#8ED1FC',
      },
      {
        id: 6,
        value: '#0693E3',
      },
      {
        id: 7,
        value: '#FFFFFF',
      },
      {
        id: 8,
        value: '#ABB8C3',
      },
      {
        id: 9,
        value: '#000000',
      }
    ];
    const colorAccess = ref(false);
    const color = ref('#FFFFFF');

    const handlePopover = () => {
      colorAccess.value = false
    }

    const switchState = () => {
      colorAccess.value = true;
    }

    const pickColor = (val: string) => {
      color.value = val
    }

    const updateColor = (val: Record<string, Record<string, string>>) => {
      console.log(val)
      color.value = val.colors.hex
    }


    return {
      color,
      colorArr,
      colorAccess,
      switchState,
      handlePopover,
      updateColor,
      pickColor
    }
  }
})
</script>

<template>
  <div class="pick-color-c">
    <Popover trigger="click" placement="bottomRight" @visibleChange="handlePopover">
      <template #content>
        <div class="pick-color-board">
          <div class="title">
            <p>当前颜色：{{color}}</p> <span :style="{backgroundColor: color}"></span>
          </div>
          <ul>
            <li v-for="color in colorArr" :key="color.id" :style="{background: color.value}" @click="pickColor(color.value)"></li>
            <li class="add" @click="switchState">
              <PlusOutlined/>
            </li>
          </ul>
          <ColorPicker class="pick-color-access" :color="color" @color-change="updateColor" v-show="colorAccess"/>
        </div>
      </template>
      <div class="btn" :style="{backgroundColor: color}">
      </div>
    </Popover>
  </div>
</template>

<style lang="less">
.pick-color-c {
  .btn {
    width: 60px;
    height: 30px;
    border-radius: 4px;
    border: 5px solid #eee;
    box-sizing: border-box;
    cursor: pointer;
    float: right;
  }
}

.pick-color-board {
  width: 190px;
  height: 150px;
  position: relative;

  .title {
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-bottom: 10px;
    box-sizing: content-box;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;

    p {
      display: inline-block;
      line-height: 30px;
      vertical-align: top;
    }

    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      box-shadow: 0 0 5px #888;
      margin-left: 6px;
    }
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    li {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      box-shadow: 0 0 5px #888;
      cursor: pointer;

      &.add {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
        box-sizing: border-box;
        box-shadow: none;
      }
    }
  }

  .pick-color-access {
    position: absolute;
    width: 300px;
    right: 20px;
    top: -96px;
  }
}
</style>
