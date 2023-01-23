import React, { memo, useState } from 'react';
import { Loading, navigatorImpl, ScrollView, useComponent } from '@brushes/qj-simulate-component';
import { QjMobileIcon } from '../../common/icon';
import { Filter } from './components/filter';
import { useGoodsList } from './hooks/useGoodsList';
import { routerMap } from '../../routerMap';

export interface FilterType {
    sortField: string;
    order?: string | undefined;
}
const GoodsListJsx: React.FC = ({
    classtreeCode = '',
    searchParam = ''
}: {
    classtreeCode?: string;
    searchParam?: string;
}) => {
    const { View, Text } = useComponent();
    const [filterParmas, setFilterParams] = useState({} as FilterType);
    const { loading, getData, list } = useGoodsList(classtreeCode, searchParam, filterParmas);
    return (
        <View className={'goodsList'}>
            <View className={'top-info'}>
                <View className={'top-info-search'} onClick={() => navigatorImpl(routerMap.search)}>
                    <QjMobileIcon value="fenxiang" />
                    <Text>搜索商品</Text>
                </View>
                <Filter setParams={setFilterParams} />
            </View>

            <View className={'listWrap'}>
                <ScrollView onScroll={() => getData(filterParmas)} style={{ height: '100vh' }}>
                    <View className={'list'}>
                        {list.map((item) => {
                            return (
                                <View
                                    onClick={() => navigatorImpl(`${routerMap.goodDetail}?skuCode=${item.skuCode}`)}
                                    className={'listItem'}
                                    key={item.skuCode}
                                >
                                    <View className={'img'} style={{ backgroundImage: `url(${item.dataPic})` }}></View>
                                    <Text className={'name'}>{item.goodsName}</Text>
                                    <Text className={'price'}>￥ {item.pricesetNprice.toFixed(2)}</Text>
                                </View>
                            );
                        })}
                    </View>
                    {loading ? <Loading /> : null}
                </ScrollView>
            </View>
        </View>
    );
};

export const GoodsList = memo(GoodsListJsx);
