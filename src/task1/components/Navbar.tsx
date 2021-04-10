import React from "react";
import {StyleSheet, Text, View} from "react-native";


export const Navbar = React.memo((props: { title: string }) => {


    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        width: '100%',
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#3949ab",
        paddingBottom: 10
    },
    text: {
        color: "#fff",
        fontSize: 20
    }
});
