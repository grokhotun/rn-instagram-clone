import React, {useState} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {Input} from 'src/ui/Input'
import {Btn} from 'src/ui/Btn'
import {$api} from 'src/api'

export function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const toSignIn = () => navigation.navigate('SignIn')
  const onEmailChangeHandler = (value) => setEmail(value)
  const onPasswordChangeHandler = (value) => setPassword(value)
  const onRepeatPasswordChangeHandler = (value) => setRepeatPassword(value)
  const onSignUp = async () => {
    const user = await $api.signUp(email, password)
    console.log(user)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={{width: 100}} source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <Input
          value={email}
          onChange={onEmailChangeHandler}
          style={{marginBottom: 10}}
          placeholder='Email'
        />
        <Input
          value={password}
          onChange={onPasswordChangeHandler}
          style={{marginBottom: 10}}
          secureTextEntry={true}
          placeholder='Пароль'/>
        <Input
          value={repeatPassword}
          onChange={onRepeatPasswordChangeHandler}
          secureTextEntry={true}
          placeholder='Повторите пароль'/>
      </View>
      <View style={styles.footer}>
        <Btn onPress={onSignUp} style={{marginBottom: 10}}>
          Зарегистрироваться
        </Btn>
        <Btn onPress={toSignIn} style={{marginBottom: 10}}>
          Зарегистрированы? Войти
        </Btn>
      </View>
    </View>
  )
}

SignUpScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7e7e7'
  },
  header: {
    marginBottom: 10
  },
  body: {
    marginBottom: 10
  },
  footer: {}
})
