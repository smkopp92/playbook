/* @flow */

import React, { type Node } from 'react'

type BreadcrumbsProps = {
  children: Node,
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => (
  <ol className="breadcrumb p-0 mb-0 bg-white-opacity-1">
    {children}
  </ol>
)

export default Breadcrumbs
