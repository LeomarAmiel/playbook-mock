import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => (
    <View style={[styles.header, props.styles]} {...props}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    header: {
        position: "relative",
        height: 100,
        backgroundColor: "white",
        borderColor: "gray",
        borderBottomWidth: 1,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowColor: "gray"
    }
});

export default Header;
