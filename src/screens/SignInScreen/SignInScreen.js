import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from '../../../assets/images/Logo_Bean.png';
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import SocialSignInButton from "../SocialSignInButton.js";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign In");
        // validate user

        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");

        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");

        navigation.navigate('SignUp');
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

                <SocialSignInButton />

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