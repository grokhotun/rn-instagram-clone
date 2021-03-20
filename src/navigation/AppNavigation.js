import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'

import {Avatar} from 'src/components/Avatar'

import SignInScreen from 'src/screens/SignInScreen'
import {SignUpScreen} from 'src/screens/SignUpScreen'
import FeedScreen from 'src/screens/FeedScreen'
import {SearchScreen} from 'src/screens/SearchScreen'
import {ProfileScreen} from 'src/screens/ProfileScreen'

const RootStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function AppNavigation({currentUser}) {
  return (
    <NavigationContainer>
      {
        !currentUser? (
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
        ) : (
            <Tabs.Navigator tabBarOptions={{showLabel: false}}>
              <Tabs.Screen
                options={{
                  // eslint-disable-next-line react/display-name
                  tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }}
                name='Feed'
                component={FeedScreen} />
              <Tabs.Screen
                options={{
                  // eslint-disable-next-line react/display-name
                  tabBarIcon: () => <Ionicons name="search" size={24} color="black" />
                }}
                name='Search'
                component={SearchScreen}/>
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
    </NavigationContainer>
  )
}

AppNavigation.propTypes = {
  currentUser: PropTypes.object
}

const mapStateToProps = ({userState}) => ({
  currentUser: userState.currentUser
})


export default connect(mapStateToProps, null)(AppNavigation)
