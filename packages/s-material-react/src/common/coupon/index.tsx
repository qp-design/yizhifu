import { memo } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
const CouponJsx = ({ index, item, onChange }: any) => {
    const { View, Text, Radio } = useComponent();
    return (
        <View className="couponItem">
            <View className={'coupon-content'}>
                <View className={'price'}>
                    <Text className={'symbol'}>￥</Text>
                    <Text className={'num'}>{item.price}</Text>
                </View>
                <View className={'info'}>
                    <Text className={'title'}>{item.title}</Text>
                    <Text className={'date'}>有效期至：{item.date}</Text>
                </View>
                <Radio onChange={onChange} value={item.id} className={'choose'}></Radio>
            </View>
        </View>
    );
};

export const Coupon = memo(CouponJsx);
