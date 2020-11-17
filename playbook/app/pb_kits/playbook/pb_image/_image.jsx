/* @flow */

import React from 'react'
import classnames from 'classnames'
import { globalProps } from '../utilities/globalProps.js'
import { buildAriaProps, buildCss, buildDataProps } from '../utilities/props'

const EMPTY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='

type ImageProps = {
  alt?: string,
  aria?: object,
  className?: string,
  data?: object,
  id?: string,
  size: "xs" | "sm" | "md" | "lg" | "xl",
  rounded?: boolean,
  url: string,
}

const Image = (props: ImageProps) => {
  const {
    alt = '',
    aria = {},
    className,
    data = {},
    id,
    rounded = false,
    size = '',
    url,
  } = props

  const ariaProps = buildAriaProps(aria)
  const classes = classnames(
    buildCss('pb_image_kit lazyload blur_up', size),
    { rounded },
    globalProps(props),
    className
  )
  const dataProps = buildDataProps(data)

  const srcUrl = url === null || url === '' ? EMPTY_IMG : url

  return (
    <div>
      <img
          {...ariaProps}
          {...dataProps}
          alt={alt}
          className={classes}
          data-src={srcUrl}
          id={id}
          rounded={rounded}
          src={srcUrl}
      />
    </div>
  )
}

export default Image
