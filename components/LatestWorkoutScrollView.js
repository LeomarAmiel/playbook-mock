import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "./Card";

const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const LatestWorkoutScrollView = props => (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {box.map(value => (
            <Card
                key={value}
                styles={{
                    ...styles.card,
                    height: 260,
                    width: 120,
                    alignItems: "flex-start"
                }}
            >
                <View
                    style={{
                        margin: 10,
                        backgroundColor: "rgb(99, 120, 210)"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: "600",
                            color: "white",
                            padding: 4
                        }}
                    >
                        10h ago
                    </Text>
                </View>
                <View
                    style={[
                        styles.cardDescriptions,
                        styles.latestWorkoutDescription
                    ]}
                >
                    <Text
                        style={{
                            width: "100%"
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        Work out the kink in ...
                    </Text>
                </View>
            </Card>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    headerText: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: "center",
        shadowColor: "white",
        borderColor: "white",
        textShadowColor: "white",
        fontSize: 16
    },
    card: {
        backgroundColor: "gray",
        borderRadius: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    cardDescriptions: {
        backgroundColor: "white",
        width: "100%",
        shadowColor: "gray",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            height: 1
        },
        paddingHorizontal: 20
    },
    latestWorkoutDescription: {
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default LatestWorkoutScrollView;
