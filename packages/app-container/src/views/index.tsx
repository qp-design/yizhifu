import React, {useEffect, useState} from 'react'
import './index.scss';
import { createApp } from 'vue';
// @ts-ignore
import {DropJsx, useLowCodeGraph} from 'qj-shared-library';
// @ts-ignore
import Monitor from 'qj-monitor-react/monitor';
// @ts-ignore
import MonitorVue from 'qj-monitor-vue/monitor-vue';
import OperateJsx from './operateJsx';
import './index.scss';
import Material from './material';
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
    // createApp(MonitorVue).mount(document.querySelector('#simulate-qj-monitor-20221014'));
  }, []);

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
      <Material port={opts[0] || {}}/>
      <DropJsx>
        <div id={"simulate-qj-monitor-20221014"}>
          {/*<MonitorVue materials={materials}/>*/}
          <Monitor materials={materials}/>
        </div>
      </DropJsx>
      <OperateJsx port={opts[1] || {}}/>
    </div>
  )
}

export default Root;
