import {useEffect, useState} from 'react';
// @ts-ignore
import {useMaterialGraph} from 'qj-shared-library';
import {MenuItem} from '../components';

export function useMenu() {
  const [menu, setMenu] = useState<Array<MenuItem>>([]);
  const expPageGraph = useMaterialGraph();
  const [path, setPath] = useState('')

  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe((actived: any) => {
      setMenu(expPageGraph.menuList)
      setPath(actived)
    })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  const switchMenu = (item: MenuItem) => {
    // setActive(index);
    expPageGraph.setPageIdImpl(item.menuOpcode)
  };

  return {
    path,
    switchMenu,
    menu
  }
}
