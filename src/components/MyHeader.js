import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { toPascalCase } from '../utils';

const LeftIcon = ({ name }) => <Feather name={name} size={24} color='grey' />

const MyHeader = ({ title, leftIcon, onClickedIcon }) => (
    <SafeAreaView style={styles.container}>
        <LeftIcon name={leftIcon} />
        <Text style={styles.title}>{toPascalCase(title)}</Text>
    </SafeAreaView>
)

export default MyHeader;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    title: {
        marginStart: 12,
        fontSize: 18,
        fontWeight: 'bold'
    }
})