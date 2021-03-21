import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import PropTypes from 'prop-types'

function Img({style, source, objectFit}) {
  const imageSource = source ? {uri: source} : require('root/assets/icon.png')
  const resizeMode = objectFit || 'cover'
  return (
    <View style={{...styles.default, ...style}}>
      <Image
        style={{...styles.img, resizeMode: resizeMode}}
        source={imageSource}
      />
    </View>
  )
}

Img.propTypes = {
  style: PropTypes.object,
  source: PropTypes.string,
  objectFit: PropTypes.string
}

const styles = StyleSheet.create({
  default: {
    width: '100%',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%'
  }
})

export default Img
