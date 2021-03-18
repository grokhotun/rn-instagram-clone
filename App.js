import React from 'react'
import {StyleSheet, View} from 'react-native'

import {Header} from 'components/Header'
import {Feed} from 'components/Feed'
import {Footer} from 'components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <Feed style={styles.feed}/>
      <Footer style={styles.footer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    height: '10%'
  },
  feed: {},
  footer: {
    height: '10%'
  }
})
