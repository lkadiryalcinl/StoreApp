import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

export default function(){
    return(
        <AnimatedLottieView source={require('../../assets/Error.json')} autoPlay/>
    );
};