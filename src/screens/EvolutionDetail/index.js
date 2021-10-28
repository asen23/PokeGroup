import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PokemonFullDetail from '../../components/PokemonFullDetail';
import { setLoading, setPokemon } from '../../redux/reducer/pokemon';

const EvolutionDetail = ({ route }) => {
    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    const { id } = route.params;

    useEffect(() => {
        dispatch(setLoading(true));
        getPokemonDetails();
    }, []);

    const getPokemonDetails = async () => {
        try {
            let response = await fetch(
                'https://pokeapi.co/api/v2/pokemon/' + id,
            );
            let json = await response.json();
            setPokemonDetails(json);
        } catch (err) {
            console.error(err);
        }
    };

    const setPokemonDetails = json => {
        const pokemonDetail = {
            id: id,
            name: json.name,
            weight: json.weight,
            height: json.height,
            types: json.types.map(t => t.type.name),
            abilities: json.abilities.map(a => a.ability.name),
            imageURL:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                id +
                '.png',
        };
        dispatch(setPokemon(pokemonDetail));
        dispatch(setLoading(false));
    };

    return (
        <View>
            {pokemon.loading ? (
                <Text style={styles.center}>Loading...</Text>
            ) : (
                <PokemonFullDetail pokemon={pokemon.pokemon} />
            )}
        </View>
    );
};

export default EvolutionDetail;

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
        width: '100%',
        color: 'grey',
    },
});
