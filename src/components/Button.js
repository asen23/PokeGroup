import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                backgroundColor ? { backgroundColor: backgroundColor } : null,
            ]}>
            <Text
                style={[styles.text, textColor ? { color: textColor } : null]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        borderRadius: 5,
        padding: 5 ,
    },
});
