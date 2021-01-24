import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { formatBankName, formatDate, formatIDR, toUpper } from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import MyButton from '../../components/MyButton';
import { TransactionStatus } from '../../utils/constants';
import Clipboard from '@react-native-community/clipboard';
import Divider from '../../components/Divider';

const DetailTransactionScreen = (props) => {

    const { data } = props.route.params;

    const onClickedCopyIcon = () => {
        Clipboard.setString(data.id);
        ToastAndroid.show("ID TRANSAKSI Tersalin.", ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inlineText}>
                <Text style={[styles.loadingText, { marginRight: 24 }]}>{toUpper(`ID TRANSAKSI:  #${data.id}`)}</Text>
                <Feather name='copy' color='orange' size={24} onPress={onClickedCopyIcon} />
            </View>
            <Divider styles={styles.divider} />
            <View style={[styles.inlineText, { justifyContent: 'space-between' }]}>
                <Text style={styles.loadingText}>{toUpper(`Detail Transaksi`)}</Text>
                <MyButton label='TUTUP' color={TransactionStatus.PENDING} borderWidth={0} textClr='orange' onClick={() => props.navigation.goBack()} />
            </View>
            <Divider styles={styles.divider} />
            <View style={styles.inlineText}>
                <Text style={styles.textBank}>{formatBankName(data.sender_bank)} </Text>
                <Feather name='arrow-right' size={24} color='black' style={{ alignSelf: 'center', paddingHorizontal: 4 }} />
                <Text style={styles.textBank}>{formatBankName(data.beneficiary_bank)}</Text>
            </View>
            <View style={styles.detail}>
                <View style={[styles.verLine, { flex: 3 }]}>
                    <Text style={styles.loadingText}>{toUpper(data.beneficiary_name)}</Text>
                    <Text style={styles.textName}>{toUpper(data.account_number)}</Text>
                </View>
                <View style={[styles.verLine, { flex: 3 }]}>
                    <Text style={styles.loadingText}>{toUpper(`nominal`)}</Text>
                    <Text style={styles.textName}>{formatIDR(`${data.amount}`, "Rp")}</Text>
                </View>
            </View>
            <View style={styles.detail}>
                <View style={[styles.verLine, { flex: 3 }]}>
                    <Text style={styles.loadingText}>{toUpper(`Berita Transfer`)}</Text>
                    <Text style={styles.textName}>{toUpper(data.remark)}</Text>
                </View>
                <View style={[styles.verLine, { flex: 3 }]}>
                    <Text style={styles.loadingText}>{toUpper(`Kode Unik`)}</Text>
                    <Text style={styles.textName}>{toUpper(data.unique_code)}</Text>
                </View>
            </View>
            <View style={styles.verLine}>
                <Text style={styles.loadingText}>{toUpper(`Waktu Dibuat`)}</Text>
                <Text style={styles.textName}>{formatDate(data.created_at)}</Text>
            </View>
        </SafeAreaView>
    );
}

export default DetailTransactionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    loadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inlineText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    textBank: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    verLine: {
        alignItems: 'flex-start',
        padding: 16,
    },
    textName: {
        fontSize: 18,
        fontWeight: '900',
    },
    divider: {
        width: Dimensions.get('window').width - 24,
        height: 1,
        backgroundColor: '#aaa',
        marginVertical: 12
    },
})