import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import CircleImage from './CircleImage';
import Description from './Description';
import TitleName from './TitleName';

const PokemonNoDetail = () => {

    const string = "Weight: 40\nBase Exp: 101\nNormal";
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png" />
            <View style={styles.content}>
                <TitleName text="Pelipper" style={styles.title} />
                {/* Button here */}
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        // marginBottom: 50,
    },
});
