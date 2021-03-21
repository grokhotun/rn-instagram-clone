import React from 'react'
import {StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types'

function Wrapper({children, style}) {
  return (
    <View style={{...styles.wrapper, ...style}}>
      {children}
    </View>
  )
}

Wrapper.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff'
  }
})

export default Wrapper
