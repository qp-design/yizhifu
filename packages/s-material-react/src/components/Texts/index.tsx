import React, { useState, memo } from 'react';
import { View } from '@tarojs/components';
import { Image, Space } from 'antd-mobile'

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

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
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
          <Image src={demoSrc} />
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
