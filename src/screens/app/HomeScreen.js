import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyHeader from '../../components/MyHeader';

const HomeScreen = (props) => {

    return (
        <>
            <MyHeader title={'Home'} leftIcon={null} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Go to</Text>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => props.navigation.navigate('Transactions')}
                    >
                        <Text style={styles.btnLabel}>Transactions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey',
        marginVertical: 24
    },
    btnLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        height: 56,
        fontSize: 24,
        backgroundColor: 'green',
        width: Dimensions.get('window').width / 2,
        borderRadius: 8,
        justifyContent: 'center',
    }
})