import React, { useState, memo } from 'react';
import { View } from '@tarojs/components';

interface TextsType {
    defaultValue: Array<{
        title: string | number;
        subTitle: string | number;
    }>;
    margin?: number;
    cell: number;
    gap?: number;
    circular?: number;
}

const TextJsx: React.FC<TextsType> = ({ defaultValue = [], margin, circular, cell, gap = 10 }) => {
    const [list, setList] = useState<Array<any>>(defaultValue);
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
                        borderRadius: circular === 1 ? 8 : 0
                    }}
                    className={'goods'}
                    key={index}
                >
                    <div className={'space'}>
                        <div className={'titleType'}>{item.title}</div>
                        <div className={'subTitle'}>{item.subTitle}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const Texts = memo(TextJsx);
