// @ts-ignore
import React from 'react';
import {Select} from 'antd';
import './index.scss';

const {Option} = Select;
const fakeData = [
  {
    id: 0,
    label: '全部模版',
    value: 'all'
  },
  {
    id: 1,
    label: '商务服务',
    value: 'business'
  },
  {
    id: 2,
    label: '房产家居',
    value: 'house'
  },
  {
    id: 3,
    label: '教育培训',
    value: 'education'
  },
  {
    id: 4,
    label: '生活服务',
    value: 'live'
  },
  {
    id: 5,
    label: '全部模版',
    value: 'all'
  }

]
const fakeArr = [1,2,3,4,5,6,7,8,9]

const TemplateC = () => {

  return (
    <div className={'TemplateC'}>
      <Select defaultValue={'all'} style={{width: '100%'}}>
        {
          fakeData.map(item => <Option value={item.value} key={item.id}>{item.label}</Option>)
        }
      </Select>
      <div className={'templateWrap'}>
        {
          fakeArr.map(item => {
            return (
              <div className={'templateItem'} key={item}>
                模版-{item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TemplateC;
