import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import SocialSignInButton from '../SocialSignInButton.js/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onResentPressed = () => {
        console.warn("onResentPressed");
    }

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");

        navigation.navigate("Home");
    }

    const onBackToSignInPressed = () => {
        console.warn("onBackToSignInPressed");

        navigation.navigate("SignIn");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Sign Up</Text>

                <CustomInput 
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton 
                    text="Confirm"
                    onPress={onConfirmPressed}
                />

                <CustomButton 
                    text="Resent Code"
                    onPress={onResentPressed}
                    type="secondary"
                />

                <CustomButton 
                    text="Back to Sign In"
                    onPress={onBackToSignInPressed}
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

export default ConfirmEmailScreen