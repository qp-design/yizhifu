import React from 'react';
import * as config from '../config';
import './index.scss';
import {NodeGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';
import IndexVue from './index-vue';
import IndexReact from './index-react';

const { get } = _;
const Index = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const { formConfig } = get(config, defaultValue.type, {});

  /**
   * 优先使用 react配置
   * formConfig为空
   * 加载vue配置
   */
  if(!formConfig) return (
    <IndexVue defaultValue={defaultValue}/>
  )
  return (
    <IndexReact defaultValue={defaultValue}/>
  )
}

export default Index;
