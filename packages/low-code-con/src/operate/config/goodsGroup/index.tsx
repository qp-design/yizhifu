import {FieldType} from '@brushes/components';
import React from 'react';
import {SelectCube, SelectGoodsGroup} from "../../common";
import AddButton from "../../common/addButton";
export const formConfig: Array<FieldType> = [
  {
    label: '设置商品分类',
    name: 'selectGoodsGroup',
    type: 'formList',
    extraProps: {
      innerForm: [
        {
          label: '',
          name: 'title',
          type: 'slot',
          extraProps: {
            render: SelectGoodsGroup,
            parentName: ['selectGoodsGroup'],
          }
        },
      ],
      AddJsx: ({add}) => {
        return (<AddButton add={add} title={'添加商品组'}/>)
      }
    }
  },
  {
    label: '是否圆角',
    name: 'borderRadius',
    type: 'radioGroup',
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
    label: '上边距',
    name: 'marginTop',
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
    name: 'marginBottom',
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

export const title = '图片配置';
export const info = '设置图片的展示方式、内容或样式。';
