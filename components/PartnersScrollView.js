import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "./Card";

const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const PartnerScrollView = props => (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {box.map(value => {
            return (
                <Card key={value} styles={styles.card}>
                    <View
                        style={[
                            styles.cardDescriptions,
                            styles.partnerDescriptions
                        ]}
                    >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.scrollViewContainer}
                        >
                            <Text style={styles.cardDescriptionText}>
                                FUNCTIONAL
                            </Text>
                            <Text style={styles.cardDescriptionText}>
                                ATHLETIC
                            </Text>
                            <Text style={styles.cardDescriptionText}>
                                BUILD
                            </Text>
                        </ScrollView>
                    </View>
                </Card>
            );
        })}
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
    partnerDescriptions: {
        height: 40
    },
    scrollViewContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    cardDescriptionText: {
        paddingHorizontal: 10
    }
});

export default PartnerScrollView;
