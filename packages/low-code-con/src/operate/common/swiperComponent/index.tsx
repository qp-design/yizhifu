import React, {useState} from "react";
import {Slider} from 'antd';
import {useLowCodeGraph} from "qj-shared-library";

export const SwiperComponent: React.FC = ({form, value, name}: any) => {

  const [val, setVal] = useState(value);
  const monitorInstance = useLowCodeGraph();

  const handleChange = (target: number) => {
    setVal(target);
    form.setFieldValue(name, target);
    const values = form.getFieldsValue();
    monitorInstance.updateNode({...values, [name]: target});
  }

  return (
    <>
      <Slider
        defaultValue={val}
        onChange={handleChange}
        style={{
          marginBottom: '24px'
        }}
      />
    </>
  )
}
