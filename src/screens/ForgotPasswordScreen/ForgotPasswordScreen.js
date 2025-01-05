import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm();

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
                    name="username"
                    placeholder="Type your username"
                    control={control}
                    rules={{ 
                        required: "Username is required",
                        minLength: {
                            value: 3, 
                            message: 'Username should be minimum 3 characters long',
                        }
                    }}
                />

                <CustomButton 
                    text="Send Code"
                    onPress={handleSubmit(onSendCode)}
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