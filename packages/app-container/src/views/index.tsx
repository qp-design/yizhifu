import React, {lazy, Suspense} from 'react'
import './index.scss';
// @ts-ignore
import {DropJsx, RDnDProvider} from 'qj-shared-library';
// @ts-ignore
const Monitor = lazy(() => import('qj-monitor/monitor'))
// @ts-ignore
const Operate = lazy(() => import('qj-operate/operate'))
// @ts-ignore
const Material = lazy(() => import('qj-material/material'))

const Root = () => {
  return (
    <RDnDProvider>
      <div className={'design-container'}>
        <Material/>
        <Monitor/>
        <Operate/>
      </div>
    </RDnDProvider>
  )
}

export default Root;
