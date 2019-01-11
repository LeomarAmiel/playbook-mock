import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Card } from "../components";

export default class PartnerScreen extends React.Component {
    static navigationOptions = {
        title: "Your Partner"
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
                 * content, we just wanted to provide you with some helpful links */}
                <Text style={styles.headerText}>Welcome</Text>
                <Text style={styles.secondaryHeaderText}>
                    Discover your partner in health and start training today
                </Text>
                <View style={styles.cardContainer}>
                    <Card styles={styles.card}>
                    <Ionicons />
                        <Text style={styles.cardText}>Your first 7 days are free</Text>
                    </Card>
                    <Card styles={styles.card}>
                        <Text style={styles.cardText}>Fresh weekly content & insights</Text>
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontWeight: "700",
        fontSize: 26,
        paddingVertical: 20
    },
    secondaryHeaderText: {
        fontSize: 20,
        paddingVertical: 10,
        textAlign: "center"
    },
    cardContainer: {
        flexDirection: "row"
    },
    card: {
        backgroundColor: "rgba(234, 234, 234, .8)",
        width: 150,
        height: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    cardText: {
      textAlign: "center"
    }
});
