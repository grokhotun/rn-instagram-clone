import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {Input} from 'src/ui/Input'
import {Btn} from 'src/ui/Btn'
export function SignUpScreen({navigation}) {
  const toSignIn = () => navigation.navigate('SignIn')

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={{width: 100}} source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <Input style={{marginBottom: 10}} placeholder='Логин'/>
        <Input style={{marginBottom: 10}} secureTextEntry={true} placeholder='Пароль'/>
        <Input secureTextEntry={true} placeholder='Повторите пароль'/>
      </View>
      <View style={styles.footer}>
        <Btn style={{marginBottom: 10}}>
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
