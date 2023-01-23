import { memo } from 'react';
import { navigatorImpl, useComponent } from '@brushes/qj-simulate-component';
import { getEnv } from '@brushes/api';
import { routerMap } from '../../routerMap';
import {usePlaceOrder} from './hooks/usePlaceOrder';
import {Address} from './components/address';
import ShopJsx from './components/shop';
import OrderPrice from './components/orderPrice';

const flag = getEnv();

export interface PaymentOrderType {
    skuId?: string;
    goodsNum?: string;
    shoppingGoodsId?: string
}

const PlaceOrderJsx: React.FC<PaymentOrderType> = ({goodsNum,skuId, shoppingGoodsId}) => {
    const { View, Text } = useComponent();
    const { savePayPrice, address, list, payState } = usePlaceOrder({skuId,goodsNum, shoppingGoodsId})
    return (
        <View
            className={'placeOrder'}
            style={{
                height: flag ? '100vh' : '667px'
            }}
        >
            <View
              className={'chooseAddress'}
              onClick={() => navigatorImpl(routerMap.addressList)}
            >
                <Address address={address}/>
            </View>
            <ShopJsx goodsList={list.current}/>
            {/*<CardJsx key={item.contractGoodsId} {...item} />*/}
            <View className={'info blcWrap'}>
                <View className={'express blcItem'}>
                    <View className={'label'}>配送方式</View>
                    <View className={'value'}>快递</View>
                </View>
                <View className={'coupon blcItem'}>
                    <View className={'label'}>使用优惠</View>
                    <View className={'value'}>
                        可选择使用优惠码/优惠码
                        <Text className={'icon'}></Text>
                    </View>
                </View>
            </View>

            {/* 下单页面的价格信息 */}
            <OrderPrice savePayPrice={savePayPrice} payState={payState.current}/>
        </View>
    );
};

export const PlaceOrder = memo(PlaceOrderJsx);
