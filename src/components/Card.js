import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => {
    return <View style={[styles.cardWrapper, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    cardWrapper: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 12,
        margin: 20,
        padding: 30,
        backgroundColor: 'white',
    },
});
