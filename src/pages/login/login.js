import React from 'react'
import { Alert, View} from "react-native"
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import styles from './login.style'
import { Formik } from 'formik'
import Icon from 'react-native-vector-icons/AntDesign'
import usePost from '../../hooks/usePost'
import {useDispatch} from 'react-redux'


export default function(){
    const {data,loading,error,post} = usePost()
    const dispatch = useDispatch();

    function handeLogin(values) {
        post("https://fakestoreapi.com/auth/login",values)
    }

    if(error) {
        Alert.alert('Store',"Something went wrong!");
    }

    if(data){
        if(data.status === 'Error'){
            Alert.alert('Store',"Something went wrong!");    
        }
        else{
            dispatch({type:'SET_USER',payload:{user}})
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Icon name='shoppingcart' size={270} color='white'/>
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => handeLogin(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <TextInput
                            placeholder="Username..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <TextInput
                            placeholder="Password..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />

                        <Button text="Login" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const user =  {
    "address": {
      "geolocation": {
        "lat": "50.3467",
        "long": "-20.1310"
      },
      "city": "San Antonio",
      "street": "Hunters Creek Dr",
      "number": 6454,
      "zipcode": "98234-1734"
    },
    "id": 4,
    "email": "don@gmail.com",
    "username": "donero",
    "password": "ewedon",
    "name": {
      "firstname": "don",
      "lastname": "romer"
    },
    "phone": "1-765-789-6734",
    "__v": 0
};