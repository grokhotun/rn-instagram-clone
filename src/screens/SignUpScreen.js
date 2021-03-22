import React, {useState} from 'react'
import {connect} from 'react-redux'
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {signUpUser} from 'src/redux/actions/user'

import Message from 'src/components/Message'

import {Input} from 'src/ui/Input'
import {Btn} from 'src/ui/Btn'
import Wrapper from 'src/ui/Wrapper'
function SignUpScreen({navigation, signUp}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const toSignIn = () => navigation.navigate('SignIn')
  const onEmailChangeHandler = (value) => setEmail(value)
  const onPasswordChangeHandler = (value) => setPassword(value)
  const onRepeatPasswordChangeHandler = (value) => setRepeatPassword(value)

  const validateData = () => {
    if (email === '') {
      setIsError(true)
      setMessage('Введите email')
      return false
    }
    if (password === '') {
      setIsError(true)
      setMessage('Введите пароль')
      return false
    }
    if (repeatPassword === '') {
      setIsError(true)
      setMessage('Повторите пароль')
      return false
    }
    if (password !== repeatPassword) {
      setIsError(true)
      setMessage('Пароли не совпадают')
      return false
    }
  }

  const onSignUp = () => {
    if (validateData()) {
      signUp(email, password)
    }
  }

  return (
    <Wrapper style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={{width: 100}} source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <View style={styles.formGroup}>
          <Input
            value={email}
            onChange={onEmailChangeHandler}
            style={{marginBottom: 10}}
            placeholder='Email'
          />
        </View>
        <View style={styles.formGroup}>
          <Input
            value={password}
            onChange={onPasswordChangeHandler}
            style={{marginBottom: 10}}
            secureTextEntry={true}
            placeholder='Пароль'/>
        </View>
        <View style={styles.formGroup}>
          <Input
            value={repeatPassword}
            onChange={onRepeatPasswordChangeHandler}
            secureTextEntry={true}
            placeholder='Повторите пароль'/>
        </View>
        {isError && <Message message={message} type='error'/>}
      </View>
      <View style={styles.footer}>
        <Btn onPress={onSignUp} style={styles.footerBtn}>
          Зарегистрироваться
        </Btn>
        <Btn onPress={toSignIn} style={styles.footerBtn}>
          Зарегистрированы? Войти
        </Btn>
      </View>
    </Wrapper>
  )
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
  signUp: PropTypes.func
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

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUpUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
