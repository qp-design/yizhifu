import React from 'react';
import { FederationModule } from 'qj-shared-library';

function Material({port} : { port: Object }) {
  return (
    <div className={'materials'}>
      <FederationModule
        port={port}
      />
    </div>
  )
}

export default Material;
