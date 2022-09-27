import React, {memo, useEffect, useRef} from 'react';
import {Goods} from 's-material-vue';
import { createApp, h } from 'vue';
import { _ } from '@brushes/tools';
import vueComponent from './vueComponent'
const {isEqual} = _;

const VueMonitor = memo((props) => {
  const ref = useRef();
  const prevProps = useRef(props);
  useEffect(() => {
    console.log(10, prevProps.current, props);
    const isUpdate = true
    const app = createApp(h(Goods, {...props, isUpdate}));
    app.mount(ref.current)

    return () => {
      prevProps.current = props
      app.unmount()
    }
  }, [props])
  return (
    <div ref={ref}> </div>
  )
});


export default VueMonitor
