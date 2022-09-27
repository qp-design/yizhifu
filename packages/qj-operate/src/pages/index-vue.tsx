
import { createApp, h } from 'vue';
import { memo, useRef, useEffect } from 'react';
import { _ } from '@brushes/tools';

// @ts-ignore
import * as operateVue from 'qj-operate-vue/operate-vue'
import {NodeGraph} from 'qj-shared-library';

const IndexVue = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const ref = useRef();
  useEffect(() => {
    console.log(operateVue)
    // const app = createApp(h(Goods, {defaultValue}));
    // app.mount(ref.current)

    return () => {
      // app.unmount()
    }
  }, []);

  return (
    <div ref={ref}>
      123131312313
    </div>
  )
}

export default IndexVue;
