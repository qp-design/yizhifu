import {FieldType} from '@brushes/components';
import React from 'react';
export const formConfig: Array<FieldType> = [
  {
    label: '头像样式',
    name: 'avatarStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆形'
        },
        {
          value: 0,
          label: '圆角矩形'
        },
      ]
    }
  },
  {
    label: '广告占位',
    name: 'banner',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 1,
          label: '显示'
        },
        {
          value: 0,
          label: '隐藏'
        },
      ]
    }
  }
]

export const title = '我的配置';
export const info = '配置我的页面的样式、元素的显示或隐藏';
