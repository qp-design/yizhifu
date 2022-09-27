import {NodeGraph, useLowCodeGraph} from 'qj-shared-library';
import React, {useEffect, useRef, useState, memo} from 'react';
import {QjIcon} from '@brushes/components';
import classNames from 'classnames';
import { _ } from '@brushes/tools';
import VueMonitor from './vue-monitor';

const {noop} = _;

const MonitorComponent = () => {
  const [node, setNode] = useState<Array<NodeGraph>>([] as any);
  const expGraph = useLowCodeGraph(1);
  const [actived, setActived] = useState(-1);

  const ref = useRef();
  useEffect(() => {
    const sub = expGraph.behaviorId$.subscribe((parmas) => {
      const { lowCodeGraph } = expGraph;
      const { id, type } = parmas
      if(type === 'select') return;
      setActived(id);
      setNode([...lowCodeGraph])
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
    const prev = lowCodeGraph[prevIndex];
    lowCodeGraph[prevIndex] = lowCodeGraph[index];
    lowCodeGraph[index] = prev;
    setNode([...lowCodeGraph])
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

  return (
    <>
      {
        node.map(({id, props, type, name}, index: number) => {

          // render();
          // const MaterialsComponent = get(materirals, type, noop);

          return (
            <div key={id} className={'monitor-node'}>
              {
                actived !== id && (
                  <div className={classNames('component-name',
                    {
                      'component-name-left': index % 2,
                      'component-name-right': !(index % 2),
                    })}>
                    { name }
                  </div>
                )
              }
              <div onClick={() => switchHandler(id)}
                    className={classNames('content', {'actived': id === actived})}>
                <VueMonitor id={id} {...props}/>
                {/*<MaterialsComponent id={id} {...props}/>*/}
              </div>
              {
                actived === id && (
                  <div onClick={(e) => handlerImpl(e, id, index)}>
                    <OperateJsx index={index} latest={node.length -1 === index}/>
                  </div>
                )
              }
            </div>
          );
        })
      }
    </>
  )
}

const OperateJsx = ({ index, latest }: { index: number; latest: boolean }) => {
  return (
    <div className={classNames('icon-operate')}>
      <QjIcon data-code={'delete'} name={'icon-DeleteOutlined'} style={{fontSize: 20}}/>
      {
        !latest && <QjIcon data-code={'xiayi'} name={'icon-xiayi'} style={{fontSize: 20}}/>
      }
      {
        index !== 0 && <QjIcon data-code={'shangyi'} name={'icon-shangyi'} style={{fontSize: 20}}/>
      }
    </div>
  )
}
export default MonitorComponent;
