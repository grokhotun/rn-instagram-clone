import React, {useState} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {Btn} from 'src/ui/Btn'
import {Input} from 'src/ui/Input'
export function SignInScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toRegister = () => navigation.navigate('SignUp')
  const onEmailChangeHandler = (value) => setEmail(value)
  const onPasswordChangeHandler = (value) => setPassword(value)
  const signIn = () => {
    console.log(email, password)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image
          style={{width: 100}}
          source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <Input
          onChange={onEmailChangeHandler}
          value={email}
          style={{marginBottom: 10}}
          placeholder='Email'/>
        <Input
          onChange={onPasswordChangeHandler}
          value={password}
          secureTextEntry={true}
          placeholder='Пароль'/>
      </View>
      <View style={styles.footer}>
        <Btn
          onPress={signIn}
          style={{marginBottom: 10}}>
          Войти
        </Btn>
        <Btn onPress={toRegister} style={{marginBottom: 10}}>
          Регистрация
        </Btn>
      </View>
    </View>
  )
}

SignInScreen.propTypes = {
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
