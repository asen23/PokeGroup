import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from './Card';
import CircleImage from './CircleImage';
import Description from './Description';
import TitleName from './TitleName';

const PokemonNoDetail = ({ imageURL, name }) => {
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={imageURL} />
            <View style={styles.content}>
                <TitleName text={name} style={styles.title} />
                <Button title="Evolution Detail" />
            </View>
        </Card>
    );
};

export default PokemonNoDetail;

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        // marginBottom: 50,
    },
});
