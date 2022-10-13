import React from 'react';
import { useFederationModule } from 'qj-shared-library';

interface Port {
  port: {
    module: string;
    scope: string;
    url: string
  };
  id?: number;
  type?: string;
}
const Material: React.FC<Port> = ({port, ...props}) => {
  const { Component, errorLoading } = useFederationModule(port)
  return (
    <React.Suspense fallback="Loading System">
      {errorLoading
        ? `Error loading module "${module}"`
        : Component && <Component {...props} />}
    </React.Suspense>
  );
};

export default Material;
