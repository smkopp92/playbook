/* @flow */
import React from 'react'
import classnames from 'classnames'
import { buildAriaProps, buildCss, buildDataProps } from '../utilities/props'
import { globalProps } from '../utilities/globalProps.js'
import { List } from  '..'

type SelectableListProps = {
  aria?: object,
  children?: Node,
  className?: string,
  data?: object,
  id?: string,
  variant?: 'checkbox' | 'radio',
}

const SelectableList = (props: SelectableListProps) => {
  const {
    aria = {},
    children,
    className,
    data = {},
    id,
  } = props

  const ariaProps = buildAriaProps(aria)
  const classes = classnames(buildCss('pb_selectable_list'), className, globalProps(props))
  const dataProps = buildDataProps(data)

  return (
    <div
        {...ariaProps}
        {...dataProps}
        className={classes}
        id={id}
    >
      <List {...props}>
        {children}
      </List>
    </div>
  )
}

export default SelectableList