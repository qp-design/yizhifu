import {useComponent, NumStep, SmoothCheckbox} from '@brushes/qj-simulate-component';
import {useDispatchImpl, useStore} from '../store';
import {useCartList} from '../hooks';

export function CartItem({list}: { list: Array<any> }) {
  const {View, Text, Image, Checkbox} = useComponent();
  const { updateImpl } = useCartList();
  const dispatch = useDispatchImpl();
  const { select } = useStore()
  const handleStep = async (id: number, amount: number, type: string) => {
    const count = type === 'plus' ? ++amount : --amount;
    updateImpl(id, count)
  }

  const onChange = (e: { detail: { value: string[] }}) => {
    dispatch({
      type: 'select',
      payload: e.detail.value
    })
  }

  return (
    <SmoothCheckbox onChange={onChange}>
      {
        list.map((item, index) => (
          <View key={index} className={'cartItem'}>
            <View className={'checkBoxWrap'}>
              <Checkbox
                checked={select.includes(item.shoppingGoodsId+'')}
                value={item.shoppingGoodsId}
                style={{
                  '--icon-size': '16px',
                  '--font-size': '14px',
                  '--gap': '6px'
                }}
              />
            </View>

            <Image className={'img'} src={item.dataPic}/>
            <View className={'info'}>
              <Text className={'goodsName'}>{item.goodsName}</Text>
              <View className={'size'}>规格：{item.skuName} X {item.goodsCamount}</View>
              <View className={'handleWrap'}>
                <Text className={'price'}>￥{item.pricesetNprice}</Text>
                <NumStep
                  count={item.goodsCamount}
                  handleStep={handleStep.bind(null, item.shoppingGoodsId, item.goodsCamount)}
                />
              </View>
            </View>
          </View>
        ))
      }
    </SmoothCheckbox>
  )
}
