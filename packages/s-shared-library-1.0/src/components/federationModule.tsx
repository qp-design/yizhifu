import React from 'react';
import { useFederationModule, remoteAssetsType } from '../hooks';

export const FederationModule: React.FC<remoteAssetsType> = ({port, ...props}) => {
  const { Component, errorLoading } = useFederationModule(port)
  console.log(6, props)
  return (
    <React.Suspense fallback="Loading System">
      {errorLoading
        ? `Error loading module "${module}"`
        : Component && <Component {...props} />}
    </React.Suspense>
  );
};
