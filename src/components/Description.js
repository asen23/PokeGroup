import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Description = ({ text }) => {
    return <Text style={styles.textStyle}>{text}</Text>
};

export default Description;

const styles = StyleSheet.create({

    textStyle: {
        textAlign: 'justify',
        color: 'grey',
        fontSize: 15,
    },
});
