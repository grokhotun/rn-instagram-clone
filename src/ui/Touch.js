import React from 'react'
import {TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

function Touch({children, onPress, style, opacity}) {
  return (
    <TouchableOpacity
      style={{...style}}
      onPress={onPress}
      activeOpacity={opacity}>
      {children}
    </TouchableOpacity>
  )
}

Touch.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
  style: PropTypes.object,
  opacity: PropTypes.number
}

export default Touch
