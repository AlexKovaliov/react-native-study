import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {UsersType} from "./api/users-api";
import {UsersList} from "./UsersList";


type PropsType = {
    users: Array<UsersType>
}

export const Users = React.memo((props: PropsType) => {
    return (
        <FlatList
            data={props.users}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
                <UsersList first_name={item.first_name}
                      last_name={item.last_name}
                      email={item.email}
                      avatar={item.avatar}
                />
            )}>
        </FlatList>
    );
})

const styles = StyleSheet.create({
    container: {},
});
