import { memo } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import { SEARCH } from '../../static';

const GoodsDetailTopInfoJsx = () => {
    const { View, Text } = useComponent();
    return (
        <View className={'goodsDetail-topInfo-wrap'}>
            <View className={'goodsDetail-topInfo'}>
                <View>
                    <Text className={'name'}>宠侣 狗狗零食鸡肉绕饼干620g宠</Text>
                    <Text className={'price'}>￥2300.00</Text>
                </View>
                <View className={'rPart'}>
                    <img src={SEARCH} alt="" className={'icon'} />
                    <Text className={'txt'}>已收藏</Text>
                </View>
            </View>
        </View>
    );
};

export const GoodsDetailTopInfo = memo(GoodsDetailTopInfoJsx);
