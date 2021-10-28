import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PokemonBasicDetail from '../../components/PokemonBasicDetail';
import TitlePage from '../../components/TitlePage';

export default function Pokedex({ route, navigation }) {
    const { newPokemon } = route.params;
    const pokedex = useSelector(state => state.pokedex.pokedex);

    const Header = () => (
        <TitlePage>
            {newPokemon
                ? 'New Poke\nCollections'
                : 'Poke Collections'}
        </TitlePage>
    );

    const goToEvolutions = id => {
        navigation.navigate('Evolution', {
            id: id,
        });
    };

    const PokedexColumn = ({ item }) => {
        return <PokemonBasicDetail id={item} onPress={goToEvolutions} />;
    };

    return (
        <FlatList
            ListHeaderComponent={Header}
            data={newPokemon ? newPokemon : pokedex}
            renderItem={PokedexColumn}
            numColumns={2}
        />
    );
}

