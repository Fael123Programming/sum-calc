import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';
import NumberInput from './NumberInput';

function Sum() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [res, setRes] = useState('<no value>');
    return (
        <View
            style={sumStyle.container}
        >
            <View style={sumStyle.innerContainerLeft}>
                <NumberInput
                    placeholder={'Number 1'}
                    value={number1}
                    onChangeText={setNumber1}
                />
                <Text style={sumStyle.symbol}>+</Text>
                <NumberInput
                    placeholder={'Number 2'}
                    value={number2}
                    onChangeText={setNumber2}
                />
            </View>
            <View style={sumStyle.innerContainerMid}>
                <Pressable
                    onPress={() => {
                            let resp = parseFloat(number1) + parseFloat(number2);
                            setRes(resp);
                        }
                    }
                >
                    <Text style={sumStyle.symbol}>=</Text>
                </Pressable>
            </View>
            <View style={sumStyle.innerContainerRight}>
                <Text>{res}</Text>
            </View>
        </View>
    );
}

const sumStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .4,
        flexDirection: 'row'
    },
    innerContainerLeft: {
        flex: .33,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainerMid: {
        flex: .33,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainerRight: {
        flex: .33,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    symbol: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    }
});

export default Sum;
