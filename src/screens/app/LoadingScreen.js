import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const LoadingScreen = () => {
    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.loadingText}>Loading. . .</Text>
        </SafeAreaView>
     );
}
 
export default LoadingScreen;

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