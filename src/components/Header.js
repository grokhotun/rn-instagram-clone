import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {signOutUser} from 'src/redux/actions/user'

import Img from 'src/ui/Img'
function Header({navigation, style, signOut, currentUser, children}) {
  return (
    <View style={{...styles.header, ...style}}>
      {children ? children : <Img style={styles.logo} objectFit='contain' fromWeb={false} source={require('root/assets/instagram.png')}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#000',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    minHeight: 60
  },
  logo: {
    width: 100
  }
})

Header.propTypes = {
  navigation: PropTypes.object,
  style: PropTypes.object,
  currentUser: PropTypes.object,
  signOut: PropTypes.func,
  children: PropTypes.any
}

const mapStateToProps = ({userState}) => ({
  currentUser: userState.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
