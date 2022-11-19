import {useEffect, useState} from 'react';
// @ts-ignore
import {useMaterialGraph} from 'qj-shared-library';

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
