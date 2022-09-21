// @ts-ignore
import {DropJsx} from 'qj-shared-library';
import MonitorComponent from './monitor-component';
import React from 'react';
import './index.scss'
export default () => {
  return (
    <div
      className='monitor'
    >
      <DropJsx>
        <MonitorComponent/>
      </DropJsx>
    </div>
  )
};
