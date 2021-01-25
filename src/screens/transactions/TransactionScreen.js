import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Modal, View } from 'react-native';
import RadioButton from '../../components/RadioButton';
import Search from '../../components/Search';
import CardTransaction from './CardTransactions';
import { getTransactions } from './TransactionService';
import { sortTrx } from '../../utils';
import { sortList } from '../../utils/constants'
import MyHeader from '../../components/MyHeader';

const TransactionScreen = (props) => {

    const [transactions, setTransactions] = useState([]);
    const [text, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(sortList);

    const handleSearchInput = (text) => {
        console.log(text);
        if (!text) {
            setText("");
        } else {
            setText(text);
        }
    }

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    }

    const handleSelectedSort = (item) => {
        const newSortOrder = sortBy.map(sort => {
            if (sort.label == item.label) {
                sort.isActive = true
            } else {
                sort.isActive = false
            }
            return sort;
        })
        setSortBy(newSortOrder);
        const sorted = sortTrx(transactions, item.desc);
        setTransactions(sorted)
        setModalVisible(false);

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
    }, [text, sortBy]);

    const renderItem = ({ item }) => <CardTransaction data={item} navigation={props.navigation} />

    const newTrx = text == "" ? transactions : transactions.filter(item => {
        const newText = text.toLowerCase();
        return `${item.sender_bank}`.toLowerCase().includes(newText) || `${item.amount}`.includes(newText) ||
            `${item.beneficiary_bank}`.toLowerCase().includes(newText) ||
            `${item.beneficiary_name}`.toLowerCase().includes(newText)
    })

    return (
        <>
            <MyHeader title={'Transactions'} leftIcon={null} />
            <View style={styles.container}>
                <Search
                    handleSearchInput={handleSearchInput}
                    handleSort={handleModalVisible} />
                <FlatList
                    data={newTrx}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ padding: 10 }}
                />

                <Modal
                    visible={modalVisible}
                    onDismiss={handleModalVisible}
                    transparent={true}
                    onRequestClose={handleModalVisible}
                    onMagicTap={handleModalVisible}
                    animationType={'fade'}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <RadioButton
                                data={sortBy}
                                styles={{ paddingVertical: 16 }}
                                selectedColor='orange'
                                unselectedColor='white'
                                handleSelectedSort={handleSelectedSort} />
                        </View>
                    </View>
                </Modal>
            </View>
        </>
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
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30, backgroundColor: 'white',
        borderRadius: 4
    },
})