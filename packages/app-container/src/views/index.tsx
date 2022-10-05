import React, {lazy, useEffect} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropImpl, DropJsx} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor/monitor'
// @ts-ignore
import MonitorVue from 'qj-monitor-vue/monitor-vue';
import FederationModule from './federationModule';
// @ts-ignore
// const Operate = lazy(() => import('qj-operate/operate'))
// @ts-ignore
// const Material = lazy(() => import('qj-material/material'))

const Root = () => {

  useEffect(() => {
    createApp(MonitorVue).mount(document.querySelector('#simulate')!);
  }, []);

  return (
    <div className={'design-container'}>
      <FederationModule
        port={{
          url: `http://localhost:3001/remoteEntry.js`,
          scope: 'qj_material',
          module: './material',
        }}
      />
      {/*<DropJsx>*/}
        <div id={'simulate'}></div>
      {/*</DropJsx>*/}
      {/*<FederationModule*/}
      {/*  port={{*/}
      {/*    url: `http://localhost:3002/remoteEntry.js`,*/}
      {/*    scope: 'qj_operate',*/}
      {/*    module: './operate',*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  )
}

export default Root;
