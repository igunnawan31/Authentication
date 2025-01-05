import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';
import { measure } from 'react-native-reanimated';

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    
    const {
        control,
        handleSubmit,
        watch,
    } = useForm();

    const confpwd = watch('newpassword');

    const onSubmitPressed = () => {
        console.warn("onSubmitPressed");

        navigation.navigate("Home");
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
                    name="confirmationcode"
                    placeholder="Enter your confirmation code"
                    control={control}
                    rules={{ 
                        required: 'Confirmation Code is required',
                        minLength: {
                            value: 4,
                            message: 'Confirmation Code must be 4 characters long'
                        },
                        maxLength: {
                            value: 4,
                            message: 'Confirmation Code must be 4 characters long'
                        },
                    }}
                />

                <CustomInput 
                    name="newpassword"
                    placeholder="Enter your new password"
                    control={control}
                    rules={{ 
                        required: "New Password is required",
                        minLength: {
                            value: 8,
                            message: "New Password must be 8 characters long"
                        },
                        maxLength: {
                            value: 40,
                            message: "New Password can't be more then 40 characters long"
                        },
                    }}
                />

                <CustomInput 
                    name="confirmationnewpassword"
                    placeholder="Enter your new password"
                    control={control}
                    rules={{ 
                        required: "New Password is required",
                        minLength: {
                            value: 8,
                            message: "New Password must be 8 characters long"
                        },
                        maxLength: {
                            value: 40,
                            message: "New Password can't be more then 40 characters long"
                        },
                        validate:
                            value => value === confpwd || "Password do not match",
                    }}
                />

                <CustomButton 
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen