import React, { useEffect, useState, memo, useRef } from 'react';
import { View, Text } from '@tarojs/components';
import { querySkuNotOnShelf } from '../../store';
import { _ } from '@brushes/tools';
const { isEqual, isEmpty } = _;

interface GoodsType {
    value: Array<{
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
}
const GoodsJsx: React.FC<GoodsType> = ({ value = [], margin, circular, cell, gap = 10, goods = [], markedPrice }) => {
    const [list, setList] = useState<Array<any>>(value);
    const preGoods = useRef<Array<any>>();
    useEffect(() => {
        if(isEqual(preGoods.current, goods)) return;
        preGoods.current = goods;
        if(isEmpty(goods)) {
            setList(value)
            return
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
            try{
                const data = await Promise.all(arr);
                let result: any[] = [];
                data.forEach((item: any) => {
                    if(item.rows) {
                        result = result.concat(item.rows)
                    }
                });
                setList(result);
            } catch (err) {
                setList(value);
            }

        })();
        return () => {
            console.log(54, goods, preGoods.current);
        }
    }, [goods]);

    return (
        <View
            style={{
                display: 'grid',
                gap,
                marginBottom: margin,
                gridTemplateColumns: `repeat(${cell}, 1fr)`
            }}
        >
            {list.map((item, index) => (
                <View
                    style={{
                        overflow: 'hidden',
                        borderRadius: circular === 2 ? 0 : '16Px'
                    }}
                    className={'goods'}
                    key={item.goodsCode}
                >
                    <View className={`goods-img`} style={{backgroundImage: `url(${item.dataPic})`}}></View>
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
                        {/*<QjIcon name={'icon-icon2'} />*/}
                    </View>
                </View>
            ))}
        </View>
    );
};

export const Goods = memo(GoodsJsx);
