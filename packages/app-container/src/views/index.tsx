import React, {useEffect} from 'react'
import { createApp, h } from 'vue';
// @ts-ignore
import {DropJsx} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor-react/monitor';
// @ts-ignore
// import { MonitorVue } from 'monitor-vue-sdk'
import MonitorVue from 'qj-monitor-vue/monitor-vue';
import OperateJsx from './operateJsx';
// import Material from './material' ;
import {useConfigEnv, useDynamicModule} from '../hooks';

const Root = ({Operate, Menu, materials} : { Operate: Function; Menu: Function; materials: Function}) => {
  useConfigEnv()
  const { pageId, defaultPageConfig} = useDynamicModule('index')

  useEffect(() => {
    const app = createApp(h(MonitorVue, {materials}));
    app.mount(document.querySelector('#simulate-qj-monitor-20221014')!)
  }, []);

  // 没有拿到配置信息
  // if(!pageId) return;

  return (
    <div className={'design-container'}>
      <Menu />
      <DropJsx pageId={pageId} defaultPageConfig={defaultPageConfig}>
        <div id={"simulate-qj-monitor-20221014"}>
          {/*<Monitor materials={materials}/>*/}
        </div>
      </DropJsx>
      <OperateJsx Operate={Operate}/>
    </div>
  )
}

export default Root
