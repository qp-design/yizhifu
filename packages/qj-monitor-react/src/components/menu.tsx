
import React from 'react';
import classNames from 'classnames';


export const Menu = ({menu, path, switchMenu}: {
  menu: Array<any>;
  path: string;
  switchMenu: (e: any) => void
}) => {

  return (
    <ul className={'monitor-node monitor-menu'}>
      {
        menu.map((item: any) => {
          return (
            <li
              className={classNames({actived: item.router === path})}
              onClick={() => switchMenu(item)} key={item.id}>
              {item.menu}
            </li>
          )
        })
      }
    </ul>
  )
}
