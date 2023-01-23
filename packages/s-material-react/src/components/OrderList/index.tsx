import React, { memo, useRef } from 'react';
import { useComponent, Tabs } from '@brushes/qj-simulate-component';
import { OrderListItem } from './components/OrderListItem';

const OrderListJsx: React.FC = ({ defaultIndex = 0 }: { defaultIndex?: number }) => {
    console.log('location', defaultIndex);
    const { View } = useComponent();

    const tabs = useRef([
        { name: '全部', code: 'all' },
        { name: '待付款', code: 'waiting' },
        { name: '待发货', code: 'delivery' },
        { name: '待收货', code: 'receive' },
        { name: '已完成', code: 'done' }
    ]);

    return (
        <View className={'order-container'}>
            <Tabs
                defaultIndex={defaultIndex}
                tabs={tabs.current}
                render={(item) => (
                    <View className={'orderList'}>
                        <OrderListItem item={item} />
                    </View>
                )}
            />
        </View>
    );
};

export const OrderList = memo(OrderListJsx);
