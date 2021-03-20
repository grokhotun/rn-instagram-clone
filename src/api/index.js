import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'
import {firebaseConfig} from 'root/firebase.config.js'

/**
 * Класс для работы с Firebase API
 */
class FirebaseAPI {
  constructor(config = {}) {
    firebase.initializeApp(config)
  }

  async $createCollectionUser(user) {
    const {uid, email} = user
    try {
      await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            uid,
            email,
            createdAt: Date.now().toString(),
            login: email.split('@')[0],
            name: email.split('@')[0],
            photo: ''
          })
    } catch (error) {
      console.error(`Ошибка в методе createCollectionRecord()\n\n${error.message}`)
    }
  }

  /**
   * Метод для регистрации нового пользователя
   * @param {string} email Email
   * @param {string} password Пароль
   */
  async signUp(email, password) {
    try {
      const {user} = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
      this.$createCollectionUser(user)
      return user
    } catch (error) {
      console.error(`Ошибка в методе signUp()\n\n${error.message}`)
      return false
    }
  }

  /**
   * Метод для входа пользователя в систему
   * @param {string} email Email
   * @param {string} password Пароль
   */
  async signIn(email, password) {
    try {
      const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
      return response
    } catch (error) {
      console.error(`Ошибка в методе signIn()\n\n${error.message}`)
      return false
    }
  }

  async signOut() {
    try {
      await firebase
          .auth()
          .signOut()
      return true
    } catch (error) {
      console.error(`Ошибка в методе signOut()\n\n${error.message}`)
      return false
    }
  }

  /**
   * Метод для получения ленты пользователя
   */
  async getFeed() {
    try {
      const response = await firebase
          .firestore()
          .collection('posts')
          .get()

      const data = response.docs.map(post => ({...post.data()}))
      return data
    } catch (error) {
      console.error(`Ошибка в методе getFeed()\n\n${error.message}`)
      return false
    }
  }
}

export const $api = new FirebaseAPI(firebaseConfig)
