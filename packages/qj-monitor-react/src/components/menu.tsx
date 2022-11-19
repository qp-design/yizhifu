
import React, {useEffect, useState} from 'react';
import classNames from 'classnames';

export type MenuItem = {
  tginfoMenuCode: string;
  tginfoMenuPcode: string;
  menuOpcode: string;
  tginfoMenuName: string
}

export const Menu = ({menu, path, switchMenu}: {
  menu: Array<MenuItem>;
  path: string;
  switchMenu: (e: any) => void
}) => {
  const [menuList, setMenu] = useState<Array<MenuItem>>([]);

  useEffect(() => {
    const menuData = menu.filter((item: MenuItem) => item.tginfoMenuPcode === '-1');
    setMenu(menuData)
  }, [menu]);

  return (
    <ul className={'monitor-node monitor-menu'}>
      {
        menuList.map((item: any) => {
          return (
            <li
              key={item.tginfoMenuCode}
              className={classNames({actived: item.menuOpcode === path})}
              onClick={() => switchMenu(item)}>
              {item.tginfoMenuName}
            </li>
          )
        })
      }
    </ul>
  )
}
