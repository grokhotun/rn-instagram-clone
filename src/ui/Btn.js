import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'

export function Btn({style, children, onPress, disabled}) {
  return (
    <TouchableOpacity
      style={{...styles.default, ...style}}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

Btn.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}

const styles = StyleSheet.create({
  default: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
