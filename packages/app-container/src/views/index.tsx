import React, {useEffect} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropJsx} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor-react/monitor';
// @ts-ignore
// import MonitorVue from 'qj-monitor-vue/monitor-vue';
import OperateJsx from './operateJsx';
import Material from './material';
import {useConfigEnv, useDynamicModule, useLoadMaterial} from '../hooks';
import './index.scss';

const Root = () => {
  useConfigEnv()
  localStorage.setItem('host', 'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/')
  const id = window.location.pathname;
  const materials = useLoadMaterial('1');
  const { modules, pageId, defaultPageConfig } = useDynamicModule('1')
  useEffect(() => {
    // createApp(MonitorVue).mount(document.querySelector('#simulate-qj-monitor-20221014'));
  }, []);

  // 没有拿到配置信息
  // if(!pageId) return;

  return (
    <div className={'design-container'}>
      <Material port={modules[0] || {}}/>
      <DropJsx pageId={pageId} defaultPageConfig={defaultPageConfig}>
        <div id={"simulate-qj-monitor-20221014"}>
          {/*<MonitorVue materials={materials}/>*/}
          <Monitor materials={materials} />
        </div>
      </DropJsx>
      <OperateJsx port={modules[1] || {}}/>
    </div>
  )
}

export default Root;
