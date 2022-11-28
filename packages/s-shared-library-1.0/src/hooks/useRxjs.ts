// 数据控制
import { BehaviorSubject } from 'rxjs';
import { MATERIALS_TYPE } from '../sortable/types';
import { _ } from '@brushes/tools';

const { maxBy } = _;

export interface behaviorType {
    id: number;
    type?: string;
}

export const defaultPageValue = {
    nodeGraph: [],
    page: '',
    version: '',
    pageConfig: {}
};

export interface NodeGraph {
    type: string;
    id: number;
    props: { [v: string]: unknown };
}

export interface PageMaterialType {
    nodeGraph: Array<NodeGraph>;
    page: string;
    version: string;
    pageConfig: { [v: string]: unknown };
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
    lowCodeGraph: PageMaterialType;
    // 操作记录数
    count: number;
    constructor(expId: string, defaultValue: PageMaterialType) {
        this.count = 0;
        this.modeId = expId;
        this.materialId = 0;
        this.lowCodeGraph = defaultValue;
        this.init(defaultValue);
    }

    // 初始化节点
    init(nodesConfig: PageMaterialType) {
        const { id = 0 } = maxBy(nodesConfig.nodeGraph, (item) => item.id) || {};
        this.materialId = id;
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
        ++this.count;
        this.activedId = this.materialId;
        const node = this.computed(item);
        this.lowCodeGraph.nodeGraph.splice(index, 0, node);
        this.behaviorId$.next({ id: this.materialId });
    }

    // 更新节点
    updateNode(allValues: any) {
        ++this.count;
        const activedId = this.activedId || this.materialId;
        console.log('60===============>', activedId);
        const index = this.lowCodeGraph.nodeGraph.findIndex((item) => item.id === activedId);
        this.lowCodeGraph.nodeGraph[index].props = {
            ...this.lowCodeGraph.nodeGraph[index].props,
            ...allValues
        };
        this.behaviorId$.next({ id: activedId, type: 'update' });
    }

    // 初始化保存过的节点数据
    resetNode() {
        this.count = 0
    }

    // 删除节点
    deleteNode(id: number) {
        ++this.count;
        const index = this.lowCodeGraph.nodeGraph.findIndex((item) => item.id === id);
        this.lowCodeGraph.nodeGraph.splice(index, 1);
        this.behaviorId$.next({ id, type: 'delete' });
    }
}

export const gModelMap = new Map<string, LowCodeGraph>(); // 存储画布 model

let prevModeId = '';

export const useLowCodeGraph = (modeId = prevModeId, defaultValue = defaultPageValue) => {
    const expId = (prevModeId = modeId.toString());
    let existedGraph = gModelMap.get(expId);
    if (!existedGraph) {
        existedGraph = new LowCodeGraph(expId, defaultValue);
        gModelMap.set(expId, existedGraph);
    }
    return existedGraph;
};
