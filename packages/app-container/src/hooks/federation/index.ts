import { useState, useEffect } from 'react';
import { useFederatedComponent } from './useFederatedComponent';

interface Port {
  module: string;
  scope: string;
  url: string
}

export const useFederationModule = (port: Port) => {
  const [{ module, scope, url }, setSystem] = useState<Port>({} as any);

  const { Component, errorLoading } = useFederatedComponent(url, scope, module);

  useEffect(() => {
    setSystem(port)
  }, [port])

  return {
    Component,
    errorLoading
  }
};
