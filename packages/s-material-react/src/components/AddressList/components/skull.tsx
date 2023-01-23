import {memo, useRef} from "react";
import {useComponent} from "@brushes/qj-simulate-component";

const SkullJsx= () => {
  const {View, Skeleton} = useComponent();
  const coe = useRef(new Array(3).fill(0))
  return (
    <>
      <View className={'skullWrap'}>
        <View className={'skull'}>
          {
            coe.current.map((item, index) => <Skeleton key={index} className={'skullItem'} animated />)
          }
        </View>
      </View>
    </>
  )
}

export const Skull = memo(SkullJsx);
