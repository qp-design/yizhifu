// @ts-ignore
import React from 'react';
// @ts-ignore
import {RDnDProvider} from 'qj-shared-library';
// @ts-ignore
import { materialsList } from './mock'
import { QjIcon } from '@brushes/components'
// @ts-ignore
import {DragJsx} from 'qj-shared-library';
import './index.scss';

const Materials = () => {
  return (
    <div className={'materials'}>
      {
        materialsList.map(item => (
          <div key={item.type} className={'item'}>
            <DragJsx {...item}>
              <QjIcon style={{ fontSize: '40px', fontWeight: 500 }} name={item.icon}></QjIcon>
            </DragJsx>
            <div className={'title'}>{ item.name }</div>
          </div>
        ))
      }
    </div>
  )
}

const DefaultMaterials = () => {
  return (
    <div className={'materials-container'}>
      <h1>基础组件</h1>
      <Materials/>
    </div>
  )
}

export default DefaultMaterials;
