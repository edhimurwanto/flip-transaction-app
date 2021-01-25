import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ onStartBtnClicked }) => {

    const onGetStartedClicked = async () => {
        try {
            await AsyncStorage.setItem('GetStarted', "true");
            onStartBtnClicked();
        } catch (e) {
            console.log('Saving to storage failed.');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title}>Flip Transactions App</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={onGetStartedClicked}>
                    <Text style={styles.btnLabel}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey'
    },
    btnLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    btnContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        height: 66,
        fontSize: 24,
        backgroundColor: 'green',
        width: Dimensions.get('window').width / 3,
        borderRadius: 8,
        justifyContent: 'center'
    }
})