import { useState, useEffect } from 'react';
import { useFederatedComponent } from './useFederatedComponent';

export interface remoteAssetsType {
    module: string;
    scope: string;
    url: string;
}

export const useFederationModule = (port: remoteAssetsType) => {
    const [{ module, scope, url }, setSystem] = useState<remoteAssetsType>({} as any);

    const { Component, errorLoading } = useFederatedComponent(url, scope, module);

    useEffect(() => {
        setSystem(port);
    }, [port]);

    return {
        Component,
        errorLoading
    };
};
