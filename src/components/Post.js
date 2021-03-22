import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {EvilIcons} from '@expo/vector-icons'
import PropTypes from 'prop-types'
import {Avatar} from './Avatar'

export function Post({post}) {
  const {avatar, login, description, image, likes} = post
  return (
    <View style={styles.postCard}>
      <View style={styles.header}>
        <Avatar
          style={styles.headerPhoto}
          source={avatar}
        />
        <Text style={styles.headerName}>{login}</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.bodyImg} source={{uri: image}}/>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLike}>
          <EvilIcons name='heart' size={35} color='black' />
        </View>
        <Text style={styles.footerLikes}>
          Нравится: {likes}
        </Text>
        <Text style={styles.footerDescription}>
          {description}
        </Text>
      </View>
    </View>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

const styles = StyleSheet.create({
  postCard: {
    width: '100%',
    height: 500
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  headerPhoto: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  headerName: {
    fontWeight: 'bold'
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  bodyImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  footer: {
    padding: 10
  },
  footerLike: {
    marginBottom: 10
  },
  footerLikes: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  footerDescription: {}
})
