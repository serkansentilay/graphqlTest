import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
const CountryItem = ({ country }) => {
    const navigation = useNavigation()

    const { name, code } = country;

    return (
        <Pressable onPress={() => navigation.navigate("States", { code: code })} >
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    );
};



export default CountryItem

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        padding: 20,
        borderBottomWidth: 1
    },
})