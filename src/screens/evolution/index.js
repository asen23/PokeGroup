import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PokemonNoDetail from '../../components/PokemonNoDetail';
import { setEvolutionChain, setLoading } from '../../redux/reducer/evolution';

const Evolutions = ({ route, navigation }) => {
    const evolutions = useSelector(state => state.evolution);
    const dispatch = useDispatch();

    const { id } = route.params;

    useEffect(() => {
        dispatch(setLoading(true));
        getPokemonEvolutions();
    }, []);

    const getEvolutionURL = async () => {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        );
        let json = await response.json();
        return json.evolution_chain.url;
    };

    const getPokemonEvolutions = async () => {
        try {
            let evolutionURL = await getEvolutionURL();
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
        dispatch(setLoading(false));
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
        const goToDetailsHandler = id => {
            navigation.navigate('Evolution Detail', { id: id });
        };

        return (
            <PokemonNoDetail pokemon={item} goToDetails={goToDetailsHandler} />
        );
    };

    const itemSeparator = () => <Text style={styles.center}>ᐯ</Text>;
    console.log(evolutions.loading);
    return (
        <View>
            {evolutions.loading ? (
                <Text style={styles.center}>Loading...</Text>
            ) : (
                <FlatList
                    data={evolutions.pokemons}
                    renderItem={renderItem}
                    ItemSeparatorComponent={itemSeparator}
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    );
};

export default Evolutions;

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
        width: '100%',
        color: 'grey',
    },
});
