import { lazy, useEffect, useState } from 'react';

import useDynamicScript from './useDynamicScript';

// 连接容器
function loadComponent(scope: string, module: string) {
    return async () => {
        // 初始化共享作用域（shared scope）用提供的已知此构建和所有远程的模块填充它
        // Initializes the share scope. This fills it with known provided modules from this build and all remotes

        // @ts-ignore
        await __webpack_init_sharing__('default');
        // @ts-ignore
        const container = window[scope]; // or get the container somewhere else // 或从其他地方获取容器
        // Initialize the container, it may provide shared modules
        // 初始化容器 它可能提供共享模块
        // @ts-ignore
        await container.init(__webpack_share_scopes__.default);
        // @ts-ignore
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    };
}

const componentCache = new Map();
// 加载远程模块的入口文件并并连接
export const useFederatedComponent = (remoteUrl: string, scope: string, module: string) => {
    const key = `${remoteUrl}-${scope}-${module}`;
    const [Component, setComponent] = useState(null);

    const { ready, errorLoading } = useDynamicScript(remoteUrl);
    useEffect(() => {
        if (Component) setComponent(null);
        // Only recalculate when key changes
    }, [key]);

    useEffect(() => {
        if (ready && !Component) {
            const Comp = lazy(loadComponent(scope, module)) as any;
            componentCache.set(key, Comp);
            setComponent(Comp);
        }
        // key includes all dependencies (scope/module)
    }, [Component, ready, key]);

    return { errorLoading, Component };
};

export default useFederatedComponent;
