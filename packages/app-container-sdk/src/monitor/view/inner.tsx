import { createApp, h } from 'vue';
import {useEffect, useRef} from 'react';
import { _ } from '@brushes/tools';

const { isEmpty } = _;

const Inner = ({MaterialsComponent, ...restProps}: { MaterialsComponent: any}) => {
  const ref = useRef(null);
  useEffect(() => {
    if(isEmpty(MaterialsComponent)) return;
    const app = createApp(h(MaterialsComponent, restProps));
    app.mount(ref.current!)
    return () => app.unmount()
  });

  return (
    <div>
      <div ref={ref}></div>
    </div>
  )
}

export default Inner
