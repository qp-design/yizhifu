import {NodeGraph, useLowCodeGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import {useEffect, useState} from 'react';

const {noop} = _;

export default function useMonitorReact() {

  const [actived, setActived] = useState(-1);
  const [node, setNode] = useState<Array<NodeGraph>>([] as any);
  const expGraph = useLowCodeGraph(1);

  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((parmas) => {
      const { lowCodeGraph } = expGraph;
      const { id, type } = parmas
      if(type === 'select') return;
      setActived(id);
      setNode([...lowCodeGraph.nodeGraph])
    })

    return () => {
      sub.unsubscribe()
    }
  }, [actived]);


  const switchHandler = (id: number) => {
    expGraph.activedId = id;
    setActived(id);
    expGraph.behaviorId$.next({id, type: 'select'})
  }

  const handlerImpl = (e: any, id: number, index) => {
    const target = e.target.closest('span');
    if (!target) return;

    const code = target.dataset.code;
    callbackImpl(code, id, index);
  }

  const deleteHandler = (id) => {
    expGraph.deleteNode(id);
  }

  const xiayiHandler = (index) => {
    changeIndex(index, index+1)
  }

  const shangyiHandler = (index) => {
    changeIndex(index, index-1)
  }

  const changeIndex = (index, prevIndex) => {
    const { lowCodeGraph } = expGraph;
    const prev = lowCodeGraph.nodeGraph[prevIndex];
    lowCodeGraph.nodeGraph[prevIndex] = lowCodeGraph.nodeGraph[index];
    lowCodeGraph.nodeGraph[index] = prev;
    setNode([...lowCodeGraph.nodeGraph])
  }

  const callbackImpl = (code, id, index) => {
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
