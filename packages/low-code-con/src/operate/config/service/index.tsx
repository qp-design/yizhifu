import {FieldType} from '@brushes/components';
import React from 'react';
export const formConfig: Array<FieldType> = [
  {
    label:'宽度',
    name:'width',
    type:'number',
    extraProps:{
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label:'高度',
    name:'height',
    type:'number',
    extraProps:{
      addonAfter: 'px',
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label:'形状',
    name:'borderRadius',
    type:'radioGroup',
    extraProps:{
      options:[
        {
          value: 100,
          label: '圆形'
        },
        {
          value: 0,
          label: '矩形'
        },
        {
          value: 24,
          label:'圆角矩形'
        }
      ]
    }
  },
  {
    label: '上偏移',
    name: 'top',
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
    label: '右偏移',
    name: 'right',
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
    label: '下偏移',
    name: 'bottom',
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
    label: '左偏移',
    name: 'left',
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

export const title = '客服配置';
export const info = '设置客服图标的样式。';
