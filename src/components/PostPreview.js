import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Img from 'src/ui/Img'

function PostPreview({style, img}) {
  return (
    <View style={{...stlyes.default, ...style}}>
      <Img source={img}/>
    </View>
  )
}

PostPreview.propTypes = {
  style: PropTypes.object,
  img: PropTypes.string
}

const stlyes = StyleSheet.create({
  default: {
    width: '100%',
    height: '100%',
  }
})

export default PostPreview
