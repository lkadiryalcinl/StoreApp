import React,{useEffect,useState} from 'react'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import reducers from './reducers'

export default function({children}){
    const [user,setUser] = useState(null)
    const [isAuthLoading,setAuthLoading] = useState(true)

    useEffect(()=>{
        AsyncStorage.getItem('@user').then(userSessions => {
            userSessions && setUser(JSON.parse(userSessions))
            setAuthLoading(false)
        });
    },[])
    
    const store = createStore(reducers,{user,isAuthLoading})
    return <Provider store={store}>{children}</Provider>;
}