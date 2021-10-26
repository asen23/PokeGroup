import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import PokemonNoDetail from '../../components/PokemonNoDetail';
import PokemonBasicDetail from '../../components/PokemonBasicDetail';
import { addExample } from '../../redux/reducer/example';
import PokemonFullDetail from '../../components/PokemonFullDetail';
import Button from '../../components/Button'

export default function Home() {
    const example = useSelector(state => state.example.example);
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Card>
                <Text>{example}</Text>
                <Button title="add" onPress={() => dispatch(addExample())} backgroundColor='red' textColor='white' />
            </Card>
            <PokemonNoDetail
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
                name="Pelipper"
            />
            <PokemonFullDetail
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
                pokemon={{
                    name: 'Pelipper',
                    weight: 40,
                    type: ['normal'],
                    abilities: ['limber', 'imposter'],
                }}
            />
            <PokemonBasicDetail
                imageURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
                pokemon={{
                    name: 'Pelipper',
                    weight: 40,
                    type: ['normal'],
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
