// @ts-ignore
import React, {useState} from 'react';
import {Collapse} from 'antd';
import {QjIcon} from '@brushes/components'
import {config} from "../../mock/config";
import './index.scss';
import {DragJsx} from "qj-shared-library";

const {Panel} = Collapse;


const ModuleC: React.FC = () => {
  const [classifyIndex, setClassifyIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);

  const [lists, setList] = useState(() => {
    return config[0]['children'][0]['group']
  });

  const handleClassify = (typeIndex, itemIndex) => {
    setClassifyIndex(typeIndex)
    setDetailIndex(itemIndex)
    setList([...config[typeIndex]['children'][itemIndex]['group']])
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
      <DragJsx className={'content'}>
        {
          lists.map((item, index) => {
            return (
              <div key={index} className={'contentItem'} data-item={JSON.stringify(item)} >
                <QjIcon style={{ fontSize: '40px', fontWeight: 500, display: 'block' }} name={item.icon}></QjIcon>
                <b>{item.name}</b>
              </div>
            )
          })
        }
      </DragJsx>
    </div>
  )
}

export default ModuleC;
