// 数据控制
import { BehaviorSubject } from 'rxjs';
import { MATERIALS_TYPE } from '../react-dnd/types';

export interface NodeGraph {
    type: string;
    id: number;
    props: { [v: string]: unknown };
}

class LowCodeGraph {
    // 模型id
    modeId: string;
    // 物料id
    materialId: number;
    // 正在活动的Id
    activedId: number | undefined;
    // 活动类型
    behaviorId$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    // 数据
    lowCodeGraph: Array<NodeGraph>;

    constructor(expId: string) {
        this.modeId = expId;
        this.materialId = 0;
        this.lowCodeGraph = [];
    }

    init(id: number = 0, node: Array<NodeGraph> = []) {
        this.materialId = id;
        this.lowCodeGraph = node;
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
    addNode(item: MATERIALS_TYPE) {
        ++this.materialId;
        const node = this.computed(item);
        this.lowCodeGraph.push(node);
        this.behaviorId$.next(this.materialId);
    }

    // 更新节点
    updateNode(allValues: any) {
        const activedId = this.activedId || this.materialId;
        const index = this.lowCodeGraph.findIndex((item) => item.id === activedId);
        this.lowCodeGraph[index].props = {
            ...this.lowCodeGraph[index].props,
            ...allValues
        };
        this.behaviorId$.next(activedId);
    }

    // 删除节点
    deleteNode(id: number) {
        const index = this.lowCodeGraph.findIndex((item) => item.id === id);
        this.lowCodeGraph.splice(index, 1);
        this.behaviorId$.next(id);
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
