import {useComponent} from '../../hooks';
import React, {Dispatch, ReactNode} from "react";

interface PopupInterface {
  popupVisible: boolean;
  popupHandler: Dispatch<boolean>;
  children: ReactNode;
}

export const Popup: React.FC<PopupInterface> =
  ({popupVisible, popupHandler, children}) => {
    const {View} = useComponent();
    return (
      <View className={`brushes-popup ${popupVisible? 'show': ''}`}>
        <View className={'brushes-popup-mask'} onClick={() => popupHandler(false)} />
        <View className={'brushes-popup-content'}>
          <View className={'brushes-popup-closeWrap'}>
            <View className="icon" onClick={() => popupHandler(false)} />
          </View>
          {children}
        </View>
      </View>
    )
  }
