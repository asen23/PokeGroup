import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function Home({ navigation }) {
    const [pokeballCount, setPokeballCount] = useState(undefined);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setPokeballCount(undefined);
        });

        return unsubscribe;
    }, [navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Pokedex', {
                            newPokemon: undefined,
                        })
                    }
                    title="PS">
                    <Image source={require('../../assets/menu.png')} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const getPokeballHandler = () => {
        setPokeballCount(Math.floor(Math.random() * 10) + 1);
    };

    const openPokeballHandler = () => {
        navigation.navigate('Pokeball', {
            count: pokeballCount,
        });
    };

    const PokeballDetail = ({ count }) => (
        <View style={styles.detail}>
            <Image
                source={require('../../assets/pokeball.png')}
                style={styles.image}
            />
            <Text style={styles.text}>
                Congratulations, you get {count} pokeball's
            </Text>
            <Text style={styles.text}>Let's open it shall we ?</Text>
        </View>
    );

    return (
        <Card>
            <Text style={styles.greetings}>Hello There,</Text>
            <Text style={styles.text}>
                Press the button below to get free pokeballs :D
            </Text>
            {pokeballCount ? <PokeballDetail count={pokeballCount} /> : null}
            <Button
                title={pokeballCount ? 'Open Pokeballs' : 'Get Pokeballs'}
                onPress={
                    pokeballCount ? openPokeballHandler : getPokeballHandler
                }
                backgroundColor="red"
                textColor="white"
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 8,
    },
    greetings: {
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
    },
    text: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
    },
});
