import {useEffect, useState} from 'react';
import { queryTginfoMenuTree } from '@brushes/api'

export function useMenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await queryTginfoMenuTree({
        tginfoCode: '6f91dfb2775547aea82eca67bd568239',
        rows: 10,
        page: 1
      })
      setMenu(data);
    })()
  }, []);

  return menu;
}
