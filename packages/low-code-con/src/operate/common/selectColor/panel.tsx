import React from 'react';
import {SketchPicker} from 'react-color';
import DEFAULT_COLOR from "./defaultColor";

const Panel = ({color, onChange}: any) => {

  return (
    <SketchPicker
      presetColors={DEFAULT_COLOR}
      onChange={onChange}
      color={color}
      width={'250px'}
    />
  )
}

export default Panel;
