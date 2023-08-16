import { Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const ContinentItem = ({ continent }) => {
    const navigation = useNavigation()
    const { name, code } = continent; //get the name of continent

    return (
        <Pressable onPress={() => navigation.navigate("Countries", { code: code })} >
            <Text style={styles.text}>{name} ({code})</Text>
            {/* //display name of continent */}
        </Pressable>
    );
}

export default ContinentItem

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        padding: 20,
        borderBottomWidth: 1
    }
})