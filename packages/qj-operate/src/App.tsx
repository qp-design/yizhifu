import React, {useEffect, useState} from 'react';
import Main from './pages';
import {NodeGraph, useLowCodeGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import {Button, Space} from 'antd';
import { lowCodeSave } from '@brushes/store';
import message from 'antd/es/message';

const { isEmpty, omit } = _;

const App = () => {
  const expGraph = useLowCodeGraph(1);
  const [defaultValue, setDefaultValue] = useState<NodeGraph>(null as any);
  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((params) => {
      const { id } = params
      const data = expGraph.lowCodeGraph.find(item => item.id === id) as NodeGraph;
      setDefaultValue(data)
    })
    return () => {
      sub.unsubscribe()
    }
  }, []);


  const saveImpl = () => {
    const values = expGraph.lowCodeGraph.map(item => {
      return omit(item, 'props.defaultValue')
    })
    lowCodeSave({
      modelTagvalueId: 595,
      modelTagvalueJson: values,
      memberCode: 20021000097768,
      tenantCode: 2021112700000085,
      channelCode: undefined,
    }).then(res => {
      message.success(res.msg)
    })
  }

  console.log(41, defaultValue)
  if(isEmpty(defaultValue)) return;

  return (
    <div className={'operateConfig'}>
      <div className={'config-top'}>
        <Space>
          <Button type={'primary'} onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
      <Main key={defaultValue.id} defaultValue={defaultValue}/>
    </div>
  )
}
export default App;
