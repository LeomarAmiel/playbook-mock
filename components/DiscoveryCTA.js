import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const DiscoveryCTA = () => (
    <View style={styles.container}>
        <Text style={styles.headingText}>
            Who do you want to see on Playbook?
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Suggestion</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(99, 120, 210)",
        marginHorizontal: 10,
        marginVertical: 20,
        height: 120,
        borderRadius: 20,
        padding: 22,
        justifyContent: "space-around",
        alignItems: "center"
    },
    headingText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center"
    },
    button: {
        backgroundColor: "rgb(99, 140, 240)",
        width: 200,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    }
});

export default DiscoveryCTA;
