import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
    const [confirmationcode, setConfirmationCode] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const navigation = useNavigation();

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
                    placeholder="Enter your confirmation code"
                    value={confirmationcode}
                    setValue={setConfirmationCode}
                />

                <CustomInput 
                    placeholder="Enter your new password"
                    value={newpassword}
                    setValue={setNewPassword}
                />

                <CustomButton 
                    text="Submit"
                    onPress={onSubmitPressed}
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