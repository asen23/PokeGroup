import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addExample } from '../../redux/reducer/example';

export default function Home() {
    const example = useSelector(state => state.example.example);
    const dispatch = useDispatch();
    return (
        <View>
            <Text>{example}</Text>
            <Button title="add" onPress={() => dispatch(addExample())} />
        </View>
    );
}

const styles = StyleSheet.create({});
