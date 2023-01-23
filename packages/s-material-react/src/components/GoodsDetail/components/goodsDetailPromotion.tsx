import { useComponent } from '@brushes/qj-simulate-component';

const GoodsDetailPromotion = ({ promotionList }: any) => {
    const { View, Text } = useComponent();

    return (
        <View className={'goodsDetail-promotion'}>
            <Text className={'label'}>促销</Text>
            <View className={'group'}>
                {promotionList.length ? (
                  promotionList.map(({discName}: {discName:string}, index) => {
                        return (
                            <View className={'item'} key={index}>
                                {discName}
                            </View>
                        );
                    })
                ) : (
                    <View className={'noPromotion'}>暂无促销活动</View>
                )}
            </View>
        </View>
    );
};

export default GoodsDetailPromotion;
