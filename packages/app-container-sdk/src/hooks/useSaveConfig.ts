import {useCallback, useEffect, useRef, useState} from 'react';
import {lowCodeSave} from '@brushes/api';
import message from 'antd/es/message';

//@ts-ignore
import {NodeGraph, useLowCodeGraph, behaviorType, gModelMap, useMaterialGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';

const { set, isEmpty } = _;

export function useSaveConfig() {
  const data = useRef<Array<any>>([]);
  const payload = useRef<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  debugger
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
    payload.current = [];
    data.current = [];
    const menuList = expMenuGraph.menuList.concat(expMenuGraph.menuList[0].children);
    for(let item of gModelMap) {
      const [pageId, dataSource] = item;
      if(!dataSource.count) {
        continue;
      }
      const {memo, menuIndexCode, tginfoMenuName, menuOpcode} = menuList.find((citem: any) => citem.menuOpcode === pageId)
      const obj = {
        modelTagvalueCode: menuIndexCode,
        modelTagvalueId: memo,
        tenantCode: expMenuGraph.tenantCode,
        memberCode: expMenuGraph.memberCode,
        modelTagvalueJson: JSON.stringify(computedValue(dataSource.lowCodeGraph)),
        channelCode: undefined,
      }
      payload.current.push(obj);
      data.current.push({
        id: menuOpcode,
        name: tginfoMenuName
      });
    }
    if(isEmpty(payload.current)) {
      message.info('暂时没有需要保存的页面')
      return
    }
    setIsModalOpen(true)
  }

  const handleOk = useCallback(async () => {
    await finalImpl(payload.current);
    setIsModalOpen(false);
  }, [])

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, [])

  const finalImpl = async (payload: Array<any>) => {
    setLoading(true);
    const ioList = payload.map(item => lowCodeSave(item));
    try{
      const result = await Promise.all(ioList);
      message.success(result[0].msg);

      // 重置操作页面的配置操作记录
      // @ts-ignore
      data.current.forEach(item => gModelMap.get(item.id).resetNode())
    } catch (err) {
      message.error(err as string)
    } finally {
      setLoading(false)
    }
  }

  return {
    defaultValue,
    saveImpl,
    isModalOpen,
    data,
    handleCancel,
    handleOk,
    loading
  }
}
