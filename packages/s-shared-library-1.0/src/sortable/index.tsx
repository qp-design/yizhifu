import Sortable from 'sortablejs';
import {DRAGGABLE_COMPONENT} from './types';
import className from 'classnames';
import React, {ReactNode, useEffect} from 'react';
import {useLowCodeGraph} from '../hooks';

export const DragImpl = (ref: HTMLElement) => {
  new Sortable(ref, {
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
}

export const DropImpl = () => {
  const monitorInstance = useLowCodeGraph(1);
  useEffect(() => {
    new Sortable(document.querySelector('#simulate')!, {
      group: {
        name: DRAGGABLE_COMPONENT,
        put: true
      },
      animation: 150,
      sort: false, // 设为false，禁止sort
      // 列表内元素顺序更新的时候触发
      onSort: function (/**Event*/evt) {
        const { item } = evt.item.dataset;
        monitorInstance.addNode(JSON.parse(item), evt.newDraggableIndex);
        const itemNode = document.querySelectorAll('#simulate .item');
        itemNode[0].parentNode.removeChild(itemNode[0])
      },
    });
  }, []);
}
export const DropJsxImpl = ({ children }: { children: ReactNode }) => {
  return (
      <div
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
