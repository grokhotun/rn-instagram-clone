import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import PropTypes from 'prop-types'

function Img({source, style, objectFit, fromWeb = true}) {
  const resizeMode = objectFit || 'cover'
  if (fromWeb) {
    return (
      <View style={{...styles.default, ...style}}>
        <Image
          style={{...styles.img, resizeMode: resizeMode}}
          source={{uri: source}}
        />
      </View>
    )
  } else {
    return (
      <View style={{...styles.default, ...style}}>
        <Image
          style={{...styles.img, resizeMode: resizeMode}}
          source={source}
        />
      </View>
    )
  }
}

Img.propTypes = {
  style: PropTypes.object,
  source: PropTypes.string,
  objectFit: PropTypes.string,
  fromWeb: PropTypes.bool
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
