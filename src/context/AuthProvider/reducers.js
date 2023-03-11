import AsyncStorage from '@react-native-async-storage/async-storage'

export default function reducers(state, action){
    const user = action.payload
    switch (action.type) {
        case 'SET_USER':
            AsyncStorage.setItem('@user',JSON.stringify(user))
            return {...state,user}
        case 'REMOVE_USER':
            AsyncStorage.setItem('@user',JSON.stringify(null));
            return {...state,user}
        default:
            return state;
    }
}