import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from '../../../assets/images/Logo_Bean.png';
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn("Sign In");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignInGooglePressed = () => {
        console.warn("onSignInGooglePressed");
    }

    const onSignInMicrosoftPressed = () => {
        console.warn("onSignInMicrosoftPressed");
    }
    
    const onSignInFacebookPressed = () => {
        console.warn("onSignInFacebookPressed");
    }

    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3 }]} 
                    resizeMode="contain" 
                /> 

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton 
                    text="Sign In"
                    onPress={onSignInPressed}
                />

                <CustomButton 
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="tertiary"
                />

                <Text style>Or</Text>
                
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

                <CustomButton 
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type="tertiary"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    logo: {
        marginVertical: '20%',
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen;