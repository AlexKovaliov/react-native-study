import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/task1/store';
import RequestUsers from './src/task1/RequestUsers';


export default function App() {

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RequestUsers/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
});
