import React, {useEffect} from 'react';
import {Form} from 'antd';
import {dynamicFormFields} from '@brushes/components';

import './index.scss';
import {SelectGoods} from "../selectGoods";


export const SelectGoodsGroup: React.FC = ({form, name, parentName = []}: any) => {
  console.log(name)
  const [ind] = name;
  return (
    <div className={'SelectGoodsGroupItem'}>
      {
        dynamicFormFields([
          {
            label: '主标题',
            name: [ind, 'title'],
            type: 'text'
          },
          {
            label: '副标题',
            name: [ind, 'subTitle'],
            type: 'text'
          },
          {
            label: '选择商品',
            name: [parentName, ind, 'goodsList'],
            type: 'slot',
            extraProps: {
              render: SelectGoods
            }
          }
        ], form)
      }
    </div>
  )
}
