import React, {useEffect, useState} from 'react'
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
  const id = window.location.pathname;
  const [materials, setMaterials] = useState({});
  const expGraph = useLowCodeGraph(1);
  const [opts, setOpts] = useState([]);
  useEffect(() => {
    const sub = expGraph.allMaterials$.subscribe((parmas) => {
      setMaterials(parmas)
    })
    return () => {
      sub.unsubscribe()
    }
  });

  useEffect(() => {
    let arr = [] as any
    if(id === '/1') {
      arr = [
        {
          url: `http://localhost:4001/remoteEntry.js`,
          scope: 'qj_material',
          module: './menu',
        },
        {
          url: `http://localhost:4002/remoteEntry.js`,
          scope: 'qj_operate',
          module: './operate',
        }
      ]
    } else {
      arr = [
        {
          url: `http://localhost:3001/remoteEntry.js`,
          scope: 'qj_material',
          module: './menu',
        },
        {
          url: `http://localhost:3002/remoteEntry.js`,
          scope: 'qj_operate',
          module: './operate',
        }
      ]
    }
    setOpts(arr)
  }, [id])

  return (
    <div className={'design-container'}>
      <FederationModule
        port={opts[0] || {}}
      />
      <DropJsx>
        <div id={"simulate-qj-monitor-20221014"}>
          <Monitor materials={materials}/>
          {/*<Monitor remoteAssets={remoteAssets.current}/>*/}
        </div>
      </DropJsx>
      <FederationModule
        port={opts[1] || {}}
      />
    </div>
  )
}

export default Root;
