import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Search from '../../components/Search';
import CardTransaction from './CardTransactions';
import { getTransactions } from './TransactionService';

const TransactionScreen = () => {

    const [transactions, setTransactions] = useState([]);
    const [text, setText] = useState("");

    const handleSearchInput = (text) => {
        if (!text) {
            setText("");
        } else {
            setText(text);
        }
    }

    const fetchData = () => {
        // this condition cause the data is changing everytime hit to API
        if (transactions.length == 0) {
            getTransactions().then(resp => {
                setTransactions(Object.values(resp));
            })
        }
    }

    useEffect(() => {
        fetchData();
    }, [text])

    const renderItem = ({ item }) => <CardTransaction data={item} />

    const newTrx = text == "" ? transactions : transactions.filter(item => {
        return item.sender_bank.includes(text) || `${item.amount}`.includes(text) || `${item.beneficiary_bank}`.toLowerCase().includes(text) || `${item.beneficiary_name}`.toLowerCase().includes(text)
    })

    return (
        <SafeAreaView style={styles.container}>
            <Search handleSearchInput={handleSearchInput} />
            <FlatList
                data={newTrx}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ padding: 10 }}
            />
        </SafeAreaView>
    );
}

export default TransactionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})