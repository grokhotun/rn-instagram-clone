import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {signOutUser} from 'src/redux/actions/user'
function Header({navigation, style, signOut}) {
  return (
    <View style={{...styles.header, ...style}}>
      <Image
        style={{width: 100}}
        source={require('assets/instagram.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10
  }
})

Header.propTypes = {
  navigation: PropTypes.object,
  style: PropTypes.object,
  signOut: PropTypes.func
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
