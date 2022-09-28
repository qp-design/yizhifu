import React, {lazy, useEffect, useRef} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropImpl, DropJsx} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor/monitor'
// @ts-ignore
import MonitorVue from 'qj-monitor-vue/monitor-vue';
// @ts-ignore
const Operate = lazy(() => import('qj-operate/operate'))
// @ts-ignore
const Material = lazy(() => import('qj-material/material'))

const Root = () => {

  useEffect(() => {
    createApp(MonitorVue).mount(document.querySelector('#simulate'));
  }, []);

  return (
      <div className={'design-container'}>
        <Material/>
        <DropJsx>
          <div id={'simulate'}></div>
        </DropJsx>
        <Operate/>
      </div>
  )
}

export default Root;
