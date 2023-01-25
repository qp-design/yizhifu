import {useCallback, useEffect, useState} from 'react';
import message from 'antd/es/message';
// @ts-ignore
import {useMaterialGraph, gModelMap} from 'qj-shared-library';

import {getPfsModelTagValueByTginfo} from '@brushes/api';
import { _ } from '@brushes/tools'

const { isEmpty, get } = _;

export function useDynamicModule(id: string = '') {
  const [pageId] = useState<string>('index');
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
        await fetchPageNode('index')
      } catch (err:string | unknown) {
        message.error(err as string);
      }

    })()

  }, [id]);

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
  }
}
