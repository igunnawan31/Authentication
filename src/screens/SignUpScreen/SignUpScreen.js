import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    }

    const onTermsPressed = () => {
        console.warn("onTermsPressed");
    }

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
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

    const onSignInPressed = () => {
        console.warn("onSignInPressed");
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