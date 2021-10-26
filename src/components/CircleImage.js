import React from 'react';
import { StyleSheet, Image } from 'react-native';

const CircleImage = ({ url }) => {
    return <Image style={styles.image} source={{ uri: url }} />;
};

export default CircleImage;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'red',
    },
});
