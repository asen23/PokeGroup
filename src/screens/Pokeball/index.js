import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addPokedex } from '../../redux/reducer/pokedex';

const PokemonCard = ({ id, style, onPress }) => {
    const [isClicked, setIsClicked] = useState(false);
    if (isClicked) {
        return (
            <View style={style}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    }}
                />
            </View>
        );
    } else {
        return (
            <View style={style}>
                <TouchableOpacity
                    onPress={() => {
                        onPress();
                        setIsClicked(true);
                    }}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/pokeball.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
};

export default function Pokeball({ navigation, route }) {
    const { count } = route.params;
    const [pokemon, setPokemon] = useState([]);
    const [openPokeballCount, setOpenPokeballCount] = useState(0);
    const dispatch = useDispatch();

    const getPokemon = async () => {
        let response = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/?limit=0`,
        );
        let json = await response.json();
        let max = json.count;
        let newPokemon = [];

        for (let i = 0; i < count; i++) {
            let id = Math.floor(Math.random() * max);
            newPokemon.push(id);
        }
        setPokemon(newPokemon);
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <View>
            <ScrollView style={styles.listView}>
                {pokemon.map(pokemon => (
                    <PokemonCard
                        id={pokemon}
                        key={pokemon}
                        style={styles.pokemonCard}
                        onPress={() => setOpenPokeballCount(c => c + 1)}
                    />
                ))}
                {openPokeballCount == count ? (
                    <Button
                        title="Save & View Pokedex"
                        textColor="white"
                        backgroundColor="blue"
                        style={styles.button}
                        onPress={() => {
                            dispatch(addPokedex(pokemon));
                            navigation.replace('Pokedex', {
                                newPokemon: pokemon,
                            });
                        }}
                    />
                ) : null}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pokemonCard: {
        width: '50%',
    },
    image: {
        height: 125,
        width: 125,
    },
    button: {
        position: 'absolute',
        marginBottom: 8,
        marginRight: 8,
    },
});
