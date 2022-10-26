import classNames from 'classnames'
import React from 'react'
import { Text } from '../text'
import { mergeStyle, pxTransform } from '../../util/utils'

export const AtIcon = (
  {
    customStyle = '',
    className = '',
    prefixClass = 'at-icon',
    value = '',
    color = '',
    size = 24,
    onClick
  } : {
    customStyle: Object | string,
    className: Array<any> | string,
    prefixClass: string,
    value: string,
    color: string,
    size: number | string,
    onClick?: Function
  }
) => {
  const iconName = value ? `${prefixClass}-${value}` : ''
  return (
    <Text
      className={classNames(prefixClass, iconName, className)}
      onClick={onClick}
    ></Text>
  )
}
