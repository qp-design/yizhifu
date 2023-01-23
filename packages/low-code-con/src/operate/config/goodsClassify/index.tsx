import {FieldType} from '@brushes/components';
import React from 'react';
export const formConfig: Array<FieldType> = [
  {
    label: '选择模版',
    name: 'cell',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '一行1个'
        },
        {
          value: 2,
          label: '一行2个'
        },
      ]
    }
  },
  {
    label: '是否圆角',
    name: 'circular',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 2,
          label: '直角'
        },
      ]
    }
  },
  {
    label: '间距',
    name: 'margin',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 8,
          label: '小'
        },
        {
          value: 10,
          label: '中'
        },
        {
          value: 15,
          label: '大'
        },
      ]
    }
  },
]

export const title = '文本配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1,
}
