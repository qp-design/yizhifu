import { createApp, h } from 'vue';
import React, { useRef, useEffect } from 'react';
import { _ } from '@brushes/tools';
// @ts-ignore
import * as operateVue from 'qj-operate-vue/operate-vue'
import {NodeGraph} from 'qj-shared-library';

const { get, noop } = _;

const IndexVue = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const ref = useRef();
  useEffect(() => {
    const AppVue = get(operateVue, defaultValue.type, noop);
    const app = createApp(h(AppVue, {defaultValue}));
    app.mount(ref.current)

    return () => {
      app.unmount()
    }
  }, []);

  return (
    <div ref={ref}></div>
  )
}

export default IndexVue;
