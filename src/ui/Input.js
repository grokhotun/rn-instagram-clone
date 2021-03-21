import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import PropTypes from 'prop-types'

export function Input(props) {
  const {
    multiline = false,
    numberOfLines = 1,
    textAlignVertical = 'center',
    style,
    placeholder,
    secureTextEntry,
    onChange,
    value
  } = props

  return (
    <TextInput
      textAlignVertical={textAlignVertical}
      multiline={multiline}
      numberOfLines={numberOfLines}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      style={{...styles.default, ...style}}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  textAlignVertical: PropTypes.string
}

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    width: '100%',
    padding: 10
  }
})
