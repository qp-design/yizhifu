import { FieldType } from '@brushes/components';
import React from 'react';
import {SelectCube} from "../../common";
import AddButton from "../../common/addButton";
import {ComputedImg} from '../../common/computedImg';

export const formConfig: Array<FieldType> = [
  {
    label: '自动123播放',
    name: 'autoplay',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  },
  {
    label: '切换123间隔',
    name: 'autoplayInterval',
    type: 'number',
    extraProps: {
      min: 0,
      style: {
        width: 100
      }
    }
  },
  {
    label: '方向',
    name: 'direction',
    type: 'radioGroup',
    extraProps: {
      options: [
        {
          label: '水平',
          value: 'horizontal'
        },
        {
          label: '垂直',
          value: 'vertical'
        }
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
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  },
  {
    label: '选择图片',
    name: 'selectImg',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '',
          name: ['imgUrl', 'link'],
          type: 'slot',
          extraProps: {
            render: SelectCube,
            parentName: ['selectImg'],
          }
        }
      ],
      AddJsx: ({add}) => {
        return (<AddButton add={add}/>)
      }
    }
  },
  {
    label: '',
    name: 'imgHeight',
    type: 'slot',
    extraProps: {
      render: ComputedImg,
      computedName: 'imgUrl',
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

export const title = '轮播图配置';
export const info = '设置轮播图的展示方式、内容或样式。';
