// @ts-ignore
import React, {useState} from 'react';
import {Collapse} from 'antd';
import {QjIcon} from '@brushes/components'
import {config} from "../../mock/config";
import './index.scss';
import {DragJsx} from "qj-shared-library";
import MenuItem from './menuItem';

const {Panel} = Collapse;


const ModuleC: React.FC = () => {
  const [classifyIndex, setClassifyIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);

  const [lists, setList] = useState(() => {
    return [config[0]['children'][0]['group']]
  });

  const handleClassify = (typeIndex, itemIndex) => {
    setClassifyIndex(typeIndex)
    setDetailIndex(itemIndex)

    console.log(24, typeIndex, itemIndex)
    // config[typeIndex]['children'][itemIndex]['group']
    const item = config[typeIndex]['children'][itemIndex]['group'];
    setList(prevState => {
      prevState[itemIndex] = item;
      return prevState
    })

    // setList([...config[typeIndex]['children'][itemIndex]['group']])
    //
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
      {
        lists.map((item, index) =>
          <div key={index} style={{ display: index === detailIndex ? 'block' : 'none'}}>
            <MenuItem key={index} lists={item}></MenuItem>
          </div>
        )
      }
    </div>
  )
}

export default ModuleC;
