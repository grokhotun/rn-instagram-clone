import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

import {Ionicons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'

export function Footer({style}) {
  return (
    <View style={{...styles.footer, ...style}}>
      <Ionicons name="home" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
      <AntDesign name="instagram" size={24} color="black" />
      <Ionicons name="bookmark-outline" size={24} color="black" />
      <View style={styles.profile}>
        <Image style={styles.img} source={require('assets/user01.png')}></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: .2,
    borderTopColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})

Footer.propTypes = {
  style: PropTypes.object
}
