import React from 'react';
import { useFederationModule, remoteAssetsType } from '../hooks';

export const FederationModule = ({ port, ...props }: { port: remoteAssetsType }) => {
    const { Component, errorLoading } = useFederationModule(port);
    return (
        <React.Suspense fallback="Loading System">
            {errorLoading ? `Error loading module "${module}"` : Component && <Component {...props} />}
        </React.Suspense>
    );
};
