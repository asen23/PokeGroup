import React, { useEffect } from 'react';
import {
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PokemonNoDetail from '../../components/PokemonNoDetail';
import { setEvolutionChain } from '../../redux/reducer/evolution';

const Evolutions = ({ route, navigation }) => {

    const evolutions = useSelector(state => state.evolution);
    const dispatch = useDispatch();

    // const { evolutionURL } = route.params;
    const evolutionURL = 'https://pokeapi.co/api/v2/evolution-chain/2/';

    useEffect(() => {
        getPokemonEvolutions();
    }, []);

    const getPokemonEvolutions = async () => {
        try {
            let response = await fetch(evolutionURL);
            let json = await response.json();
            setPokemonEvolutions(json.chain);

        } catch (error) {
            console.error(error);
        }
    };

    const setPokemonEvolutions = async chain => {
        const pokemons = [];
        let position = chain;
        let flag = 1;
        do {
            const pokemon = {
                id: await getID(position.species.name),
                name: position.species.name,
                url: position.species.url,
                imageURL: await getImageUrl(position.species.name),
            };
            pokemons.push(pokemon);
            if (position.evolves_to.length > 0) {
                position = position.evolves_to[0];
            } else flag = 0;
        } while (flag == 1);
        dispatch(setEvolutionChain(pokemons));
    };

    const getImageUrl = async name => {
        const id = await getID(name);
        return (
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            id +
            '.png'
        );
    };

    const getID = async name => {
        try {
            let response = await fetch(
                'https://pokeapi.co/api/v2/pokemon/' + name,
            );
            let json = await response.json();
            return json.id;
        } catch (error) {
            console.error(error);
        }
        return 0;
    };

    const renderItem = ({ item }) => {
        const goToDetailsHandler = () => {
            console.log('go to details');
        };

        return (
            <PokemonNoDetail pokemon={item} goToDetails={goToDetailsHandler} />
        );
    };

    const itemSeparator = () => (
        <Text style={styles.center}>ᐯ</Text>
    )

    return (
        <FlatList
            data={evolutions.pokemons}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={item => item.id}
        />
    );
};

export default Evolutions;

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
        width: '100%',
        color: 'grey',
    }
});
