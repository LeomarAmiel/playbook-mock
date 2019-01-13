import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Separator } from '../components';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{
                            borderRadius: 30,
                            width: 60,
                            height: 60,
                        }}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>EDIT INFO</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: 'rgb(225, 226,227)',
        height: 30,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
    },
    buttonText: {
        color: 'rgb(111, 111, 119)',
    },
});
