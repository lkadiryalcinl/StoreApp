import React from "react"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"
import styles from "./Button.style"

export default function({ text, onPress, loading }){
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
            {
                loading ?
                   ( <ActivityIndicator color="white" />)
                    : (<Text style={styles.title}>{text}</Text>)
            }

        </TouchableOpacity>
    )
}
