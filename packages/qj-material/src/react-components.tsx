import * as Materials from 's-material-react'
import React from 'react';
import { _ } from "@brushes/tools"
const { get, noop } = _;
const DynamicComponents = ({type, id, ...props}: {type: string; id: number}) => {
  const ComponentsCom = get(Materials, type, noop)
  return (
    <ComponentsCom id={id} {...props}/>
  )
}

export default DynamicComponents;
