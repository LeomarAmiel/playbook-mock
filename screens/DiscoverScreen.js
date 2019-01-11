import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import {
    PartnersScrollView,
    ProgramsScrollView,
    LatestWorkoutScrollView,
    DiscoveryCTA
} from "../components";
export default class DiscoverScreen extends React.Component {
    static navigationOptions = {
        title: "Discover"
    };

    render() {
        return (
            <SectionList
                style={styles.container}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.categoryHeaderContainer}>
                        <Text style={styles.categoryHeaderText}>{title}</Text>
                    </View>
                )}
                renderItem={({ item }) => {
                    switch (item) {
                        case "PARTNERS":
                            return <PartnersScrollView />;
                        case "PROGRAMS":
                            return <ProgramsScrollView />;
                        case "LATEST WORKOUTS":
                            return <LatestWorkoutScrollView />;
                        case "CTA":
                            return <DiscoveryCTA />;
                        default:
                            return <PartnersScrollView />;
                    }
                }}
                sections={[
                    { title: "PARTNERS", data: ["PARTNERS"] },
                    { title: "PROGRAMS", data: ["PROGRAMS"] },
                    { title: "LATEST WORKOUTS", data: ["LATEST WORKOUTS"] },
                    { data: ["CTA"] }
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#fff",
        marginHorizontal: 10
    },
    categoryHeaderContainer: {
        backgroundColor: "white"
    },
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
    categoryHeaderText: {
        padding: 10,
        fontWeight: "600",
        color: "gray"
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
    partnerDescriptions: {
        height: 40
    },
    programDescription: {
        height: 50,
        justifyContent: "center"
    },
    latestWorkoutDescription: {
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});
