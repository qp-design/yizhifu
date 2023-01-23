import { Text, View } from '../components';
import { getEnv } from '@brushes/api';

const gModelMap = new Map(); // 存储组件

function wrapPromise(promise: Promise<any>) {
    let status = 'pending';
    let result: any;
    let suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}

function dynamicLoadComponent() {
    const existedComponent = gModelMap.get('component');
    return new Promise((resolve) => {
        if (!existedComponent) {
            (async () => {
                const flag = getEnv();
                let comp = {} as any;
                if (flag) {
                    // comp = await import('@tarojs/components');
                    const [taroCom, taroMobile] = await Promise.all([
                        import('@tarojs/components'),
                        import('antd-mobile')
                    ]);
                    comp = { ...taroMobile, ...taroCom };
                } else {
                    const antdComp = await import('antd-mobile');
                    comp = { ...antdComp, View, Text };
                }
                gModelMap.set('component', comp);
                resolve(comp);
            })();
        } else {
            resolve(existedComponent);
        }
    });
}

export function fetchResource() {
    let componentPromise = dynamicLoadComponent();
    return wrapPromise(componentPromise);
}
