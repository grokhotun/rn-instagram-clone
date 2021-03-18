import React from 'react'
import {Provider} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {SignInScreen} from 'src/screens/SignInScreen'
import {SignUpScreen} from 'src/screens/SignUpScreen'
// import {FeedScreen} from 'src/screens/FeedScreen'
// import {ProfileScreen} from 'src/screens/ProfileScreen'
import store from 'src/redux'

const RootStack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name='SignIn'
            component={SignInScreen}
            options={{headerShown: false, animationEnabled: false}}/>
          <RootStack.Screen
            name='SignUp'
            component={SignUpScreen}
            options={{headerShown: false, animationEnabled: false}}/>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
