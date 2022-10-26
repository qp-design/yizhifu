import React, {useEffect, useState} from 'react';
// @ts-ignore
import {NodeGraph, useLowCodeGraph, FederationModule} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import {Button, Space} from 'antd';

import { lowCodeSave } from '@brushes/store';
import message from 'antd/es/message';

const { omit } = _;

const OperateJsx = ({port}: {port: Object}) => {
  const expGraph = useLowCodeGraph(1);
  const [defaultValue, setDefaultValue] = useState<NodeGraph>(null as any);
  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((params) => {
      const { id } = params
      const data = expGraph.lowCodeGraph.nodeGraph.find(item => item.id === id) as NodeGraph;
      setDefaultValue(data)
    })
    return () => {
      sub.unsubscribe()
    }
  }, []);


  const saveImpl = () => {
    // console.log(28, expGraph.lowCodeGraph)
    expGraph.lowCodeGraph.nodeGraph = expGraph.lowCodeGraph.nodeGraph.map(item => {
      return omit(item, 'props.defaultValue')
    })
    console.log(33, expGraph.lowCodeGraph)
    lowCodeSave({
      modelTagvalueId: 595,
      modelTagvalueJson: expGraph.lowCodeGraph,
      memberCode: 20021000097768,
      tenantCode: 2021112700000085,
      channelCode: undefined,
    }).then(res => {
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
