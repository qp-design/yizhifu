import React from 'react';
import MonitorComponent from './monitor';

const Index = ({materials = {}} : { materials: Object}) => {
  return <MonitorComponent materials={materials}/>
}
export default Index;
