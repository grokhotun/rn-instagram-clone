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

  async $getCollectionUserByUid(uid) {
    try {
      const response = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get()

      console.log('User from DB', response.data())
      return response.data()
    } catch (error) {
      console.error(`Ошибка в методе getCollectionUser()\n\n${error.message}`)
    }
  }

  async $createCollectionUser(user) {
    const {uid, displayName, email, photoUrl} = user
    const userObject = {
      uid,
      createdAt: Date.now().toString(),
      email,
      login: email.split('@')[0],
      displayName: displayName || '',
      photoUrl: photoUrl || '',
      following: [],
      followers: []
    }
    try {
      await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set(userObject)

      return userObject
    } catch (error) {
      console.error(`Ошибка в методе createCollectionRecord()\n\n${error.message}`)
    }
  }

  currentUser() {
    return firebase.auth().currentUser
  }

  /**
   * Метод для создание записи поста в базе данных
   * @param {object} user Объект пользователя
   * @param {string} url Ссылка
   * @param {string} description Описание
   */
  async createCollectionPost(user, url, description) {
    const {uid, photoUrl, login} = user
    const postObject = {
      createdAt: Date.now().toString(),
      uid,
      login,
      avatar: photoUrl,
      image: url,
      description,
      likes: 0
    }
    try {
      await firebase
          .firestore()
          .collection('posts')
          .doc(uid)
          .set(postObject)
    } catch (error) {
      console.error(`Ошибка в методе createCollectionPost()\n\n${error.message}`)
    }
  }

  /**
   * Метод для регистрации нового пользователя
   * @param {string} email Email
   * @param {string} password Пароль
   */
  async signUp(email, password) {
    try {
      await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
      this.$createCollectionUser(this.currentUser())
      return this.currentUser()
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
      await firebase.auth().signInWithEmailAndPassword(email, password)
      const user = await this.$getCollectionUserByUid(this.currentUser().uid)
      return user
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
          .orderBy('createdAt', 'desc')
          .get()

      const data = response.docs.map(post => ({...post.data()}))
      return data
    } catch (error) {
      console.error(`Ошибка в методе getFeed()\n\n${error.message}`)
      return false
    }
  }

  /**
   * Метод для загрузки фотографий в firebase firestore
   * @param {object} user Объект пользователя
   * @param {object} file Объект File
   * @return {*} Возвращает объект task
   */
  uploadPhoto(user, file) {
    const {uid} = user
    const path = `posts/${uid}/${Math.random().toString(36)}`
    const task = firebase
        .storage()
        .ref()
        .child(path)
        .put(file)
    return task
  }
}

export const $api = new FirebaseAPI(firebaseConfig)
