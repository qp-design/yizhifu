  import {QjIcon} from '@brushes/components';
  import {DragJsx} from 'qj-shared-library';
  import React from 'react';

  const MenuItem = ({lists}: { lists: Array<any>}) => {
    return (
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
    )
  }


  export default MenuItem;
