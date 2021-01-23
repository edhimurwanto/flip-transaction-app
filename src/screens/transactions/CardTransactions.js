import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatIDR, toUpper, formatDate, formatBankName, flagColor, toPascalCase } from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons'
import MyButton from '../../components/MyButton';

const CardTransaction = (props) => {

    const { data } = props;
    const amount = data.amount ? formatIDR(`${data.amount}`, "Rp") : 0

    return (
        <View style={styles.container} key={data.id + data.account_number}>
            <View style={[styles.trxCardColor, { backgroundColor: flagColor(data.status) }]}></View>
            <View style={styles.dataContainer}>
                <View style={styles.inlineText}>
                    <Text style={styles.textBank}>{formatBankName(data.sender_bank)} </Text>
                    <Feather name='arrow-right' size={24} color='black' style={{ alignSelf: 'center', paddingHorizontal: 4 }} />
                    <Text style={styles.textBank}>{formatBankName(data.beneficiary_bank)}</Text>
                </View>
                <Text style={styles.textName}>{toUpper(data.beneficiary_name)}</Text>
                <View style={styles.inlineText}>
                    <Text style={styles.textName}>{amount}</Text>
                    <Octicons name='primitive-dot' size={22} color='black' style={{ alignSelf: 'center', paddingHorizontal: 8 }} />
                    <Text style={styles.textName}> {formatDate(data.created_at)}</Text>
                </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end', marginEnd: 15 }}>
                <MyButton label={data.status} color={flagColor(data.status)} />
            </View>
        </View>
    );
}

export default CardTransaction;

const styles = StyleSheet.create({
    container: {
        height: 124,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 8,
        marginBottom: 12
    },
    trxCardColor: {
        height: 124,
        width: 10,
        borderTopStartRadius: 8,
        borderBottomStartRadius: 8
    },
    dataContainer: {
        flex: 3,
        padding: 16,
        justifyContent: 'center'
    },
    inlineText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBank: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textName: {
        fontSize: 16,
    }
})