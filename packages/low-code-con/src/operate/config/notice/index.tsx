import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectColor} from '../../common';
export const formConfig: Array<FieldType> = [
  {
    label: '标题内容',
    name: 'text',
    type: 'textarea',
    extraProps: {
      showCount: true,
      maxLength: 100
    }
  },
  {
    label: '字体大小',
    name: 'fontSize',
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
    label: '字体颜色',
    name: 'color',
    type: 'slot',
    extraProps: {
      render: SelectColor
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
    label: '边框色',
    name: 'borderColor',
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
  }
]

export const title = '文本配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1,
}
