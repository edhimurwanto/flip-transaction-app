import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';

const OnboardingScreen = (props) => {

    const [loading, setLoading] = useState(true)

    const initUi = async () => {
        try {
            const value = await AsyncStorage.getItem('GetStarted')
            if (value !== null) {
                props.navigation.push('Home');
            } else {
                setLoading(false);
            }
        } catch (e) {
            console.log('Get data from storage failed.');
        }
    }

    const onGetStartedClicked = async () => {
        try {
            await AsyncStorage.setItem('GetStarted', "true");
            props.navigation.push('Home');
        } catch (e) {
            console.log('Saving to storage failed.');
        }
    }

    useEffect(() => {
        initUi()
    }, [])

    return (
        <>
            {
                loading ? <LoadingScreen /> :
                    <SafeAreaView style={styles.container}>
                        <Text>Welcome</Text>
                        <Button
                            title='Mulai'
                            onPress={onGetStartedClicked}
                        />
                    </SafeAreaView>
            }
        </>
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})