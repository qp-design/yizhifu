import {useEffect, useState} from 'react';
// @ts-ignore
import {useMaterialGraph, defaultPageValue} from 'qj-shared-library';
import {routers} from '../mock';

export function useLoadMaterial(id: string) {
  // 获取物料组件
  const expPageGraph = useMaterialGraph(id);
  // 物料组件库
  const [materials, setMaterials] = useState({});
  useEffect(() => {
    const sub = expPageGraph.allMaterials$.subscribe((params: any) => {
      setMaterials(params)
    })

    return () => {
      sub.unsubscribe()
    }
  }, [id]);

  return materials
}

export function useDynamicModule(id: string) {
  const [modules, setModules] = useState([]);
  const [pageId, setPageId] = useState<string>('');
  const [defaultPageConfig, setPageConfig] = useState(defaultPageValue);
  const expPageGraph = useMaterialGraph(id);

  useEffect(() => {
    let arr = [] as any
    if(id === '1') {
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
    }
    expPageGraph.setMenuList(routers);
    setPageId(routers[0].id + '');
    expPageGraph.setPageIdImpl(routers[0].router + '');
    setModules(arr);
  }, [id]);


  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe((pageId: any) => {
        // 获取页面配置
        setPageConfig({"nodeGraph":[{"type":"Title","name":"主标题","icon":"icon-text","props":{"value":"请填写主标题或文本","fontSize":20,"textAlign":"left","color":"#000000","backgroundColor":"#fafafa","fontWeight":"normal","textDecoration":"none","fontStyle":"normal","marginTop":0,"marginBottom":0,"defaultValue":[]},"id":3},{"type":"OrderEntry","name":"订单入口","icon":"icon-a-1","props":{"backgroundColor":"#FFFFF","titleTitle":"","value":"请填写主标题或文本","fontSize":20,"textAlign":"left","color":"#000000","fontWeight":"normal","textDecoration":"none","fontStyle":"normal","marginTop":0,"marginBottom":0,"defaultValue":[]},"id":2}],"page":"","version":"","pageConfig":{}})
        setPageId(pageId + '');
     })

    return () => {
      sub.unsubscribe()
    }
  }, [expPageGraph])

  return {
    modules,
    pageId,
    defaultPageConfig
  }
}
