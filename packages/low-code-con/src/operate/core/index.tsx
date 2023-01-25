import React from 'react';
import './index.scss';
// @ts-ignore
import {NodeGraph} from 'qj-shared-library';
import IndexReact from './react';

const Index = ({defaultValue = {}}: { defaultValue?: NodeGraph }) => {
  console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)
  return (
    <IndexReact defaultValue={defaultValue}/>
  )
}

export default Index;
