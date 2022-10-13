import React, {useEffect, useState} from 'react'
import './index.scss';
// @ts-ignore
import {DropJsx, useLowCodeGraph} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor-react/monitor';
import FederationModule from './federationModule';
// @ts-ignore
// import MonitorVue from 'qj-monitor-vue/monitor-vue';
// @ts-ignore
import './index.scss';

const Root = () => {
  const expGraph = useLowCodeGraph(1);
  const [materials, setMaterials] = useState({});
  useEffect(() => {
    const sub = expGraph.allMaterials$.subscribe((parmas) => {
      console.log(19, parmas)
      setMaterials(parmas)
    })

    return () => {
      sub.unsubscribe()
    }
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
          <Monitor materials={materials}/>
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
