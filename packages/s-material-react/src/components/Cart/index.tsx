import {memo, useState} from 'react';
import {useComponent, SmoothCheckbox} from '@brushes/qj-simulate-component';
import {getEnv} from '@brushes/api';
import {useCartList} from './hooks';
import {CartItem} from './components/cartItem';
import {StoreProvider, useStore} from './store';

const flag = getEnv();

const CartJsx = () => {
  const [editState, setEditState] = useState(true);
  const {View, Text, Checkbox} = useComponent();
  const { select } = useStore()
  const {cartList, amount, selectAll, allCart, toOrderImpl} = useCartList();

  return (
    <View
      className={'cart'}
      style={{
        height: flag ? '100%' : '667px'
      }}
    >
      <View className={'edit'}>
        <View
          className={'btn'}
          onClick={() => setEditState(!editState)}
        >
          {editState ? '编辑' : '完成'}
        </View>
      </View>

      <View className={'itemGroup'}>
        <CartItem list={cartList.shoppingGoodsList}/>
      </View>

      <View className={'dashboard'}>
        <View className={'choose'}>
          <SmoothCheckbox onChange={selectAll}>
            <Checkbox
              checked={allCart.current.length === select.length}
              value={'true'}
              style={{
                '--icon-size': '16px',
                '--font-size': '14px',
                '--gap': '6px'
              }}
            >
              全选
            </Checkbox>
          </SmoothCheckbox>
        </View>
        {editState ? (
          <View className={'check'}>
            <View className={'priceGroup'}>
              <View className={'discount'}>
                优惠: <Text className={'data'}>￥ {cartList.disMoney || 0}</Text>
              </View>
              <View className={'all'}>
                合计: <Text className={'data'}>￥ {amount.amount}</Text>
              </View>
            </View>
            <View onClick={toOrderImpl} className={'btn'}>结算({amount.num})</View>
          </View>
        ) : (
          <View className={'del'}>
            <View className={'btn'}>删除</View>
          </View>
        )}
      </View>
    </View>
  );
};

const WrapCartJsx = () => {
  return (
    <StoreProvider>
      <CartJsx/>
    </StoreProvider>
  )
}

export const Cart = memo(WrapCartJsx);
