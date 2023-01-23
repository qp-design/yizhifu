import React, {useEffect} from 'react'
import { createApp } from 'vue';
// @ts-ignore
import {DropJsx} from 'qj-shared-library';
// @ts-ignore
// import Monitor from 'qj-monitor-react/monitor';
// @ts-ignore
import { MonitorVue } from 'monitor-vue-sdk'
// import MonitorVue from 'qj-monitor-vue/monitor-vue';
import OperateJsx from './operateJsx';
// import Material from './material' ;
// import { MonitorComponent } from 'monitor-react-sdk';
import {useConfigEnv, useDynamicModule, useLoadMaterial} from '../hooks';
import {Menu} from '../components';

export const Root = ({Operate, Material} : { Operate: Function; Material: Function}) => {
  useConfigEnv()
  const materials = useLoadMaterial('1');
  const { pageId, defaultPageConfig, menu, switchMenu } = useDynamicModule('1')
  useEffect(() => {
    // @ts-ignore
    createApp(MonitorVue).mount(document.querySelector('#simulate-qj-monitor-20221014'));
  }, []);

  // 没有拿到配置信息
  // if(!pageId) return;

  return (
    <div className={'design-container'}>
      <Material />
      <DropJsx pageId={pageId} defaultPageConfig={defaultPageConfig}>
        <Menu menu={menu} path={pageId} switchMenu={switchMenu}/>
        <div id={"simulate-qj-monitor-20221014"}>
          <MonitorVue materials={materials}/>
          {/*<MonitorComponent materials={materials} />*/}
        </div>
      </DropJsx>
      <OperateJsx Operate={Operate}/>
    </div>
  )
}

