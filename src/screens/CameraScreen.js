import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {Camera} from 'expo-camera'
import PropTypes from 'prop-types'
import {MaterialIcons} from '@expo/vector-icons'

import {Ionicons} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'

import Header from 'components/Header'
import Wrapper from 'src/ui/Wrapper'

function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null)
  const [camera, setCamera] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      navigation.navigate('Edit', {image: data.uri})
    }
  }

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <Wrapper style={styles.wrapper}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.body}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}/>
      </View>
      <View style={styles.footer}>
        <View style={styles.col}>
          <MaterialIcons
            onPress={flipCamera}
            style={{textAlign: 'center'}}
            name="flip-camera-android"
            size={40}
            color="black" />
        </View>
        <View style={styles.col}>
          <Ionicons
            onPress={takePicture}
            style={{textAlign: 'center'}}
            name="camera-outline"
            size={60}
            color="black" />
        </View>
        <View style={styles.col}>
          <Feather
            style={{textAlign: 'center'}}
            name="image"
            size={40}
            color="black" />
        </View>
      </View>
    </Wrapper>
  )
}

CameraScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
  },
  header: {
    height: 70
  },
  body: {
  },
  footer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fixedRatio: {
    aspectRatio: 1
  },
  col: {
    minWidth: '33%'
  }
})

export default CameraScreen
