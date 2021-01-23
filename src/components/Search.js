import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { toUpper } from '../utils'
import Feather from 'react-native-vector-icons/Feather'

const width = Dimensions.get('window').width

const Search = ({ handleSearchInput }) => {


    return (
        <View style={styles.container}>
            <Feather name='search' size={24} color='#aaa' style={{ alignSelf: 'center', padding: 12 }} />
            <TextInput
                placeholder={"Cari nama, bank atau nominal"}
                style={styles.search}
                onChangeText={(text) => handleSearchInput(text)}
            />
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 4, }}
            >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: 'orange', fontSize: 16 }}>{toUpper("Urutkan ")}</Text>
                    <Feather name='chevron-down' size={26} color='orange' style={{ alignSelf: 'center' }} />
                </View>

            </TouchableOpacity>
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64,
        width: width - 20,
        borderColor: '#aaa',
        borderRadius: 4,
        backgroundColor: '#fff',
        margin: 10
    },
    search: {
        flex: 3,
    }
})