import {useComponent} from '@brushes/qj-simulate-component';

interface OrderPriceType {
  payState: {
    shoppingCountPrice: string | number;
    freight: string | number;
    accountsSumPrice: string | number;
    comDisMoney: string | number;
  },
  savePayPrice: () => void
}

const OrderPrice: React.FC<OrderPriceType> = ({ payState, savePayPrice }) => {
  const { View, Text } = useComponent();
  const { shoppingCountPrice, freight, accountsSumPrice, comDisMoney } = payState;
  return (
    <>
    <View className={'price blcWrap'}>
      <View className={'title'}>价格明细</View>
      <View className={'express blcItem'}>
        <View className={'label'}>商品总金额</View>
        <View className={'value'}>￥ {shoppingCountPrice}</View>
      </View>
      <View className={'coupon blcItem'}>
        <View className={'label'}>优惠金额</View>
        <View className={'value'}>￥ {comDisMoney}</View>
      </View>
      <View className={'express blcItem'}>
        <View className={'label'}>运费</View>
        <View className={'value'}>￥ {freight}</View>
      </View>
      <View className={'all blcItem'}>
        <View className={'label'}>总计</View>
        <View className={'value'} style={{ color: '#000' }}>
          ￥ {accountsSumPrice}
        </View>
      </View>
    </View>

    <View className={'placeOrderFooter'}>
      <Text className={'price'}>合计: {accountsSumPrice}</Text>
      <View className={'btn'} onClick={savePayPrice}>
        生成订单
      </View>
    </View>
    </>
  )
}

export default OrderPrice
