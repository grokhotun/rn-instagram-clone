import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import PropTypes from 'prop-types'

export function Input({style, placeholder, secureTextEntry}) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={{...styles.default, ...style}}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool
}

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    width: 250,
    padding: 10
  }
})
