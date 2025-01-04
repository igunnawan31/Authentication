import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import SocialSignInButton from '../SocialSignInButton.js/SocialSignInButton';
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");

        navigation.navigate("ConfirmEmail");
    }

    const onTermsPressed = () => {
        console.warn("onTermsPressed");

        navigation.navigate("");
    }

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");

        navigation.navigate("");
    }

    const onSignInPressed = () => {
        console.warn("onSignInPressed");

        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create Your Account</Text>

                <CustomInput 
                    placeholder="Type your username"
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Type your email"
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput 
                    placeholder="Type your password"
                    value={password}
                    setValue={setPassword}
                />

                <CustomInput 
                    placeholder="Confirm your password"
                    value={confirmpassword}
                    setValue={setConfirmPassword}
                />

                <CustomButton 
                    text="Register"
                    onPress={onRegisterPressed}
                />

                <Text style={styles.terms_privacy}>
                    By registering, you agree to our 
                    <Text style={styles.terms} onPress={onTermsPressed}> Terms of Service</Text> and <Text style={styles.privacy} onPress={onPrivacyPressed}>Privacy Policy</Text>.
                </Text>

                <SocialSignInButton />

                <CustomButton 
                    text="Have an Account? Sign In Here"
                    onPress={onSignInPressed}
                    type="tertiary"
                />
            </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    title: {
        color: '#A62E33',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: '10%',
    },
    terms_privacy: {
        width: '100%',
        color: 'gray',
        textAlign: 'justify',
        marginTop: 5,
    },
    terms: {
        color: 'orange'
    },
    privacy: {
        color: 'orange'
    },
})

export default SignUpScreen