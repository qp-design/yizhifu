import { memo, useRef, useState } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import EvaluateItem from '../../common/evaluateItem';
import { evaluateListFake } from '../../common/mock';

const EvaluateListJsx = () => {
    const [active, setActive] = useState('1');
    const { View } = useComponent();
    const tabs = useRef([
        {
            label: '全部',
            num: '900+',
            index: '1'
        },
        {
            label: '好评',
            num: '800+',
            index: '2'
        },
        {
            label: '中评',
            num: '99+',
            index: '3'
        },
        {
            label: '差评',
            num: '12',
            index: '4'
        }
    ]);

    const handleTab = (coe: string) => {
        setActive(coe);
    };

    return (
        <>
            <View className={'evaluateListTab'}>
                {tabs.current.map((item) => {
                    return (
                        <View
                            className={`evaluateListTabItem ${item.index === active ? 'active' : ''}`}
                            key={item.index}
                            data-index={item.index}
                            onClick={handleTab.bind(null, item.index)}
                        >
                            {item.label} {item.num}
                        </View>
                    );
                })}
            </View>
            <View className={'evaluateListContent'}>
                {evaluateListFake.map((item, index) => {
                    return <EvaluateItem itemData={item} key={index} />;
                })}
            </View>
        </>
    );
};

export const EvaluateList = memo(EvaluateListJsx);
