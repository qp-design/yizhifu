import React, { useState, useEffect } from 'react';
import { useFederatedComponent } from '../hooks/useFederatedComponent';
import './index.scss';

const Material = ({port}) => {
  const [{ module, scope, url }, setSystem] = useState({});

  const { Component: Materials, errorLoading } = useFederatedComponent(url, scope, module);

  useEffect(() => {
    setSystem(port)
  }, [port])

  return (
    <React.Suspense fallback="Loading System">
      {errorLoading
        ? `Error loading module "${module}"`
        : Materials && <Materials />}
    </React.Suspense>
  );
};

export default Material;
