import React from 'react'
import { Icon } from '../../'
import { faCoffee } from '@fortawesome/pro-regular-svg-icons'
import { powergon } from "@power/custom-react-icons"

const IconDefault = (props) => {
  return (
    <div>
      <Icon
          fixedWidth
          icon={powergon}
          {...props}
      />
    </div>
  )
}

export default IconDefault
