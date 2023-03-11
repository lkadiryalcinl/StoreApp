import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './pages/home';
import detail from './pages/detail';
import login from './pages/login';
import {useSelector,useDispatch} from 'react-redux'
import Loading from './components/Loading/loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function(){
  const userSession = useSelector(s=>s.user)
  const isAuthLoading = useSelector(s=>s.isAuthLoading)
  const dispatch = useDispatch()
  return (
    <NavigationContainer>
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={login}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>)
          :
          (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={home}
                options={{
                  title: "Shopping Mall",
                  headerStyle: { backgroundColor: "#1762DF" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white",
                  headerRight: () => (
                    <Icon name="logout" size={30} color="white" onPress={() => dispatch({ type: "REMOVE_USER" })} />
                  )
                }} />
              <Stack.Screen
                name="Detail"
                component={detail}
                options={{
                  title: "Detay",
                  headerStyle: { backgroundColor: "#1762DF" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white"
                }}
              />

            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  );
};

