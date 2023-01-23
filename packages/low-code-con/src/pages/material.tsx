import React from 'react';
// @ts-ignore
import { FederationModule } from 'qj-shared-library';

function Material({port} : { port: Object }) {
  return (
    <FederationModule
      port={port}
    />
  )
}

export default Material;
