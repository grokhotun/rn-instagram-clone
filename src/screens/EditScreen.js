import React from 'react'
import {StyleSheet, View} from 'react-native'

import Wrapper from 'src/ui/Wrapper'
import Img from 'src/ui/Img'
import {Btn} from 'src/ui/Btn'
import {Input} from 'src/ui/Input'
import PropTypes from 'prop-types'

function EditScreen({route}) {
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
            multiline={true}
            numberOfLines={8}
            textAlignVertical='top'
            style={styles.input}
            placeholder='Описание'
          />
        </View>
      </View>
      <View style={styles.row}>
        <Btn>Отправить</Btn>
      </View>
    </Wrapper>
  )
}

EditScreen.propTypes = {
  route: PropTypes.object
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

export default EditScreen
