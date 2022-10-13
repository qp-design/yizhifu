// 数据控制
import { BehaviorSubject } from 'rxjs';
import { MATERIALS_TYPE } from '../sortable/types';
import {ReactElement, ReactNode} from 'react';

interface behaviorType {
    id: number;
    type?: string;
}
export interface NodeGraph {
    type: string;
    id: number;
    props: { [v: string]: unknown };
}

interface MaterialsType {
    [v: string]: any
}

class LowCodeGraph {
    // 模型id
    modeId: string;
    // 物料id
    materialId: number;
    // 正在活动的Id
    activedId: number | undefined;
    // 活动类型
    behaviorId$: BehaviorSubject<behaviorType> = new BehaviorSubject<behaviorType>({ id: 0 });
    // 数据
    lowCodeGraph: Array<NodeGraph>;
    // 所有的物料组件
    allMaterials$: BehaviorSubject<MaterialsType> = new BehaviorSubject<MaterialsType>({ materials: {} });

    constructor(expId: string) {
        this.modeId = expId;
        this.materialId = 0;
        this.lowCodeGraph = [];
        // this.allMaterials = {}
    }

    init(materials: MaterialsType = {}) {
        this.allMaterials$.next(materials);
    }

    // 节点配置
    computed(item: MATERIALS_TYPE) {
        // 模拟数据
        return {
            ...item,
            id: this.materialId
        };
    }

    // 新增节点
    addNode(item: MATERIALS_TYPE, index: number) {
        ++this.materialId;
        this.activedId = this.materialId;
        const node = this.computed(item);
        this.lowCodeGraph.splice(index, 0, node);
        this.behaviorId$.next({ id: this.materialId });
    }

    // 更新节点
    updateNode(allValues: any) {
        const activedId = this.activedId || this.materialId;
        console.log('60===============>', activedId);
        const index = this.lowCodeGraph.findIndex((item) => item.id === activedId);
        this.lowCodeGraph[index].props = {
            ...this.lowCodeGraph[index].props,
            ...allValues
        };
        this.behaviorId$.next({id: activedId, type: 'update'});
    }

    // 删除节点
    deleteNode(id: number) {
        const index = this.lowCodeGraph.findIndex((item) => item.id === id);
        this.lowCodeGraph.splice(index, 1);
        this.behaviorId$.next({ id, type: 'delete' });
    }
}

export const gModelMap = new Map<string, LowCodeGraph>(); // 存储画布 model

export const useLowCodeGraph = (modeId: number | string) => {
    const expId = modeId.toString();
    let existedGraph = gModelMap.get(expId);
    if (!existedGraph) {
        existedGraph = new LowCodeGraph(expId);
        gModelMap.set(expId, existedGraph);
    }
    return existedGraph;
};
