import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectPicture} from "../../common";
export const formConfig: Array<FieldType> = [
  {
    label: '视频地址',
    name: 'url',
    type: 'slot',
    extraProps: {
      render: SelectPicture
    }
  },
  {
    label: '视频封面',
    name: 'poster',
    type: 'slot',
    extraProps: {
      render: SelectPicture
    }
  },
  {
    label: '自动播放',
    name: 'autoplay',
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
    label: '循环播放',
    name: 'loop',
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
  }
]

export const title = '视频配置';
export const info = '设置视频的内容或样式。上传视频的比例建议为 320 * 240';
