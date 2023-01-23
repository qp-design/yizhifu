import { useEffect, useRef, useState } from 'react';
import { find } from '@brushes/api';
import { _, useImmutableCallback } from '@brushes/tools';
import { FilterType } from '../index';

const { isEmpty } = _;

export interface ListType {
    skuCode: string;
    dataPic: string;
    goodsName: string;
    pricesetNprice: number;
}

export function useGoodsList(classtreeCode: string, searchParam: string, filterParmas: FilterType) {
    const isCanScroll = useRef(true);
    const num = useRef(0);
    const [list, setList] = useState<Array<ListType>>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        resetImpl();
    }, [filterParmas]);

    const resetImpl = useImmutableCallback(() => {
        num.current = 0;
        isCanScroll.current = true;
        setList([]);
        getData(filterParmas);
    });

    const getData = useImmutableCallback(async ({ sortField = 'pricesetNprice', order = '' }) => {
        if (!isCanScroll.current) return;
        ++num.current;
        setLoading(true);
        const response = await find({
            distinctField: 'goodsNo',
            sortField,
            order: order,
            goodsType: '00,50',
            page: num.current,
            rows: 10,
            searchParam,
            classtreeCode
        });

        if (isEmpty(response.list)) {
            isCanScroll.current = false;
        }

        setLoading(false);
        setList((prevState) => prevState.concat(response.list));
    });

    return {
        loading,
        getData,
        list
    };
}
