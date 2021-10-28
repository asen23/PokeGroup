import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import CircleImage from './CircleImage';
import DetailColumn from './DetailColumn';
import TitleName from './TitleName';

const ListColumn = ({ title, list }) => (
    <View>
        <DetailColumn>{title}</DetailColumn>
        {list.map(title => (
            <DetailColumn key={title}>{`* ${title}`}</DetailColumn>
        ))}
    </View>
);

const PokemonFullDetail = ({ pokemon }) => {
    return (
        <Card style={styles.cardWrapper}>
            <CircleImage url={pokemon.imageURL} />
            <View style={styles.content}>
                <TitleName text={pokemon.name} />
                <DetailColumn>Weight: {pokemon.weight}</DetailColumn>
                <DetailColumn>Height: {pokemon.height}</DetailColumn>
                <ListColumn title="Type:" list={pokemon.types} />
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
        marginLeft: 5
    },
    column: {
        marginVertical: 5,
    },
});
