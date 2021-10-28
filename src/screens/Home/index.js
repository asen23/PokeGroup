import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
                <Button
                    onPress={() =>
                        navigation.navigate('Pokedex', {
                            newPokemon: undefined,
                        })
                    }
                    title="PS"
                />
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
        <View>
            <Image
                source={require('../../assets/pokeball.png')}
                style={styles.image}
            />
            <Text>Congratulations, you get {count} pokeball's</Text>
            <Text>Let's open it shall we ?</Text>
        </View>
    );

    return (
        <View>
            <Card>
                <Text>Hello There,</Text>
                <Text>press the button below to get free pokeballs :D</Text>
                {pokeballCount ? (
                    <PokeballDetail count={pokeballCount} />
                ) : null}
                <Button
                    title={pokeballCount ? 'Open Pokeballs' : 'Get Pokeballs'}
                    onPress={
                        pokeballCount ? openPokeballHandler : getPokeballHandler
                    }
                    backgroundColor="red"
                    textColor="white"
                />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: '50%',
        resizeMode: 'contain',
    },
});
