import { memo } from 'react';
import { navigatorImpl, useComponent } from '@brushes/qj-simulate-component';
import { getEnv } from '@brushes/api';
import { routerMap } from '../../routerMap';
import {useOrderResult} from './hooks/useOrderResult';

const flag = getEnv();

const PlaceOrderResultJsx = ({code}: { code:string }) => {
    const { View, Text } = useComponent();
    const { paymentImpl } = useOrderResult(code)
    return (
        <View
            className={'placeOrderResult'}
            style={{
                height: flag ? '100vh' : '667px'
            }}
        >
            <View className={'placeOrderResultContent'}>
                <Text className={'icon'} />
                <View className={'tips'}>
                    <Text className={'title'}>订单支付成功</Text>
                    <Text className={'tip'}>您的订单将保留15分钟，可点击下方“去支付”完成订单</Text>
                </View>

                <View className={'placeOrderResultWrap'}>
                    <View className={'placeOrderResultItem'}>
                        <Text className={'label'}>订单号：</Text>
                        <Text className={'value'}>324324823748237</Text>
                    </View>
                    <View className={'placeOrderResultItem'}>
                        <Text className={'label'}>商品数量：</Text>
                        <Text className={'value'}>1</Text>
                    </View>
                    <View className={'placeOrderResultItem'}>
                        <Text className={'label'}>支付方式：</Text>
                        <Text className={'value'}>微信支付</Text>
                    </View>
                    <View className={'placeOrderResultItem'}>
                        <Text className={'label'}>支付金额：</Text>
                        <Text className={'value'}>￥ 9999.00</Text>
                    </View>
                </View>

                <View className={'btnGroup'}>
                    <View className={'btn black'} onClick={() => navigatorImpl(routerMap.orderDetail)}>
                        查看订单
                    </View>
                    <View onClick={paymentImpl} className={'btn white'}>继续购物</View>
                </View>
            </View>
        </View>
    );
};

export const PlaceOrderResult = memo(PlaceOrderResultJsx);
