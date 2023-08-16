import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { STATES_QUERY } from '../gql/Query'
import StatesItem from '../components/StatesItem'

const States = ({ route }) => {
    const code = route.params.code
    console.log(code)

    const { data, loading, error } = useQuery(STATES_QUERY, {
        variables: {
            "code": code
        }
    })

    if (loading) {
        return <Text>Fetching data...</Text>
    }
    if (error) {
        return <Text>States not found</Text>
    }
    if (data.country.states.length <= 0) {
        return <Text>States not found</Text>
    }
    console.log(data.country.states)
    return (
        <View>
            <Text>ALL STATES</Text>
            <FlatList
                data={data.country.states}
                renderItem={({ item }) => <StatesItem state={item} />}
                keyExtractor={(item, index) => index}
            />


        </View>
    )
}

export default States

const styles = StyleSheet.create({})