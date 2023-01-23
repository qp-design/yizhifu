import {FieldType} from '@brushes/components';
import React from 'react';
export const formConfig: Array<FieldType> = [
  {
    label: '显示占位符',
    name: 'placeholder',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '是'
        },
        {
          value: 0,
          label: '否'
        },
      ]
    }
  },
  {
    label: '占位符文字',
    name: 'placeholderText',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '显示搜索记录',
    name: 'history',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '是'
        },
        {
          value: 0,
          label: '否'
        },
      ]
    }
  },
]

export const title = '搜索配置';
export const info = '设置搜索的样式和配置。';
