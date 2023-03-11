import React from 'react'
import { Text,Image,TouchableWithoutFeedback,View } from 'react-native'
import styles from './productsCard.style'

export default function({item,onClick}){
    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.left_container}>
                    <Image style={styles.img} source={{uri:item.image}}/>
                </View>
                <View style={styles.right_container}>
                    <Text style={styles.title_text}>{item.title}</Text>
                    <Text style={styles.price_text}>{item.price}₺</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};