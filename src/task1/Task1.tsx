import React from "react";
import {StyleSheet, View} from "react-native";
import {Navbar} from "./Navbar";

export function Task1() {
    return (
        <View style={styles.container}>
            <Navbar title={"Wonderful movies"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
