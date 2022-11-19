import {useEffect, useState} from 'react';
import {lowCodeSave} from '@brushes/api';
import message from 'antd/es/message';

// @ts-ignore
import {NodeGraph, useLowCodeGraph, behaviorType, gModelMap, useMaterialGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';

const { set, isEmpty } = _;

export function useSaveConfig() {
  const expGraph = useLowCodeGraph();
  const expMenuGraph = useMaterialGraph();
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

  const computedValue = (params: { nodeGraph: Array<any>}) => {
    params.nodeGraph = params.nodeGraph.map((item: NodeGraph) => {
      return set(item, 'props.defaultValue', [])
    });
    return params;
  }

  const saveImpl = async () => {
    console.log(34, gModelMap)
    const payload = [];
    const menuList = expMenuGraph.menuList.concat(expMenuGraph.menuList[0].children);
    for(let item of gModelMap) {
      const [pageId, dataSource] = item;
      if(!dataSource.count) {
        continue;
      }
      const {memo, menuIndexCode} = menuList.find((citem: any) => citem.menuOpcode === pageId)
      const obj = {
        modelTagvalueCode: menuIndexCode,
        modelTagvalueId: memo,
        tenantCode: expMenuGraph.tenantCode,
        memberCode: expMenuGraph.memberCode,
        modelTagvalueJson: JSON.stringify(computedValue(dataSource.lowCodeGraph)),
        channelCode: undefined,
      }
      payload.push(obj);
    }

    if(isEmpty(payload)) return;

    const ioList = payload.map(item => lowCodeSave(item));
    try{
      const result = await Promise.all(ioList);
      message.success(result[0].msg)
    } catch (err) {
      message.error(err as string)
    }

  }

  return {
    defaultValue,
    saveImpl
  }
}
