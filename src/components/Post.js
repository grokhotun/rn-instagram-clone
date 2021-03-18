import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {EvilIcons} from '@expo/vector-icons'

export function Post() {
  return (
    <View style={styles.postCard}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={require('assets/user01.png')}/>
          <Text style={styles.name}>john_smith</Text>
        </View>
        <View>
          <Feather name='more-horizontal' size={24} color='black' />
        </View>
      </View>
      <View style={styles.body}>
        <Image source={require('assets/post.png')}/>
      </View>
      <View style={styles.footer}>
        <EvilIcons name="heart" size={30} color="black" />
        <EvilIcons name='comment' size={30} color='black' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postCard: {
    justifyContent: 'space-between',
    width: '100%'
  },
  header: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10
  },
  name: {
    fontWeight: 'bold'
  },
  body: {
    width: '100%',
    backgroundColor: 'white'
  },
  footer: {
    padding: 10
  }
})
