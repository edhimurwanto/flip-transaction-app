import React from 'react';
import { View, Text } from "react-native";
import { toPascalCase } from '../utils';
import { TransactionStatus } from '../utils/constants';

const MyButton = ({ label, color }) => {

    const textLabel = label === TransactionStatus.SUCCESS ? toPascalCase("Berhasil") : label === TransactionStatus.PENDING ? toPascalCase("Pengecekan") : toPascalCase("Gagal")

    return (
        <View style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: color,
            borderRadius: 4,
            paddingHorizontal: 8,
            backgroundColor: label === TransactionStatus.SUCCESS ? 'green' : null,
        }}>
            <Text style={{
                fontWeight: 'bold',
                color: label === TransactionStatus.SUCCESS ? 'white' : 'black',
            }}>{textLabel}</Text>
        </View>
    )
}

export default MyButton;