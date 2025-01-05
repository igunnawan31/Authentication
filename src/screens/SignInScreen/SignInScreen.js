import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from "react-native";
import Logo from '../../../assets/images/Logo_Bean.png';
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import SocialSignInButton from "../SocialSignInButton.js";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {
        control, 
        handleSubmit, 
        formState: {errors},
    } = useForm();

    console.log(errors);

    const onSignInPressed = (data) => {
        console.log(data);
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
                    name="username"
                    placeholder="Username" 
                    control={control}
                    rules={{
                        required: 'Username is required', 
                        minLength: {
                            value: 3, 
                            message: 'Username should be minimum 3 characters long',
                        }
                    }}
                />

                <CustomInput 
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3, 
                            message: 'Password should be minimum 3 characters long',
                        } 
                    }}
                />

                {/* <Controller 
                    control={control}
                    name="username"
                    render={({field: {value, onChange, onBlur}}) => (
                        <TextInput 
                            value={value} 
                            onChangeText={onChange} 
                            onBlur={onBlur} 
                            placeholder={'username'}
                        />
                    )}
                /> */}

                {/* Controller didalam view */}

                <CustomButton 
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
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