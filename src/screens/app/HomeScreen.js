import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';


const HomeScreen = (props) => {
    return ( 
        <SafeAreaView style={styles.container}>
            <Text>Welcome</Text>
            <Button title='Transactions'
            onPress={() => props.navigation.navigate('Transactions')}
            />
        </SafeAreaView>
     );
}
 
export default HomeScreen;

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