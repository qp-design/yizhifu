import {useCallback, useEffect, useRef, useState} from 'react';
import message from 'antd/es/message';
// @ts-ignore
import {useMaterialGraph, gModelMap} from 'qj-shared-library';

import {queryTginfoMenuTree, getPfsModelTagValueByTginfo} from '@brushes/api';
import { _ } from '@brushes/tools'
import {MenuItem} from '../components';

const { isEmpty, isUndefined, get } = _;

export function useDynamicModule(id: string = '') {
  const [menu, setMenu] = useState([]);
  const [pageId, setPageId] = useState<string>('');
  const expPageGraph = useMaterialGraph(id);
  const isExistRef = useRef('');
  const [defaultPageConfig, setPageConfig] = useState({
    nodeGraph: [],
    page: '',
    version: '',
    pageConfig: {}
  });

  useEffect(() => {
    (async () => {
      // @ts-ignore
      try{
        const menu = await queryTginfoMenuTree({
          tginfoCode: '6f91dfb2775547aea82eca67bd568239',
          rows: 30,
          page: 1
        });

        expPageGraph.setInitConfig({
          menus: menu,
          tenantCode: '597370900596056114',
          memberCode: '20000210397842'
        });

        if(isEmpty(menu) || isUndefined(menu)) {
          message.error('当前租户下菜单没有配置')
          return
        }

        isExistRef.current = menu[0].menuOpcode + '';
        setMenu(menu);
        await fetchPageNode(menu[0].menuOpcode + '')
        setPageId(menu[0].menuOpcode + '');
        expPageGraph.setPageIdImpl(menu[0].menuOpcode + '');
      } catch (err:string | unknown) {
        message.error(err as string);
      }

    })()

  }, [id]);

  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe(async (pageId: any) => {
      // 获取页面配置
      if(!pageId || isExistRef.current === pageId) return;
      const isExist = gModelMap.get(pageId);
      isExistRef.current = pageId;
      if(!isExist) {
        await fetchPageNode(pageId)
      }
      setPageId(pageId + '');
    })

    return () => {
      sub.unsubscribe()
    }
  }, [expPageGraph]);

  const switchMenu = useCallback((item: MenuItem) => {
    // setActive(index);
    expPageGraph.setPageIdImpl(item.menuOpcode)
  }, []);

  const fetchPageNode = useCallback(async (pageId:string) => {
    try {
      const pageConfig = await getPfsModelTagValueByTginfo({
        menuOpcode: pageId
      });

      const dataStr = get(pageConfig,'modelTagvalueJson','{}');
      let data = JSON.parse(dataStr);

      if((!data.hasOwnProperty('nodeGraph'))) {
        if(!isEmpty(data)) {
          message.error('脏数据, 重置未默认数句');
        }
        data = {
          nodeGraph: [],
          page: '',
          version: '',
          pageConfig: {}
        }
      }
      setPageConfig(data)
    } catch (err) {
    }
  }, [])

  return {
    pageId,
    defaultPageConfig,
    menu,
    switchMenu
  }
}
