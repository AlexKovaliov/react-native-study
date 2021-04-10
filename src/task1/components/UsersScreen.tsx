import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UsersType} from '../api/users-api';
import {AppRootStateType} from '../store';
import {Users} from "./Users";
import {getUsersThunkCreator} from "../reducers/users-reducer";
import {RequestStatusType} from "../reducers/app-reducer";


export default function UsersScreen() {

    const users = useSelector<AppRootStateType, Array<UsersType>>(state => state.user)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunkCreator())
    }, [])

    return (
        <View style={styles.container}>
            {status === 'loading' && <ActivityIndicator size="large"/>}
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
