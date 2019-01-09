import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = props => (
    <View style={[styles.card, props.styles]} {...props}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        height: 240,
        width: 240,
        margin: 10
    }
});

export default Card;