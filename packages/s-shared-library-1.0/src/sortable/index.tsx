import Sortable from 'sortablejs';
import {DRAGGABLE_COMPONENT} from './types';
import className from 'classnames';
import React, {ReactNode, useEffect, useRef} from 'react';
import {useLowCodeGraph} from '../hooks';

export const DragJsx = ({ children, className }: { children: ReactNode; className?: string }) => {
  const drag = useRef<HTMLDivElement>();
  useEffect(() => {
    new Sortable(drag.current!, {
      group: {
        name: DRAGGABLE_COMPONENT,
        pull: 'clone',
        put: false // 不允许拖拽进这个列表
      },
      dragClass: "sortable-drag",
      fallbackOnBody: false,
      setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
        dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
      },
      sort: false // 设为false，禁止sort
    });
  }, [])


  return (
    <div ref={drag} className={className}>
      {children}
    </div>
  )
}

export const DropJsx = ({ children }: { children: ReactNode;}) => {
  const monitorInstance = useLowCodeGraph(1);
  const drop = useRef();

  useEffect(() => {
    const parentNode = drop.current! as HTMLDivElement
    const element = parentNode!.querySelector('#simulate') as HTMLDivElement
    new Sortable(element, {
      group: {
        name: DRAGGABLE_COMPONENT,
        put: true
      },
      animation: 150,
      filter: '.monitor-node,.default-iphone',
      sort: false, // 设为false，禁止sort
      // 列表内元素顺序更新的时候触发
      onSort: function (/**Event*/evt) {
        const { item } = evt.item.dataset;
        monitorInstance.addNode(JSON.parse(item), evt.newDraggableIndex - 1);
        const itemNode = element.querySelectorAll('.item');
        element.removeChild(itemNode[0])
      },
    });
  }, [drop.current]);

  return (
      <div
        ref={drop}
        className={className('monitor')}
        style={{
          position: 'relative',
            width: '100%',
            height: '100%'
        }}
      >
      {children}
    </div>
 )
}
