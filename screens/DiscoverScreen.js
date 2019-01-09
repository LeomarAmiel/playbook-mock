import React from "react";
import {
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { Card, Header } from "../components";

const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default class DiscoverScreen extends React.Component {
    static navigationOptions = {
        title: "Discover"
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.categoryHeaderText}>PARTNERS</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {box.map(value => (
                            <Card key={value} styles={styles.card}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        height: 40,
                                        width: "100%",
                                        shadowOpacity: 1.0,
                                        shadowColor: "gray",
                                        borderBottomLeftRadius: 5,
                                        borderBottomRightRadius: 5,
                                        shadowOffset: {
                                            height: 1
                                        },
                                        paddingHorizontal: 20
                                    }}
                                >
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{ paddingHorizontal: 10 }}>
                                            FUNCTIONAL
                                        </Text>
                                        <Text style={{ paddingHorizontal: 10 }}>
                                            ATHLETIC
                                        </Text>
                                        <Text style={{ paddingHorizontal: 10 }}>
                                            BUILD
                                        </Text>
                                    </ScrollView>
                                </View>
                            </Card>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <Text style={styles.categoryHeaderText}>PROGRAMS</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {box.map(value => (
                            <Card key={value} styles={styles.card}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        height: 50,
                                        width: "100%",
                                        shadowOpacity: 1.0,
                                        shadowColor: "gray",
                                        borderBottomLeftRadius: 5,
                                        borderBottomRightRadius: 5,
                                        shadowOffset: {
                                            height: 1
                                        },
                                        paddingHorizontal: 20,
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Ray Donovan</Text>
                                    <Text>Don Saladino</Text>
                                </View>
                            </Card>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <Text style={styles.categoryHeaderText}>
                        LATEST WORKOUTS
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {box.map(value => (
                            <Card
                                key={value}
                                styles={{
                                    ...styles.card,
                                    height: 220,
                                    width: 120
                                }}
                            >
                                <Text>{value}</Text>
                            </Card>
                        ))}
                    </ScrollView>
                </View>
                <View
                    style={{
                        backgroundColor: "rgb(99, 120, 210)",
                        marginHorizontal: 10,
                        marginVertical: 20,
                        height: 120,
                        borderRadius: 20,
                        padding: 22,
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                            textAlign: "center"
                        }}
                    >
                        Who do you want to see on Playbook?
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "rgb(99, 140, 240)",
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 6
                        }}
                    >
                        <Text style={{ color: "white", fontWeight: "600" }}>
                            Add Suggestion
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#fff"
    },
    section: {
        marginTop: 20
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
    }
});
