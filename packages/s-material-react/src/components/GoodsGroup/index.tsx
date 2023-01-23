import React, { memo, useEffect, useState } from 'react';
import { antdMobile } from '@brushes/qj-simulate-component';
import { _ } from '@brushes/tools';
import { Goods } from '../Goods';

const { JumboTabs } = antdMobile;
const { isUndefined, isEmpty } = _;

interface GoodsType {
    goodsCode: number;
    goodsName: string;
    brandName: string;
    pricesetNprice: number;
    pricesetMakeprice: number;
    dataPic: string;
}

interface GroupType {
    title: string;
    subTitle: string;
    defaultValue: Array<GoodsType>;
    goodsList?: Array<GroupType>;
    borderRadius: number;
}

interface GoodsGroupType {
    defaultValue: Array<GroupType>;
    type: 1;
    selectGoodsGroup: Array<GroupType>;
    marginTop: number;
    marginBottom: number;
}

const GoodsGroupJsx: React.FC<GoodsGroupType> = ({
    defaultValue = [],
    type,
    selectGoodsGroup = [],
    marginTop,
    marginBottom,
    borderRadius
}) => {
    const [list, setList] = useState(defaultValue);

    useEffect(() => {
        const computedArr = selectGoodsGroup
            .filter((item) => !isUndefined(item))
            .filter((item) => !Object.values(item).every((citem) => isUndefined(citem)));
        let arr = defaultValue;
        if (!isEmpty(computedArr)) {
            arr = computedArr;
        }
        setList(arr);
    }, [selectGoodsGroup]);

    return (
        <JumboTabs
            style={{
                marginTop: marginTop + 'px',
                marginBottom: marginBottom + 'px'
            }}
        >
            {list.map((item, index) => {
                return (
                    <JumboTabs.Tab title={item.title} description={item.subTitle} key={index}>
                        <Goods
                            defaultValue={item.defaultValue}
                            cell={2}
                            goods={item.goodsList}
                            classCode={'two'}
                            circular={borderRadius}
                        />
                    </JumboTabs.Tab>
                );
            })}
        </JumboTabs>
    );
};

export const GoodsGroup = memo(GoodsGroupJsx);
