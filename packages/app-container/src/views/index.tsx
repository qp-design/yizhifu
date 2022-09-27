import React, {lazy, Suspense, useEffect, useRef} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropJsx, RDnDProvider} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor/monitor'
// @ts-ignore
import MonitorVue from 'qj-monitor-vue/monitor-vue';
// @ts-ignore
const Operate = lazy(() => import('qj-operate/operate'))
// @ts-ignore
const Material = lazy(() => import('qj-material/material'))

const Root = () => {
  const ref = useRef();
  useEffect(() => {
    createApp(MonitorVue).mount(ref.current);
  }, [])
  return (
    <RDnDProvider>
      <div className={'design-container'}>
        <Material/>
        <DropJsx>
          <div ref={ref}></div>
         {/*<MonitorVue/>*/}
        </DropJsx>
        <Operate/>
      </div>
    </RDnDProvider>
  )
}

export default Root;
