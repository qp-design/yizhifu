// @ts-ignore
import {NodeGraph, useLowCodeGraph, gModelMap, PageMaterialType} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import {useEffect, useRef, useState} from 'react';

const {noop} = _;

export function useMonitorReact() {
  const [actived, setActived] = useState(-1);
  const [node, setNode] = useState<Array<NodeGraph>>([] as any);
  const expGraph = useLowCodeGraph();
  const isSwitchPage = useRef(false);

  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((params: any) => {
      const { lowCodeGraph } = expGraph;
      const { id, type } = params;
      if(type === 'select' && !isSwitchPage.current) return;
      isSwitchPage.current = false;
      setActived(id);
      setNode([...lowCodeGraph.nodeGraph])
    })

    return () => {
      isSwitchPage.current = true
      sub.unsubscribe()
    }
  }, [expGraph]);

  const switchHandler = (id: number) => {
    expGraph.activedId = id;
    setActived(id);
    expGraph.behaviorId$.next({id, type: 'select'})
  }

  const handlerImpl = (e: any, id: number, index: number) => {
    const target = e.target.closest('span');
    if (!target) return;

    const code = target.dataset.code;
    callbackImpl(code, id, index);
  }

  const deleteHandler = (id: number) => {
    expGraph.deleteNode(id);
  }

  const xiayiHandler = (index: number) => {
    changeIndex(index, index+1)
  }

  const shangyiHandler = (index: number) => {
    changeIndex(index, index-1)
  }

  const changeIndex = (index: number, prevIndex: number) => {
    const { lowCodeGraph } = expGraph;
    const prev = lowCodeGraph.nodeGraph[prevIndex];
    lowCodeGraph.nodeGraph[prevIndex] = lowCodeGraph.nodeGraph[index];
    lowCodeGraph.nodeGraph[index] = prev;
    setNode([...lowCodeGraph.nodeGraph])
  }

  const callbackImpl = (code: string, id: number, index: number) => {
    switch (code) {
      case 'delete':
        deleteHandler(id);
        break;
      case 'xiayi':
        xiayiHandler(index);
        break
      case 'shangyi':
        shangyiHandler(index);
        break;
      default:
        noop();
        break
    }
  }

  return {
    actived,
    node,
    switchHandler,
    handlerImpl,
  }
}
