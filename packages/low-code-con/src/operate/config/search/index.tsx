import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectColor, SwiperComponent} from "../../common";
export const formConfig: Array<FieldType> = [
  {
    label: '搜索',
    name: 'value',
    type: 'text',
    extraProps: {
      showCount: true,
      maxLength: 10
    }
  },
  {
    label: '字体颜色',
    name: 'fontColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '显示图标',
    name: 'iconShow',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        },
      ]
    }
  },
  {
    label: '搜索框背景色',
    name: 'backgroundColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
    }
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '上边距',
    name: 'paddingTop',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '下边距',
    name: 'paddingBottom',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '左边距',
    name: 'paddingLeft',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '右边距',
    name: 'paddingRight',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
]

export const title = '搜索配置';
export const info = '设置搜索的样式。';
