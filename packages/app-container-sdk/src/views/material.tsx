import React from 'react';
// @ts-ignore
import { FederationModule, remoteAssetsType } from 'qj-shared-library';

function Material({port} : { port: remoteAssetsType }) {
  return (
    <div className={'materials'}>
      <FederationModule
        port={port}
      />
    </div>
  )
}

export default Material;
