import {useComponent} from '../../hooks';
import {ReactNode} from 'react';


export const SmoothRadio = ({children, ...restProps}: {children: ReactNode}) => {
  const { RadioGroup, Radio } = useComponent();
  const SmoothRadio = RadioGroup || Radio?.Group;
  return (
    <SmoothRadio {...restProps}>
      {children}
    </SmoothRadio>
  )
}
