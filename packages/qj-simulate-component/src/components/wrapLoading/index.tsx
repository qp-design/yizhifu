import { useComponent } from '../../hooks';
import {ReactNode} from 'react';

export function WrapLoading({ children, loading }: { children: ReactNode; loading: boolean }) {
    const { View } = useComponent();
    return (
        <View className='wrap-loading'>
          {
            loading ? <>
              <View className='wrap-loading-bg'></View>
              <View className="wrap-loading-wrap">
                <View className="wrap-loading-wrap__ring"></View>
                <View className="wrap-loading-wrap__ring"></View>
                <View className="wrap-loading-wrap__ring"></View>
              </View>
              </> : null
          }
          {children}
        </View>
    );
}
