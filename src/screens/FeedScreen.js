import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {Header} from 'components/Header'
import {Feed} from 'components/Feed'
import {Footer} from 'components/Footer'

export function FeedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <Feed style={styles.feed}/>
      <Footer
        style={styles.footer}
        navigation={navigation}/>
    </View>
  )
}

FeedScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: '10%'
  },
  feed: {
    width: '100%'
  },
  footer: {
    width: '100%',
    height: '10%'
  }
})
