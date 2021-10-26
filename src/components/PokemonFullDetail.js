import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ButtonTransparent from './Button';
import Card from './Card';
import CircleImage from './CircleImage';
import Description from './Description';
import DetailColumn from './DetailColumn';
import TitleName from './TitleName';

// const ListColumnChild = ({ item }) => (
//     <DetailColumn>{`* ${item}`}</DetailColumn>
// );

const ListColumn = ({ title, list }) => (
    <View>
        <DetailColumn>{title}</DetailColumn>
        {list.map(title => (
            <DetailColumn key={title}>{`* ${title}`}</DetailColumn>
        ))}
    </View>
);

const PokemonFullDetail = ({ imageURL, pokemon }) => {
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={imageURL} />
            <View style={styles.content}>
                <TitleName text={pokemon.name} />
                <DetailColumn>Weight: {pokemon.weight}</DetailColumn>
                <DetailColumn>Base Exp: {pokemon.weight}</DetailColumn>
                <DetailColumn>{pokemon.type}</DetailColumn>
                <ListColumn title="Type:" list={pokemon.type} />
                <ListColumn title="Abilities:" list={pokemon.abilities} />
            </View>
        </Card>
    );
};

export default PokemonFullDetail;

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    column: {
        marginVertical: 5,
    },
});
