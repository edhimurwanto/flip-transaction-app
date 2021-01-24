import React from 'react';
import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { toPascalCase } from '../utils';
import { TransactionStatus } from '../utils/constants';

const MyButton = ({ label, color, borderWidth, textClr, onClick }) => {

    const textLabel = label === TransactionStatus.SUCCESS ? toPascalCase("Berhasil") : label === TransactionStatus.PENDING ? toPascalCase("Pengecekan") : label === TransactionStatus.FAILED ? toPascalCase("Gagal") : label;
    const bgColor = label === TransactionStatus.SUCCESS ? 'green' : null;
    const textColor = textClr ? textClr : label === TransactionStatus.SUCCESS ? 'white' : 'black';

    return (
        <TouchableOpacity onPress={onClick}>
            <View style={{
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: borderWidth,
                borderColor: color,
                borderRadius: 4,
                paddingHorizontal: 8,
                backgroundColor: bgColor
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: textColor
                }}>{textLabel}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyButton;