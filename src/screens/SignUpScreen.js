import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {Input} from 'src/ui/Input'
import {Btn} from 'src/ui/Btn'

export function SignUpScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={{width: 100}} source={require('assets/instagram.png')}/>
      </View>
      <View style={styles.body}>
        <Input style={{marginBottom: 10}} placeholder='Логин'/>
        <Input secureTextEntry={true} placeholder='Пароль'/>
        <Input secureTextEntry={true} placeholder='Повторите пароль'/>
      </View>
      <View style={styles.footer}>
        <Btn style={{marginBottom: 10}}>
          Зарегистрироваться
        </Btn>
      </View>
    </View>
  )
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
