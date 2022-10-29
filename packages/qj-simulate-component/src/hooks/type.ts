// import * as Component from '@tarojs/components';
import React, {ReactNode} from 'react';

// export type ComponentType = typeof Component
export interface ComponentType {
  View: ReactNode;
  Text: ReactNode;
  Swiper: ReactNode;
  SwiperItem: ReactNode;
  Image: ReactNode;
}
