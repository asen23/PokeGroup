import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TitlePage = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default TitlePage

const styles = StyleSheet.create({
    text: {
        letterSpacing: 10,
        color: 'brown',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
})
