import React from 'react'
import {TouchableOpacity, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

export function Avatar({style, onPress, source}) {
  return (
    <TouchableOpacity
      style={{...styles.avatar, ...style}}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image style={styles.img} source={{uri: source}}/>
    </TouchableOpacity>
  )
}

Avatar.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  source: PropTypes.string
}


const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
