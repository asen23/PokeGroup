import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import PokemonNoDetail from '../../components/PokemonNoDetail';
import { addExample } from '../../redux/reducer/example';

export default function Home() {
    const example = useSelector(state => state.example.example);
    const dispatch = useDispatch();
    return (
        <View>
            <Card>
                <Text>{example}</Text>
                <Button title="add" onPress={() => dispatch(addExample())} />
            </Card>
            <PokemonNoDetail />
        </View>
    );
}

const styles = StyleSheet.create({
    
});
