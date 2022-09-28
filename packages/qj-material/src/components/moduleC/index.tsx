// @ts-ignore
import React, {useState} from 'react';
import {Collapse} from 'antd';
import {QjIcon} from '@brushes/components'
import {config} from "../../mock/config";
import './index.scss';

const {Panel} = Collapse;


const ModuleC: React.FC = () => {
  const [classifyIndex, setClassifyIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);

  const handleClassify = (typeIndex, itemIndex) => {
    setClassifyIndex(typeIndex)
    setDetailIndex(itemIndex)
  }

  return (
    <div className={'moduleC'}>
      <Collapse ghost defaultActiveKey={config.map(item => item.id)} className={'classify'}>
        {
          config.map((type, typeIndex) => {
            return (
              <Panel header={type.label} key={type.id}>
                {
                  type.children.map((item, itemIndex) =>
                    <p key={item.id}
                       className={['classifyName', classifyIndex === typeIndex && detailIndex === itemIndex ? ' active' : ''].join('')}
                       onClick={handleClassify.bind(null, typeIndex, itemIndex)}>
                      <span>{item.name}</span>
                    </p>
                  )
                }
              </Panel>
            )
          })
        }
      </Collapse>
      <div className={'content'}>
        {
          config[classifyIndex]['children'][detailIndex]['group'].map(item => {
            return (
              <div className={'contentItem'} key={item.id}>
                <QjIcon style={{ fontSize: '40px', fontWeight: 500 }} name={item.icon}></QjIcon>
                <b>{item.label}</b>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ModuleC;
