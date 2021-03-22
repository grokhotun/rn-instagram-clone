import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Img from 'src/ui/Img'

export function Avatar({style, onPress, source}) {
  return (
    <TouchableOpacity style={{...styles.avatar, ...style}} activeOpacity={0.7} onPress={onPress}>
      {
        source
          ? <Img fromWeb={true} style={styles.img} source={`${source}`} />
          : <Img fromWeb={false} style={styles.img} source={require('root/assets/blank-user.png')} />
      }
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
