import React, { useEffect, useState, memo, useRef } from 'react';
import { View, Text } from '@tarojs/components';
import { querySkuNotOnShelf } from '@brushes/api';
import { _ } from '@brushes/tools';
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
}
const GoodsJsx: React.FC<GoodsType> = ({ defaultValue = [], margin, circular, cell, gap = 10, goods = [], markedPrice }) => {
    const [list, setList] = useState<Array<any>>(defaultValue);
    const preGoods = useRef<Array<any>>();
    console.log(26, )
    useEffect(() => {
        if(isEqual(preGoods.current, goods)) return;
        preGoods.current = goods;
        if(isEmpty(goods)) {
            setList(defaultValue)
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
        <div
            style={{
                display: 'grid',
                gap,
                marginBottom: margin,
                gridTemplateColumns: `repeat(${cell}, 1fr)`
            }}
        >
            {list.map((item, index) => (
                <div
                    style={{
                        overflow: 'hidden',
                        borderRadius: circular === 2 ? 0 : '16Px'
                    }}
                    className={'goods'}
                    key={item.goodsCode}
                >
                    <div className={`goods-img`} style={{backgroundImage: `url(${item.dataPic})`}}></div>
                    <div className={'space'}>
                        <div className={'titleType'}>{item.goodsName}</div>
                        <div className={'subTitle'}>{item.brandName}</div>
                        <div className={'price'}>
                            <div className={'subPrice'}>¥</div>
                            {item.pricesetNprice}
                            {markedPrice === 1 && (
                                <div className={'markedPrice'}>
                                    <div className={'subPrice'}>¥</div>
                                    {item.pricesetMakeprice}
                                </div>
                            )}
                        </div>
                        {/*<QjIcon name={'icon-icon2'} />*/}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Goods = memo(GoodsJsx);
