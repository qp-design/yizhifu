import React, {lazy, Suspense, useEffect, useRef} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropImpl, DropJsx, DropJsxImpl, RDnDProvider} from 'qj-shared-library';
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

  DropImpl();

  return (
    // <RDnDProvider>
      <div className={'design-container'}>
        <Material/>
        <DropJsxImpl>
          <div id={'simulate'}></div>
         {/*<MonitorVue/>*/}
        </DropJsxImpl>
        <Operate/>
      </div>
    // </RDnDProvider>
  )
}

export default Root;
