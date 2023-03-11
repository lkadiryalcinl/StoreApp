import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1762DF"
    },
    logo_container: {
        width:Dimensions.get('screen').width*0.9,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf:'center'
    },
    body_container: {
        flex: 1,

    },
})