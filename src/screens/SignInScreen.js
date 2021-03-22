import React, {useState} from 'react'
import {connect} from 'react-redux'
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {signInUser} from 'src/redux/actions/user'

import {Btn} from 'src/ui/Btn'
import {Input} from 'src/ui/Input'
import Wrapper from 'src/ui/Wrapper'

function SignInScreen({navigation, authUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toRegister = () => navigation.navigate('SignUp')
  const onEmailChangeHandler = (value) => setEmail(value)
  const onPasswordChangeHandler = (value) => setPassword(value)
  const signIn = () => authUser(email, password)

  return (
    <Wrapper style={styles.wrapper}>
      <View style={styles.header}>
        <Image
          style={{width: 100}}
          source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <View style={styles.formGroup}>
          <Input
            onChange={onEmailChangeHandler}
            value={email}
            style={{marginBottom: 10}}
            placeholder='Email'/>
        </View>
        <View style={styles.formGroup}>
          <Input
            onChange={onPasswordChangeHandler}
            value={password}
            secureTextEntry={true}
            placeholder='Пароль'/>
        </View>
      </View>
      <View style={styles.footer}>
        <Btn onPress={signIn} style={styles.footerBtn}>
          Войти
        </Btn>
        <Btn onPress={toRegister} style={styles.footerBtn}>
          Регистрация
        </Btn>
      </View>
    </Wrapper>
  )
}

SignInScreen.propTypes = {
  navigation: PropTypes.object,
  authUser: PropTypes.func
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 10
  },
  body: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  footer: {
    width: '100%',
    alignItems: 'center'
  },
  footerBtn: {
    width: 250,
    marginBottom: 10
  },
  formGroup: {
    width: 250
  }
})

const mapDispatchToProps = (dispatch) => ({
  authUser: (email, password) => dispatch(signInUser(email, password))
})

export default connect(null, mapDispatchToProps)(SignInScreen)
