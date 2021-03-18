import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {Post} from 'components/Post'

export function Feed() {
  return (
    <ScrollView style={styles.feed}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  feed: {
    height: '80%'
  }
})
