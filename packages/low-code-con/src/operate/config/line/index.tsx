import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectColor, SwiperComponent} from "../../common";
export const formConfig: Array<FieldType> = [
  {
    label: '高度',
    name: 'height',
    type: 'number',
    extraProps: {
      addonAfter: 'px',
      min: 1,
      style: {
        width: 100
      }
    }
  },
  {
    label: '宽度',
    name: 'width',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '圆角',
    name: 'borderRadius',
    type: 'slot',
    extraProps: {
      render: SwiperComponent
    }
  },
  {
    label: '背景颜色',
    name: 'backgroundColor',
    type: 'slot',
    extraProps: {
      render: SelectColor
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
  }
]

export const title = '分隔线配置';
export const info = '设置分隔线的内容或样式。';
