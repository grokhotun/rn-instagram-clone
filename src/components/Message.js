import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import {COLORS} from 'src/themes'

function Message({type = 'success', message = 'Сообщение по дефолту'}) {
  const messageColor = type === 'success' ? {color: COLORS.SUCCESS} : {color: COLORS.DANGER}
  return (
    <View style={styles.message}>
      <Text style={{...styles.messageText, ...messageColor}}>{message}</Text>
    </View>
  )
}

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
}

const styles = StyleSheet.create({
  message: {
    padding: 5
  },
  messageText: {}
})

export default Message
