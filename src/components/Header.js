import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import {Ionicons} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

export function Header({style}) {
  return (
    <View style={{...styles.header, ...style}}>
      <Ionicons name='camera-outline' size={27} color='black' />
      <Image style={{width: 100}} source={require('assets/instagram.png')}/>
      <Feather name='send' size={27} color='black' />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: .2,
    borderBottomColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10
  }
})

Header.propTypes = {
  style: PropTypes.object
}
