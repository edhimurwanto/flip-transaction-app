import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { toPascalCase } from '../utils';

const LeftIcon = ({ name }) => <Feather name={name} size={24} color='grey'/>

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
        justifyContent: 'center',
        shadowOpacity: 20
    },
    title: {
        marginStart: 12,
        fontSize: 16
    }
})