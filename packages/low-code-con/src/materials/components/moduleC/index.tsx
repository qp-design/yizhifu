import React from 'react';
import { materialsList } from '../../config'
import './index.scss';
import MenuItem from './menuItem';

const DefaultMaterials = () => {
  return (
    <div className={'materials-container'}>
      <h1>基础组件</h1>
      <MenuItem lists={materialsList}/>
    </div>
  )
}

export default DefaultMaterials;
