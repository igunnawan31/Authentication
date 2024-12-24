import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) =>  {
    return (
        <View style={styles.container}>
            <TextInput
                value = {value}
                onChangeText={setValue} 
                placeholder={placeholder} 
                style={styles.input} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,

        justifyContent: 'center',

        borderColor: '#AFAFAF',
        borderWidth: 1, 
        borderRadius: 5,

        marginVertical: 10,
        paddingHorizontal: 10,
    },
    input: {},
})

export default CustomInput
