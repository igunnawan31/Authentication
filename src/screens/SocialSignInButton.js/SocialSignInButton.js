import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../component/CustomButton';

const SocialSignInButton = () => {
    const onSignInGooglePressed = () => {
        console.warn("onSignInGooglePressed");
    }

    const onSignInMicrosoftPressed = () => {
        console.warn("onSignInMicrosoftPressed");
    }
    
    const onSignInFacebookPressed = () => {
        console.warn("onSignInFacebookPressed");
    }

    return (
        <>
            <CustomButton 
                text="Sign In with Google"
                onPress={onSignInGooglePressed}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton 
                text="Sign In with Microsoft"
                onPress={onSignInMicrosoftPressed}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButton 
                text="Sign In with Facebook"
                onPress={onSignInFacebookPressed}
                bgColor="#E3E3E3"
                fgColor="#363636"
            />
        </>
    )
}

export default SocialSignInButton