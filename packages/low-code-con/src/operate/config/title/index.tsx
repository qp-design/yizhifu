import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectColor} from "../../common";
export const formConfig: Array<FieldType> = [
  {
    label: '标题内容',
    name: 'value',
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
    label: '对齐方式',
    name: 'textAlign',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'left',
          label: '居左'
        },
        {
          value: 'center',
          label: '居中'
        },
        {
          value: 'right',
          label: '居右'
        }
      ]
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
    label: '粗体字',
    name: 'fontWeight',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'bold',
          label: '是'
        },
        {
          value: 'normal',
          label: '否'
        },
      ]
    }
  },
  {
    label: '斜体字',
    name: 'fontStyle',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'italic',
          label: '是'
        },
        {
          value: 'normal',
          label: '否'
        },
      ]
    }
  },
  {
    label: '下划线',
    name: 'textDecoration',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          value: 'underline',
          label: '是'
        },
        {
          value: 'none',
          label: '否'
        },
      ]
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

export const title = '标题配置';
export const info = '设置标题或文本的内容或样式。';
