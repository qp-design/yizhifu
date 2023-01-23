import {useEffect, useState} from 'react';
import {config} from '../../mock/config';
// @ts-ignore
import {useMaterialGraph} from 'qj-shared-library';
import {message} from 'antd';

export function useMaterialMenu() {
  const expPageGraph = useMaterialGraph();
  const [menuId, setMenuId] = useState();
  const [classifyIndex, setClassifyIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);
  const [activedIndex, setActived] = useState(0)
  const [lists, setList] = useState(() => {
    return [config[0]['children'][0]['group']]
  });

  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe((value: any) => {
      setMenuId(value);
      onHandleClassify(value);
    });

    return () => {
      sub.unsubscribe()
    }
  }, [])

  const onHandleClassify = (pageId:string) => {
    if(!pageId) return;
    if(pageId !== 'index') {
      const index = config.find(item => item.code === 'business')!.children.findIndex(citem => citem.code === pageId);
      if(index === -1) {
        message.error(`菜单配置有问题: ${pageId}不存在，检查一下菜单配置`);
        return;
      }
      commonImpl(1, index)
    } else {
      commonImpl(0, 0)
    }
  }

  const length = (typeIndex: number) => {
    let length = 0
    for(let i = 0; i < typeIndex; i++) {
      length += config[typeIndex-1]['children'].length;
    }
    return length
  }

  const commonImpl = (typeIndex: number, itemIndex: number) => {
    const len = length(typeIndex);
    setActived(itemIndex);
    setClassifyIndex(typeIndex);
    setDetailIndex(len + itemIndex);

    const item = config[typeIndex]['children'][itemIndex]['group'];
    setList(prevState => {
      prevState[itemIndex + len] = item;
      return prevState
    })
  }

  const handleClassify = (typeIndex: number, itemIndex: number, code: string) => {
    commonImpl(typeIndex, itemIndex);
    const pageId = expPageGraph.activedPageId$.getValue();
    if(pageId !== 'index') {
      expPageGraph.setPageIdImpl(code)
    }
  }

  return {
    classifyIndex,
    detailIndex,
    activedIndex,
    handleClassify,
    lists,
    menuId
  }
}
