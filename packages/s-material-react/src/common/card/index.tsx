import { useComponent } from '@brushes/qj-simulate-component';

export interface CardItemType {
    dataPic: string;
    goodsName: number;
    dataBmoney: number;
    goodsCamount: number;
    contractGoodsId: number;
}

export const CardJsx = ({ dataPic, goodsName, dataBmoney, goodsCamount }: CardItemType) => {
    const { View, Image } = useComponent();
    return (
        <View className={'card-item'}>
            <Image src={dataPic} alt="" className={'card-item-img'} />
            <View className={'card-item-info'}>
                <View className={'card-item-info-container'}>
                    <View className={'card-item-info-container-title'}>{goodsName}</View>
                    <View className={'card-item-info-container-price'}>￥{dataBmoney}</View>
                </View>
                <View className={'card-item-info-sub'}>
                    <View className={'sku'}>30ml</View>
                    <View className={'count'}>x {goodsCamount}</View>
                </View>
            </View>
        </View>
    );
};
