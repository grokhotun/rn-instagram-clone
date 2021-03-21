import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Img from 'src/ui/Img'
export function Avatar({style, onPress, source}) {
  return (
    <TouchableOpacity
      style={{...styles.avatar, ...style}}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Img style={styles.img} source='https://www.peoples.ru/art/cinema/actor/christian_bale/N4VyjnwIscuHn.jpeg' />
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
  }
})
