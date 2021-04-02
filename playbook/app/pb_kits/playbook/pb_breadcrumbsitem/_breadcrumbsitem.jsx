/* @flow */

import React, { type Node } from 'react'

import classnames from 'classnames'

type BreadcrumbsItemProps = {
  children: Node,
  active?: ?boolean,
  persist?: ?boolean,
}

const BreadcrumbsItem = ({ active, children }: BreadcrumbsItemProps) => (
  <li className={classnames('breadcrumb-item', { active })}>
    {children}
  </li>
)

export default BreadcrumbsItem
