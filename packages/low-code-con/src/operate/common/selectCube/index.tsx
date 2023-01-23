import React from 'react';
import {SelectPicture} from '../index';
import './index.scss';
import {SelectLink} from "../selectLink";

export const SelectCube = ({form, name, parentName = []}: { form: any, name: any; parentName?: Array<any>; }) => {
  const [coe, target] = name;

  return (
    <div className={'selectCube'}>
      <ul className={'cubeGroup'}>
        <li className={'cubeItem'}>
          <div className="lPart">
            <div className={'title'}>
              <p>第 {coe + 1} 项</p>
            </div>
            <div className={'pickLink'}>
              <SelectLink form={form} name={[coe, target[1]]} parentName={parentName}/>
            </div>
          </div>
          <div className="rPart">
            <SelectPicture form={form} name={[coe, target[0]]} parentName={parentName}/>
          </div>
        </li>
      </ul>
    </div>
  )
}
