import {useComponent} from '../../hooks';
import {ReactNode} from 'react';


export const SmoothCheckbox = ({children, ...restProps}: {children: ReactNode}) => {
  const { CheckboxGroup, Checkbox } = useComponent();
  const SmoothRadio = CheckboxGroup || Checkbox?.Group;
  return (
    <SmoothRadio {...restProps}>
      {children}
    </SmoothRadio>
  )
}
