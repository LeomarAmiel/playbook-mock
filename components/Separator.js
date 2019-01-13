import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = props => (
    <View style={styles.separator} {...props}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    separator: {
        height: 5,
        backgroundColor: 'rgb(225, 226,227)',
    },
});

export default Separator;
