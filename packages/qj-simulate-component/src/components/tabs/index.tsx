import React, { ReactNode, useState } from 'react';
import { useComponent } from '../../hooks';
import TabsHeader from './components/tabs';

interface TabsType {
    tabs: Array<TabItemType>;
    render: (item: TabItemType) => ReactNode;
}

export interface TabsHeaderType {
    tabs: Array<TabItemType>;
    onChange: (e: number, item: TabItemType) => void;
    actived: number;
}

export interface TabItemType {
    name: string;
    code: string;
}

export const Tabs: React.FC<TabsType> = ({ tabs, render }) => {
    const { View } = useComponent();
    const [actived, setActived] = useState(0);
    const [arr, setArr] = useState<Array<TabItemType>>([tabs[0]]);

    const onChange = (index: number, item: TabItemType) => {
        setActived(index);
        setArr((prevState) => {
            prevState[index] = item;
            return prevState;
        });
    };

    return (
        <>
            <TabsHeader actived={actived} onChange={onChange} tabs={tabs} />
            {arr.map((item, index) => {
                return (
                    <View key={index} style={{ display: index === actived ? 'block' : 'none' }}>
                        {render(item)}
                    </View>
                );
            })}
        </>
    );
};
