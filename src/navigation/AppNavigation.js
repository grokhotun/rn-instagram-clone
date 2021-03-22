import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'

import {Avatar} from 'src/components/Avatar'

import SignInScreen from 'src/screens/SignInScreen'
import SignUpScreen from 'src/screens/SignUpScreen'
import FeedScreen from 'src/screens/FeedScreen'
// import {SearchScreen} from 'src/screens/SearchScreen'
import ProfileScreen from 'src/screens/ProfileScreen'
import CameraScreen from 'src/screens/CameraScreen'
import EditScreen from 'src/screens/EditScreen'

const AuthStack = createStackNavigator()
const CameraStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function authStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{headerShown: false, animationEnabled: false}}/>
      <AuthStack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{headerShown: false, animationEnabled: false}}/>
    </AuthStack.Navigator>
  )
}

function cameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name='Camera'
        component={CameraScreen}
        options={{headerShown: false, animationEnabled: false}}/>
      <CameraStack.Screen
        name='Edit'
        component={EditScreen}
        options={{
          title: 'Редактирование',
          animationEnabled: false
        }}/>
    </CameraStack.Navigator>
  )
}

function homeStackScreen() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false
      }}>
      <Tabs.Screen
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => <Ionicons style={{textAlign: 'center'}} name='home' size={24} color='black' />
        }}
        name='Feed'
        component={FeedScreen} />
      <Tabs.Screen
        options={{
          unmountOnBlur: true,
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => <Entypo style={{textAlign: 'center'}} name='camera' size={24} color='black' />
        }}
        name='Search'
        component={cameraStackScreen}/>
      <Tabs.Screen
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => <Avatar/>
        }}
        name='Profile'
        component={ProfileScreen}/>
    </Tabs.Navigator>
  )
}

function AppNavigation({currentUser}) {
  return (
    <NavigationContainer>
      {
        !currentUser
          ? authStackScreen()
          : homeStackScreen()
      }
    </NavigationContainer>
  )
}

AppNavigation.propTypes = {
  currentUser: PropTypes.object || PropTypes.bool
}

const mapStateToProps = ({userState}) => ({
  currentUser: userState.currentUser
})


export default connect(mapStateToProps, null)(AppNavigation)
