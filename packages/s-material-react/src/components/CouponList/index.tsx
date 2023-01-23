import { memo, useRef, useState } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import { getEnv } from '@brushes/api';

const CouponListJsx = () => {
    const { View, Text } = useComponent();
    const [coe, setCoe] = useState(1);
    const flag = getEnv();
    const config = useRef([
        {
            id: 1,
            label: '未使用'
        },
        {
            id: 2,
            label: '已使用'
        },
        {
            id: 3,
            label: '已失效'
        }
    ]);
    return (
        <View
            className={'couponList'}
            style={{
                height: flag ? '100vh' : '667px'
            }}
        >
            <View className={'couponTab'}>
                {config.current.map((item) => {
                    return (
                        <View
                            className={`couponTabItem ${coe === item.id ? 'active' : ''}`}
                            key={item.id}
                            onClick={() => setCoe(item.id)}
                        >
                            {item.label}
                            <Text className={'icon'}></Text>
                        </View>
                    );
                })}
            </View>
            <View className={'couponListContent'}>
                <View className={'couponListItem unused'}>
                    <View className={'coupon-content'}>
                        <View className={'price'}>
                            <Text className={'symbol'}>￥</Text>
                            <Text className={'num'}>123</Text>
                        </View>
                        <View className={'info'}>
                            <Text className={'title'}>整单立减10元 满199可用</Text>
                            <Text className={'date'}>有效期至：2022-10-01</Text>
                            <View className={'btn'}>已使用</View>
                        </View>
                    </View>
                </View>

                <View className={'couponListItem used'}>
                    <View className={'coupon-content'}>
                        <View className={'price'}>
                            <Text className={'symbol'}>￥</Text>
                            <Text className={'num'}>123</Text>
                        </View>
                        <View className={'info'}>
                            <Text className={'title'}>整单立减10元 满199可用</Text>
                            <Text className={'date'}>有效期至：2022-10-01</Text>
                            <View className={'btn'}>已使用</View>
                        </View>
                    </View>
                </View>

                <View className={'couponListItem overdue'}>
                    <View className={'coupon-content'}>
                        <View className={'price'}>
                            <Text className={'symbol'}>￥</Text>
                            <Text className={'num'}>123</Text>
                        </View>
                        <View className={'info'}>
                            <Text className={'title'}>整单立减10元 满199可用</Text>
                            <Text className={'date'}>有效期至：2022-10-01</Text>
                            <View className={'btn'}>已使用</View>
                            <View className={'round'}>已失效</View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const CouponList = memo(CouponListJsx);
