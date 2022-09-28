import {onMounted, reactive, ref, watchEffect} from 'vue';
import {NodeGraph, useLowCodeGraph, DrogImpl} from 'qj-shared-library';
import { _ } from '@brushes/tools';

const {noop} = _;

interface stateInterface {
  actived: Number;
  node: Array<NodeGraph>
}

export default function useMonitorVue() {

  const state = reactive<stateInterface>({
    actived: -1,
    node: [] as any
  })
  const expGraph = useLowCodeGraph(1);

  const stopWatch = watchEffect((onCleanup) => {
    onCleanup(() => {
      // 先执行的 清楚副作用
      console.log('before')
      sub.unsubscribe()
    })
    const sub = expGraph.behaviorId$.subscribe((parmas) => {
      const { lowCodeGraph } = expGraph;
      const { id, type } = parmas
      if(type === 'select') return;
      state.actived = id;
      state.node = [...lowCodeGraph]
    })
  })
  // 停止监听
  // const stop = () => stopWatch()

  const switchHandler = (id: number) => {
    expGraph.activedId = id;
    state.actived = id;
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
    const prev = lowCodeGraph[prevIndex];
    lowCodeGraph[prevIndex] = lowCodeGraph[index];
    lowCodeGraph[index] = prev;
    state.node = [...lowCodeGraph]
  }

  const callbackImpl = (code: string, id: number, index: number) => {
    console.log(code, id);
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
    state,
    switchHandler,
    handlerImpl,
  }
}
