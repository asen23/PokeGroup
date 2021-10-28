import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Card from './Card';
import CircleImage from './CircleImage';
import TitleName from './TitleName';

const PokemonNoDetail = ({ pokemon, goToDetails }) => {

    const evolutionDetailHandler = () => {
        goToDetails(pokemon.id);
    }

    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={pokemon.imageURL} />
            <View style={styles.content}>
                <TitleName text={pokemon.name} style={styles.title} />
                <View style={styles.button}><Button title="Evolution Detail" onPress={evolutionDetailHandler}/></View>
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
    },
    title: {
        marginBottom: 40,
    },
    button: {
        width: "80%",
    }

});