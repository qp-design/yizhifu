import './index.scss';
import React from "react";
// @ts-ignore
import * as materials from 'vue-material';
import { Root } from 'app-container-sdk'
import Menu from '../../materials';
import Operate from '../../operate/core';

console.log(8, materials)
const Index = () => {
  return (
    <Root materials={materials} Menu={Menu} Operate={Operate}/>
  )
}

export default Index;
