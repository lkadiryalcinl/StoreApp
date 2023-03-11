import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:5,
        borderWidth:2,
        borderColor:'#1762DF',
        borderRadius:10
        
    },
    left_container:{
        flex:1,
        backgroundColor:'white',
        borderTopStartRadius:10,
        borderBottomStartRadius:10
    },
    right_container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#1762DF',
        padding:5
    },
    img:{
        width:Dimensions.get('screen').width/3,
        minHeight:Dimensions.get('screen').height/5,
        resizeMode: 'contain',
        alignSelf:'center',
    },
    title_text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },
    price_text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        textAlign:'right',
    }
})