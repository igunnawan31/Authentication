import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendCode = () => {
        console.warn("onSendCode");

        navigation.navigate("NewPassword");
    }

    const onBackToSignInPressed = () => {
        console.warn("onBackToSignInPressed");

        navigation.navigate("SignIn");
    }
    
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>

                <CustomInput 
                    placeholder="Type your username"
                    value={username}
                    setValue={setUsername}
                />

                <CustomButton 
                    text="Send Code"
                    onPress={onSendCode}
                />

                <CustomButton 
                    text="Back to Sign In Page"
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
        marginVertical: '10%'
    }
})

export default ForgotPasswordScreen