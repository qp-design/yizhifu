import {useCallback, useEffect, useRef, useState} from 'react';
import message from 'antd/es/message';
// @ts-ignore
import {useMaterialGraph, gModelMap} from 'qj-shared-library';

import {queryTginfoMenuTree, getPfsModelTagValueByTginfo, loginWithoutPassword} from '@brushes/api';
import { _ } from '@brushes/tools'
import {MenuItem} from '../components';

const { isEmpty, isUndefined, get } = _;

export function useDynamicModule(id: string) {
  const [modules, setModules] = useState([]);
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
    let arr = [] as any
    if(id === '1' && process.env.NODE_ENV==='development') {
      arr = [
        {
          url: `http://localhost:4001/remoteEntry.js`,
          scope: 'qj_material',
          module: './menu',
        },
        {
          url: `http://localhost:4002/remoteEntry.js`,
          scope: 'qj_operate',
          module: './operate',
        }
      ]
    } else {
      arr = [
        {
          url: `http://material.lc.qjclouds.com/remoteEntry.js`,
          scope: 'qj_material',
          module: './menu',
        },
        {
          url: `http://operate.lc.qjclouds.com/remoteEntry.js`,
          scope: 'qj_operate',
          module: './operate',
        }
      ]
    }
    // 低代码配置
    setModules(arr);

    (async () => {
      const { phone, token, tenantCode } = window._env_;
      const { tginfoCode, userInfoCode, ticketTokenid } = await loginWithoutPassword({ temporaryToken: token, phone, tenantCode })
      localStorage.setItem('saas-token', JSON.stringify({ticketTokenid}))

      // @ts-ignore
      try{
        const menu = await queryTginfoMenuTree({
          tginfoCode,
          rows: 30,
          page: 1
        });

        expPageGraph.setInitConfig({
          menus: menu,
          tenantCode,
          memberCode: userInfoCode
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

      if(isEmpty(pageConfig)) {
        message.error('接口异常');
      }

      const dataStr = get(pageConfig, 'modelTagvalueJson', '{}');
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
    modules,
    pageId,
    defaultPageConfig,
    menu,
    switchMenu
  }
}
