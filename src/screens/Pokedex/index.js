import React from 'react';
import { Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PokemonBasicDetail from '../../components/PokemonBasicDetail';

export default function Pokedex({ route, navigation }) {
    const { newPokemon } = route.params;
    const pokedex = useSelector(state => state.pokedex.pokedex);

    const Header = () => (
        <Text>
            {newPokemon
                ? 'N e w  P o k e\n C o l l e c t i o n s'
                : 'P o k e  C o l l e c t i o n s'}
        </Text>
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
        />
    );
}
