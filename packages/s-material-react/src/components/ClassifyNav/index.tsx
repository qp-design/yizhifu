import React, { memo, useEffect, useState } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import { _ } from '@brushes/tools';

const { isUndefined, isEmpty } = _;

interface ClassifyItemType {
    imgUrl: string;
    title: string;
    link: string;
}

interface ClassifyNavType {
    defaultValue: Array<ClassifyItemType>;
    borderRadius: number;
    paddingTop: number;
    paddingBottom: number;
    selectClassifyNav: Array<ClassifyItemType>;
}

const ClassifyNavJsx: React.FC<ClassifyNavType> = ({
    defaultValue,
    borderRadius,
    paddingTop,
    paddingBottom,
    selectClassifyNav
}) => {
    const [list, setList] = useState(defaultValue);
    const { View, Text } = useComponent();
    useEffect(() => {
        const computedArr = selectClassifyNav
            .filter((item) => !isUndefined(item))
            .filter((item) => !Object.values(item).every((citem) => isUndefined(citem)));
        let arr = defaultValue;
        if (!isEmpty(computedArr)) {
            arr = computedArr;
        }
        setList(arr);
    }, [selectClassifyNav]);

    return (
        <View style={{ paddingTop, paddingBottom }}>
            <View className={'classifyNav'}>
                {list.map((item, index) => {
                    return (
                        <View className={'classifyNavItem'} key={index}>
                            <img src={item.imgUrl} alt="" className={'img'} />
                            <Text className={'label'}>{item.title}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export const ClassifyNav = memo(ClassifyNavJsx);
