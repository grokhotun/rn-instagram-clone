import React from 'react'
import {Provider} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {SignInScreen} from 'src/screens/SignInScreen'
// import {FeedScreen} from 'src/screens/FeedScreen'
import {ProfileScreen} from 'src/screens/ProfileScreen'
import store from 'src/redux'

const RootStack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name='SignIn' component={SignInScreen} options={{headerShown: false}} />
          <RootStack.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
