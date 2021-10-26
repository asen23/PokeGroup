import React from 'react';
import { StyleSheet, Text } from 'react-native';

const DetailColumn = ({ children }) => (
    <Text style={styles.column}>{children}</Text>
);

export default DetailColumn;

const styles = StyleSheet.create({
    column: {
        marginVertical: 5,
    },
});
