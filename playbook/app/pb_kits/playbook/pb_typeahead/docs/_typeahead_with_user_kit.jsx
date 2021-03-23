/* @flow */

import React from 'react'
import { Typeahead } from '../..'
// import Highlight from "../components/Highlight"

const options = [
  { label: 'Windows', value: '#FFA500' },
  { label: 'Siding', value: '#FF0000' },
  { label: 'Doors', value: '#00FF00' },
  { label: 'Roofs', value: '#0000FF' },
]

const TypeaheadWithUsers = (props) => {
  return (
    <>
      <Typeahead
        // formatOptionLabel={Highlight}
        // isMulti
          label="Colors"
          options={options}
          placeholder=""
          {...props}
      />
    </>
  )
}

export default TypeaheadWithUsers
