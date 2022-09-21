// 触发画布重新渲染事件
export const DRAGGABLE_COMPONENT = 'DRAG_COMPONENT';

export type MATERIALS_TYPE = {
    type: string;
    name: string;
    props: {
        value?: Array<any>;
    };
};

export type NODE_TYPE = {
    type: string;
    id: number;
    props: {
        [v: string]: unknown;
    };
};
