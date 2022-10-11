import React, { useEffect, useState, memo, useRef } from 'react';
import { View } from '@tarojs/components';

interface TextsType {
    value: Array<{
        title: string | number;
        subTitle: string | number;
    }>;
    margin?: number;
    cell: number;
    gap?: number;
    circular?: number;
}

const TextJsx: React.FC<TextsType> = ({ value = [], margin, circular, cell, gap = 10 }) => {
    const [list, setList] = useState<Array<any>>(value);
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
                        borderRadius: circular === 1 ? 8 : 0
                    }}
                    className={'goods'}
                    key={index}
                >
                    <View className={'space'}>
                        <View className={'titleType'}>{item.title}</View>
                        <View className={'subTitle'}>{item.subTitle}</View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export const Texts = memo(TextJsx);
