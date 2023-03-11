import React from 'react'
import { Text,Image,View,ScrollView } from 'react-native'
import styles from './detailCard.style'

export default function({item}){

    return(
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image style={styles.img} source={{uri:item.image}}/>
            </View>
            <View style={styles.top_container}>
                <Text style={styles.h1}>{item.title}</Text>
                <Text style={styles.h2_1}>{item.price}₺</Text>
            </View>
            <ScrollView style={styles.desc_container}>
                <Text style={styles.h3}>{item.description}</Text>
            </ScrollView>
            <View style={styles.bottom_container}>
                <Text style={styles.h2}>{item.category}</Text>
                <Text style={styles.h2}>this item {item.rating.count} times rated and rate is {item.rating.rate} / 5</Text>
            </View>
        </View>
    );
};