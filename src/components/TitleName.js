import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleName = ({ text, style }) => {
    return <Text style={[styles.textStyle, style]}>{text}</Text>;
};

export default TitleName;

const styles = StyleSheet.create({
    textStyle: {
        color: 'brown',
        fontSize: 25,
    },
});
