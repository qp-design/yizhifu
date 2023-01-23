import { memo } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';

const GoodsDetailPromotionJsx = () => {
    const { View } = useComponent();
    return (
        <View className={'goodsDetail-promotion-wrap'}>
            <View className={'goodsDetail-promotion'}></View>
        </View>
    );
};

export const GoodsDetailPromotion = memo(GoodsDetailPromotionJsx);
