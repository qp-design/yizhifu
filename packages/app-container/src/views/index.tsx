import React, {useRef} from 'react'
import './index.scss';
// @ts-ignore
import {DropJsx, useLowCodeGraph, FederationModule} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor-react/monitor';
// @ts-ignore
// import MonitorVue from 'qj-monitor-vue/monitor-vue';
// @ts-ignore
import './index.scss';

const Root = () => {
  const remoteAssets = useRef({
    url: `http://localhost:3001/remoteEntry.js`,
    scope: 'qj_material',
    module: './materials',
  });

  return (
    <div className={'design-container'}>
      <FederationModule
        port={{
          url: `http://localhost:3001/remoteEntry.js`,
          scope: 'qj_material',
          module: './menu',
        }}
      />
      <DropJsx>
        <div id={"simulate"}>
          <Monitor remoteAssets={remoteAssets.current}/>
        </div>
      </DropJsx>
      <FederationModule
        port={{
          url: `http://localhost:3002/remoteEntry.js`,
          scope: 'qj_operate',
          module: './operate',
        }}
      />
    </div>
  )
}

export default Root;
