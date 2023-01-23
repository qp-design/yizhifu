import './index.scss';
import React from "react";
// @ts-ignore
import Root from 'app-container/low-code'
import * as materials from 's-material-vue';

// import { Root } from 'app-container-sdk'
import Menu from '../../materials';
import Operate from '../../operate/core';
const Index = () => {
  return (
    <Root materials={materials} Menu={Menu} Operate={Operate}/>
  )
}

export default Index;
