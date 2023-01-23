// @ts-ignore
import React, {useEffect, useState} from 'react';
import Collapse from 'antd/es/collapse';
import {config} from "../../mock/config";
import MenuItem from './menuItem';
import './index.scss';
import {useMaterialMenu} from '../hooks';

const {Panel} = Collapse;


const ModuleC: React.FC = () => {
  const {handleClassify, classifyIndex, activedIndex, lists, detailIndex, menuId} = useMaterialMenu();
  console.log(14, menuId);
  return (
    <div className={'moduleC'}>
      <Collapse ghost activeKey={menuId !== 'index' ? 'business' : 'basic'} className={'classify'}>
        {
          config.map((type, typeIndex) => {
            return (
              <Panel header={type.label} key={type.code}>
                {
                  type.children.map(({code, name}, itemIndex) =>
                    <p key={itemIndex}
                       className={['classifyName',
                         classifyIndex === typeIndex && activedIndex === itemIndex ? ' active' : ''].join('')}
                       onClick={handleClassify.bind(null, typeIndex, itemIndex, code)}>
                      <span>{name}</span>
                    </p>
                  )
                }
              </Panel>
            )
          })
        }
      </Collapse>
      {
        lists.map((item, index) =>
          <div key={index} style={{display: index === detailIndex ? 'block' : 'none'}}>
            <MenuItem key={index} lists={item}></MenuItem>
          </div>
        )
      }
    </div>
  )
}

export default ModuleC;
