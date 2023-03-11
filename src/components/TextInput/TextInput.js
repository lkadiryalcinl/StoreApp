import React from "react"
import { TextInput, View } from "react-native";
import styles from './TextInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ({ placeholder, value, onType, iconName,isSecure }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                placeholderTextColor={"black"}
                secureTextEntry={isSecure}
            />
            <Icon name={iconName} size={20} color="gray" />
        </View>
    )
}
