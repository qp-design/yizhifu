// 数据控制
import { BehaviorSubject } from 'rxjs';

export interface MaterialsType {
    [v: string]: any;
}

class MaterialGraph {
    // 模型id
    modeId: string;
    // 菜单
    menuList$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
    // 所有的物料组件
    allMaterials$: BehaviorSubject<MaterialsType> = new BehaviorSubject<MaterialsType>({ materials: {} });
    // 正在活动页面
    activedPageId$: BehaviorSubject<number | string> = new BehaviorSubject<number | string>('');

    constructor(expId: string) {
        this.modeId = expId;
    }

    init(materials: MaterialsType = {}) {
        this.allMaterials$.next(materials);
    }

    setMenuList(menus: Array<any>) {
        this.menuList$.next(menus);
    }

    setPageIdImpl(id: number | string) {
        this.activedPageId$.next(id);
    }
}

export const gMaterialMap = new Map<string, MaterialGraph>(); // 存储物料

let prevModeId = '';

export const useMaterialGraph = (modeId = prevModeId) => {
    const expId = (prevModeId = modeId.toString());
    let existedGraph = gMaterialMap.get(expId);
    if (!existedGraph) {
        existedGraph = new MaterialGraph(expId);
        gMaterialMap.set(expId, existedGraph);
    }
    return existedGraph;
};
