import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, backgroundColor, textColor, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                backgroundColor ? { backgroundColor: backgroundColor } : null,
            ]}
            onPress={onPress}>
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
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        borderRadius: 6,
        padding: 10,
    },
});
