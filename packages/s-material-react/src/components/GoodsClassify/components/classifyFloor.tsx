import { useComponent, navigatorImpl } from '@brushes/qj-simulate-component';
import { checkImgUrl } from '../../../utils/checkImgUrl';
import { routerMap } from '../../../routerMap';

export const ClassifyFloor = ({ navList, activeKey }: any) => {
    const { View, Text } = useComponent();

    return navList.map((item: any) => (
        <View
            key={item.goodsClassCode}
            className={['content', activeKey === `${item.goodsClassCode}` ? ' active' : ''].join('')}
        >
            {item?.childList.map((classifyItem: any) => {
                return (
                    <View key={classifyItem.goodsClassCode} className={'classifyFloor'}>
                        <View className={'titleWrap'}>
                            <Text className={'title'}>{classifyItem.goodsClassName}</Text>
                            <Text className={'line'}></Text>
                        </View>
                        <View className={'container'}>
                            {classifyItem.childList.map(
                                ({ classtreeCode, goodsClassCode, goodsClassLogo, goodsClassName }: any) => {
                                    return (
                                        <View
                                            onClick={() =>
                                                navigatorImpl(`${routerMap.goodList}?classtreeCode=${classtreeCode}`)
                                            }
                                            className={'classifyFloorGoodsItem'}
                                            key={goodsClassCode}
                                        >
                                            <img src={checkImgUrl(goodsClassLogo)} className={'logo'} />
                                            <Text className={'title'}>{goodsClassName}</Text>
                                        </View>
                                    );
                                }
                            )}
                        </View>
                    </View>
                );
            })}
        </View>
    ));
};
