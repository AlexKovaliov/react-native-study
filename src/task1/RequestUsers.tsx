import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UsersType} from './api/users-api';
import {AppRootStateType} from './store';
import {Users} from "./Users";
import {getUsersThunkCreator} from "./users-reducer";
import {Navbar} from "./Navbar";

export default function RequestUsers() {

    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator())
    }, [])

    return (
        <View style={styles.container}>
            <Navbar title={"Users"}/>
            <Users users={users}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
