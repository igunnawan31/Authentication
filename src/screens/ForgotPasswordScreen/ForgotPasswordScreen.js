import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

const ForgotPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onResetPasswordPressed = () => {
        console.warn("onResetPasswordPressed");
    }

    const onBackToSignInPressed = () => {
        console.warn("onBackToSignInPressed");
    }
    
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>

                <CustomInput 
                    placeholder="Type your code"
                    value={code}
                    setValue={setCode}
                />

                <CustomInput 
                    placeholder="Type your new password"
                    value={newPassword}
                    setValue={setNewPassword}
                />

                <CustomButton 
                    text="Set New Password"
                    onPress={onResetPasswordPressed}
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