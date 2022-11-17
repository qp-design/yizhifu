import React, {useEffect, useState} from 'react';
import {Button, Space} from 'antd';

// @ts-ignore
import {NodeGraph, useLowCodeGraph, FederationModule, behaviorType, gModelMap} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import { lowCodeSave } from '@brushes/store';
import message from 'antd/es/message';

const { set } = _;

const OperateJsx = ({port}: {port: Object}) => {
  const expGraph = useLowCodeGraph();
  const [defaultValue, setDefaultValue] = useState<NodeGraph>(null as any);
  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((params: behaviorType) => {
      const { id } = params;
      const data = expGraph.lowCodeGraph.nodeGraph.find((item: NodeGraph) => item.id === id) as NodeGraph;
      setDefaultValue(data)
    })
    return () => {
      sub.unsubscribe()
    }
  }, [expGraph]);


  const saveImpl = () => {
    for(let item of gModelMap) {
      console.log(29, item)
    }
    // console.log(28, expGraph.lowCodeGraph)
    expGraph.lowCodeGraph.nodeGraph = expGraph.lowCodeGraph.nodeGraph.map((item: NodeGraph) => {
      return set(item, 'props.defaultValue', [])
    })
    console.log(33, expGraph.lowCodeGraph)
    lowCodeSave({
      modelTagvalueId: 595,
      modelTagvalueJson: expGraph.lowCodeGraph,
      memberCode: 20021000097768,
      tenantCode: 2021112700000085,
      channelCode: undefined,
    }).then(res => {
      // @ts-ignore
      message.success(res.msg)
    })
  }

  return (
    <div className={'operateConfig'}>
      <div className={'config-top'}>
        <Space>
          <Button type={'primary'} onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
      <MaterialOperate
        port={port}
        defaultValue={defaultValue}
      />
    </div>
  )
}

const MaterialOperate = ({defaultValue, port} : { defaultValue: Object; port: Object}) => {
  return (
    <FederationModule
      defaultValue={defaultValue}
      port={port}
    />
  )
}

export default OperateJsx;
