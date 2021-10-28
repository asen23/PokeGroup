import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PokemonBasicDetail from '../../components/PokemonBasicDetail';

const PokedexColumn = ({ item }) => {
    return <PokemonBasicDetail id={item} />;
};

export default function Pokedex({ route }) {
    const { newPokemon } = route.params;
    const pokedex = useSelector(state => state.pokedex.pokedex);

    const Header = () => (
        <Text>
            {newPokemon
                ? 'N e w  P o k e\n C o l l e c t i o n s'
                : 'P o k e  C o l l e c t i o n s'}
        </Text>
    );

    return (
        <FlatList
            ListHeaderComponent={Header}
            data={newPokemon ? newPokemon : pokedex}
            renderItem={PokedexColumn}
        />
    );
}
