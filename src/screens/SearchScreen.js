import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {Header} from 'components/Header'
import {Input} from 'src/ui/Input'
// import {Footer} from 'components/Footer'

export function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <View style={styles.body}>
        <View style={styles.searchbar}>
          <Input
            style={{marginBottom: 10, width: '100%'}}
            placeholder='Поиск...'/>
        </View>
      </View>
    </View>
  )
}

SearchScreen.propTypes = {
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
  body: {
    width: '100%',
    height: '100%'
  },
  searchbar: {
    padding: 10
  }
})
