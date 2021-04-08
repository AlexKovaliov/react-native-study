import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

type UserType = {
    first_name: string
    last_name: string
    avatar: string
    email: string
}

export const UsersList = React.memo(({first_name, last_name, avatar, email}: UserType) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: avatar}}/>
            <Text style={styles.text}>{first_name} {last_name}</Text>
            <Text style={styles.email}>Email: {email}</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    image: {
        height: 200,
        width: 200,
    },
    text: {
        fontSize: 20
    },
    email: {
        fontSize: 16,
        marginBottom: 30
    }
});
