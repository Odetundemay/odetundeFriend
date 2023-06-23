import * as React from 'react'
import FeedScreen from '../screens/FeedScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreatePostScreen from '../components/CreatePostScreen/CreatePostScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UpdateProfileScreen from '../screens/UpdateProfileScreen'
import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={FeedScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate('Profile')}
                name='user'
                size={24}
                color='gray'
              />
            )
          })}
        />
        <Stack.Screen name='Create Post' component={CreatePostScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Update Profile' component={UpdateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
