/* @flow */
import React from 'react'
import { Nav } from '../../'
import NavItem from '../_item.jsx'

type MyLinkProps = { children?: Array<React.Node>}

const MyLink = (props: MyLinkProps) => (
  <a
      id="my-custom-link"
      {...props}
  >
    {props.children}
  </a>
)

const LinkTagNav = (props) => (
  <Nav
      link="#"
      orientation="horizontal"
      title="BYOL"
      {...props}
  >
    <NavItem
        active
        link="#"
        linkTag={MyLink}
        text="Reach Router"
        {...props}
    />
    <NavItem
        link="#"
        linkTag={MyLink}
        text="React Router"
        {...props}
    />
    <NavItem
        link="#"
        text="Support"
        {...props}
    />
  </Nav>
)

export default LinkTagNav
