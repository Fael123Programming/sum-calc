import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';


function NumberInput({placeholder, number, onChangeText}) {
    return (
        <TextInput
            keyboardType={'number-pad'}
            style={numberInputStyle.numberInput}
            placeholder={placeholder}
            value={number}
            onChangeText={onChangeText}
        />
    );
}

const numberInputStyle = StyleSheet.create({
    numberInput: {
        width: 100,
        fontSize: 16,
        padding: 10,
        height: 40,
        color: 'black',
        borderWidth: 1,
        textAlign: 'center'
    }
});

export default NumberInput;
