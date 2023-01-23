import React from 'react';
import './index.scss';
// @ts-ignore
import {NodeGraph} from 'qj-shared-library';
import IndexReact from './react';

const Index = ({defaultValue = {}}: { defaultValue?: NodeGraph }) => {
  return (
    <IndexReact defaultValue={defaultValue}/>
  )
}

export default Index;
