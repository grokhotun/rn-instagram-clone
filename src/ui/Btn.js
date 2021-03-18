import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import PropTypes from 'prop-types'

export function Btn({style, children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.default, ...style}}>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Btn.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  default: {
    width: 250,
    padding: 10,
    backgroundColor: '#0095f6',
    borderRadius: 4
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
})
