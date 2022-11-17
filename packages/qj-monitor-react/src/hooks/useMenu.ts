import {useEffect, useState} from 'react';
// @ts-ignore
import {useMaterialGraph} from 'qj-shared-library';

export function useMenu() {
  const [menu, setMenu] = useState([]);
  const expPageGraph = useMaterialGraph();
  const [path, setPath] = useState('')
  useEffect(() => {
    const sub = expPageGraph.menuList$.subscribe((menu: any) => {
      setMenu(menu)
    })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe((actived: any) => {
      setPath(actived)
    })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  const switchMenu = (item: any) => {
    // setActive(index);
    expPageGraph.setPageIdImpl(item.router)
  };

  return {
    path,
    switchMenu,
    menu
  }
}
