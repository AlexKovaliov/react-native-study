import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/task1/store';
import UsersScreen from './src/task1/components/UsersScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {PersonScreen} from './src/task1/components/PersonScreen';


const Stack = createStackNavigator()
export default function App({navigation}: any) {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Users'>
                    <Stack.Screen name='Users'
                                  component={UsersScreen}
                                  options={{
                                      title: 'Users',
                                      headerStyle: {backgroundColor: '#3949ab'},
                                      headerTintColor: '#fff'
                                  }}/>
                    <Stack.Screen name='Person'
                                  component={PersonScreen}
                                  options={{
                                      title: 'Person Room',
                                      headerStyle: {backgroundColor: '#3949ab'},
                                      headerTintColor: '#fff',
                                  }}/>
                </Stack.Navigator>
            </NavigationContainer>
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
