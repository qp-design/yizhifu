

import React, {useState} from 'react';
import Tag from 'antd/es/tag';
export const PageItems = ({data}: { data: { current: Array<any> }}) => {
  const [state, ] =
    useState(['#2db7f5', '#87d068', '#108ee9', 'blue', 'cyan', 'green',
      '#2db7f5', '#87d068', '#108ee9', 'blue', 'cyan', 'green',
      '#2db7f5', '#87d068', '#108ee9', 'blue', 'cyan', 'green',
    ]);
  return (
    <div style={{margin: "20px 0"}}>
      <span style={{ marginRight: 8 }}>更新的页面:</span>
      {
        data.current.map((item, idx) => <Tag color={state[idx]} key={item.id}>{item.name}</Tag>)
      }
    </div>
  )
}

