import React from 'react';
import { FieldType } from '@brushes/components';

export const defaultFormConfig: Array<FieldType> = [
    {
        label: '货号',
        name: 'fileRemark',
        type: 'text',
        extraProps: {
            placeholder: '请输入货号'
        }
    },
];
