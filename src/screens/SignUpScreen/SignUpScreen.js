import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import SocialSignInButton from '../SocialSignInButton.js/SocialSignInButton';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const SignUpScreen = () => {
    const navigation = useNavigation();

    const {
        control, 
        handleSubmit,
        watch,
    } = useForm();

    // const {
    //     control, 
    //     handleSubmit,
    //     watch,
    // } = useForm({defaultValues: {
    //     username: "Default Username",
    // }});

    // DefaultValues used for debugging

    const pwd = watch('password');

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
                    name="username"
                    placeholder="Type your username"
                    control={control}
                    rules={{
                        required: 'Username is required', 
                        minLength: {
                            value: 3, 
                            message: 'Username should be minimum 3 characters long',
                        },
                        maxLength: {
                            value: 20,
                            message: 'Username cannot be more than 20 characters',
                        }
                    }}
                />

                <CustomInput 
                    name="email"
                    placeholder="Type your email"
                    control={control}
                    rules={{
                        required: 'Email is required', 
                        pattern: {
                            value: EMAIL_REGEX, 
                            message: 'Email is not valid'},
                    }}
                />

                <CustomInput 
                    name="password"
                    placeholder="Type your password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required', 
                        minLength: {
                            value: 8, 
                            message: 'Password should be minimum 8 characters long',
                        },
                        maxLength: {
                            value: 40,
                            message: 'Username cannot be more than 40 characters',
                        }
                    }}
                />

                <CustomInput 
                    name="confirmation-password"
                    placeholder="Confirm your password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Confirmation Password is required', 
                        minLength: {
                            value: 3, 
                            message: 'Confirmation Password should be minimum 3 characters long',
                        },
                        validate: 
                            value => value === pwd || 'Password do not match',
                    }}
                />

                <CustomButton 
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
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