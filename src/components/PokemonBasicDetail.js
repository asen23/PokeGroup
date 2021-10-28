import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CircleImage from './CircleImage';
import DetailColumn from './DetailColumn';
import TitleName from './TitleName';

const PokemonBasicDetail = ({ id }) => {
    const [pokemon, setPokemon] = useState({
        name: '',
        weight: '',
        exp: '',
        type: [],
    });
    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    const getPokemonData = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let json = await response.json();
        setPokemon({
            name: json.species.name,
            weight: json.weight,
            exp: json.base_experience,
            type: json.types.map(t => t.type.name),
        });
    };

    useEffect(() => {
        getPokemonData();
    }, []);
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={imageURL} />
            <View style={styles.content}>
                <TitleName text={pokemon.name} style={styles.title} />
                <DetailColumn>Weight: {pokemon.weight}</DetailColumn>
                <DetailColumn>Base Exp: {pokemon.exp}</DetailColumn>
                <DetailColumn>{pokemon.type}</DetailColumn>
                <Button
                    title="Evolution"
                    textColor="blue"
                    onPress={() =>
                        navigation.navigate('Evolution', {
                            evolutionURL: `https://pokeapi.co/api/v2/evolution-chain/${id}`,
                        })
                    }
                />
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
