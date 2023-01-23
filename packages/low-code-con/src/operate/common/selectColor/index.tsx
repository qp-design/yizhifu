import React, {useState} from 'react';
import { Popover} from 'antd';
import Panel from './panel';
import './index.scss';
// @ts-ignore
import {useLowCodeGraph} from "qj-shared-library";

export const SelectColor = ({form, value, name}: any) => {
  const [color, setColor] = useState(value);
  const monitorInstance = useLowCodeGraph();

  const onChange = (color: any) => {
    setColor(color.hex)
    form.setFieldValue(name, color.hex);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
  }

  return <div className={'selectColor'}>
    <Popover
      content={() => {
        return <Panel color={color} name={name} onChange={onChange} form={form}/>
      }}
      placement={'bottomRight'}
      trigger={'click'}
    >
      <span className={'tip'}>{color}</span>
      <div className={'box'}>
        <div className={'boxContent'} style={{backgroundColor: color}}></div>
      </div>
    </Popover>
  </div>
}


