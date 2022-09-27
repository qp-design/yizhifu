import {defineComponent} from "vue";

const textProps = () => ({
  margin: {
    type: Number,
    default: undefined,
  },
  cell: Number,
  gap: {
    type: Number,
    default: 10,
  },
  circular: {
    type: Number,
    default: undefined,
  },
});

export const Texts = defineComponent({
  name: 'Texts',
  props: textProps(),
  setup(props, {emit, slots, attrs}) {

  },
  render() {
    const {
      margin,
      circular,
      cell,
      gap,
    } = this.$props;

    return (
      <view
        style={{
          display: 'grid',
          gap,
          marginBottom: margin,
          gridTemplateColumns: `repeat(${cell}, 1fr)`
        }}
      >
          <view
            style={{
              overflow: 'hidden',
              borderRadius: circular === 2 ? 0 : '16Px'
            }}
            class="goods"
          >
            <view class="space">
              <view class="titleType">{1231321}</view>
              <view class="subTitle">{4554344}</view>
            </view>
          </view>
      </view>
    )
  }
})
