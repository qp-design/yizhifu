import {defineComponent} from "vue";
import type {PropType} from 'vue';
import {useGoodsWx} from '../../hooks/useGoodsWx';

export interface goodItem {
  goodsCode: string | number;
  goodsName: string | number;
  dataPic: string;
  brandName: string | number;
  pricesetNprice: number;
  pricesetMakeprice?: number;
}

const goodsProps = () => ({
  id: Number,
  defaultValue: {
    type: Array as PropType<goodItem[]>,
    default: []
  },
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
  markedPrice: {
    type: Number,
    default: undefined,
  },
  goods: {
    type: Array as PropType<string | number[]>,
    default: [],
  },
});

export const Goods = defineComponent({
  name: 'Goods',
  props: goodsProps(),
  setup(props, {emit, slots, attrs}) {
    const { state } = useGoodsWx(props);

    return {
      state
    }
  },
  render() {
    const {
      margin,
      circular,
      cell,
      gap,
      markedPrice
    } = this.$props;
    const { list } = this.state

    return (
      <view
        style={{
          display: 'grid',
          gap: `${gap}px`,
          marginBottom: `${margin}px`,
          gridTemplateColumns: `repeat(${cell}, 1fr)`
        }}
      >
        {list.map((item, index) => (
          <view
            style={{
              overflow: 'hidden',
              borderRadius: circular === 2 ? 0 : '16Px'
            }}
            class="goods"
            key={item.goodsCode}
          >
            <view class="goods-img" style={{backgroundImage: `url(${item.dataPic})`}}></view>
            <view class="space">
              <view class="titleType">{item.goodsName}</view>
              <view class="subTitle">{item.brandName}</view>
              <view class="price">
                <text class="subPrice">¥</text>
                {item.pricesetNprice}
                {
                  markedPrice === 1 && (
                    <text class="markedPrice">
                      <text class="subPrice">¥</text>
                      {item.pricesetMakeprice}
                    </text>
                  )
                }
              </view>
              {/*<QjIcon name={'icon-icon2'} />*/}
            </view>
          </view>
        ))}
      </view>
    )
  }
})
