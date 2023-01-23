import { memo, useEffect, useState } from 'react';
import { getEnv, queryContractPageC } from '@brushes/api';
import { useComponent, ScrollView, Loading } from '@brushes/qj-simulate-component';
import { Item } from './orderItem';
import { result } from './mock';
import { TabItemType } from '@brushes/qj-simulate-component';

function OrderListItemJsx({ item }: { item: TabItemType }) {
    const { View } = useComponent();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const isTaro = getEnv();

    useEffect(() => {
        onScroll();
    }, []);

    const onScroll = async (e = {}) => {
        setLoading(true);
        try {
            const data = await queryContractPageC({ page: 1, rows: 10 });
            setData((val) => val.concat(data.rows));
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    console.log('23=====>', data);

    return (
        <View className={'orderListItemWrap'} style={{ height: isTaro ? '100vh' : '667px' }}>
            <ScrollView onScroll={onScroll} style={{ height: '100vh' }}>
                <View>
                    {data.map((item, index) => (
                        <Item {...item} key={index} />
                    ))}
                    {loading ? <Loading /> : null}
                </View>
            </ScrollView>
        </View>
    );
}

export const OrderListItem = memo(OrderListItemJsx);
