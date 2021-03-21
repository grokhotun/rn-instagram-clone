import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
// import {StackActions} from '@react-navigation/native'

import Wrapper from 'src/ui/Wrapper'
import Img from 'src/ui/Img'
import {Btn} from 'src/ui/Btn'
import {Input} from 'src/ui/Input'
import PropTypes from 'prop-types'

import {createImageBlob} from 'src/utils'
import {uploadPhoto} from 'src/redux/actions/upload'
import {connect} from 'react-redux'
function EditScreen({navigation, route, sendPhoto}) {
  const [description, setDescription] = useState('')

  const sendHandler = async () => {
    const imageUri = route.params.image
    const blob = await createImageBlob(imageUri)
    sendPhoto({}, blob)
    navigation.navigate('Feed')
  }

  return (
    <Wrapper style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.image}>
          <Img
            source={route.params.image}
            objectFit='contain'
          />
        </View>
        <View style={styles.description}>
          <Input
            value={description}
            multiline={true}
            numberOfLines={8}
            textAlignVertical='top'
            style={styles.input}
            placeholder='Описание'
          />
        </View>
      </View>
      <View style={styles.row}>
        <Btn onPress={sendHandler}>Отправить</Btn>
      </View>
    </Wrapper>
  )
}

EditScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  sendPhoto: PropTypes.func
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5
  },
  description: {
    flex: 1
  }
})

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  sendPhoto: (user, photo) => dispatch(uploadPhoto(user, photo))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen)
