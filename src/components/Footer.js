import React from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

import {Ionicons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'

export function Footer({style, navigation}) {
  return (
    <View style={{...styles.footer, ...style}}>
      <Ionicons name="home" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
      <AntDesign name="instagram" size={24} color="black" />
      <Ionicons name="bookmark-outline" size={24} color="black" />
      <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.img} source={require('assets/user01.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}

Footer.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object
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
