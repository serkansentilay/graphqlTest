import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatesItem = ({ state }) => {
    const { name } = state
    return (
        <View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default StatesItem

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        padding: 20,
        borderBottomWidth: 1
    }
})