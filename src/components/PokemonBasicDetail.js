import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CircleImage from './CircleImage';
import Description from './Description';
import DetailColumn from './DetailColumn';
import TitleName from './TitleName';

const PokemonBasicDetail = ({ imageURL, pokemon }) => {
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={imageURL} />
            <View style={styles.content}>
                <TitleName text={pokemon.name} style={styles.title} />
                <DetailColumn>Weight: {pokemon.weight}</DetailColumn>
                <DetailColumn>Base Exp: {pokemon.weight}</DetailColumn>
                <DetailColumn>{pokemon.type}</DetailColumn>
                <Button title="Evolution" textColor="blue"/>
            </View>
        </Card>
    );
};

export default PokemonBasicDetail;

const styles = StyleSheet.create({
    cardWrapper: {
        borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        color: 'gray',
    },
});
