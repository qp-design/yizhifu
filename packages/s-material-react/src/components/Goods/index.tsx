import { useEffect, useState, memo, useRef } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import { querySkuNotOnShelf } from '@brushes/api';
import { _ } from '@brushes/tools';
// import { QjIcon } from '@brushes/share-resource';

import classNames from 'classnames';
import { QjMobileIcon } from '../../common/icon';

const { isEqual, isEmpty } = _;

interface GoodsType {
    defaultValue: Array<{
        goodsCode: string | number;
        goodsName: string | number;
        dataPic: string;
        brandName: string | number;
        pricesetNprice: number;
        pricesetMakeprice?: number;
    }>;
    margin?: number;
    cell: number;
    gap?: number;
    goods: Array<never> | undefined;
    circular?: number;
    markedPrice?: number;
    classCode?: string;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
}

const GoodsJsx: React.FC<GoodsType> = ({
    defaultValue = [],
    classCode = '',
    margin,
    circular,
    cell,
    gap = 10,
    goods = [],
    markedPrice,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
}) => {
    const [list, setList] = useState<Array<any>>(defaultValue);
    const preGoods = useRef<Array<any>>();
    const { View, Text } = useComponent();
    useEffect(() => {
        if (isEqual(preGoods.current, goods)) return;
        preGoods.current = goods;
        if (isEmpty(goods)) {
            setList(defaultValue);
            return;
        }
        (async () => {
            const arr = [];
            for (let i of goods) {
                arr.push(
                    querySkuNotOnShelf({
                        goodsCode: i
                    })
                );
            }
            try {
                const data = await Promise.all(arr);
                let result: any[] = [];
                data.forEach((item: any) => {
                    if (item.rows) {
                        result = result.concat(item.rows);
                    }
                });
                setList(result);
            } catch (err) {
                console.log(59, err);
                setList(defaultValue);
            }
        })();
        return () => {
            console.log(54, goods, preGoods.current);
        };
    }, [goods]);
    return (
        <View style={{ paddingTop, paddingBottom }}>
            <View
                className={classNames({ [`goods-${classCode}`]: true })}
                style={{
                    display: 'grid',
                    gap,
                    marginBottom: margin,
                    gridTemplateColumns: `repeat(${cell}, 1fr)`,
                    paddingLeft,
                    paddingRight
                }}
            >
                {list.map((item, index) => (
                    <View
                        style={{
                            overflow: 'hidden',
                            borderRadius: circular === 2 ? 0 : '8px'
                        }}
                        className={'goods'}
                        key={index}
                    >
                        <View className={`goods-img`} style={{ backgroundImage: `url(${item.dataPic})` }}></View>
                        <View className={'space'}>
                            <View className={'titleType'}>{item.goodsName}</View>
                            <View className={'subTitle'}>{item.brandName}</View>
                            <View className={'price'}>
                                <Text className={'subPrice'}>¥</Text>
                                {item.pricesetNprice}
                                {markedPrice === 1 && (
                                    <Text className={'markedPrice'}>
                                        <Text className={'subPrice'}>¥</Text>
                                        {item.pricesetMakeprice}
                                    </Text>
                                )}
                            </View>
                            <View className={'anticon'}>
                                <QjMobileIcon style={{ fontSize: 30, color: '#f00' }} value={'cart'} />
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export const Goods = memo(GoodsJsx);
