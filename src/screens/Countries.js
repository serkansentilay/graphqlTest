import { FlatList, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useQuery } from "@apollo/client"
import { COUNTRY_QUERY } from '../gql/Query'
import CountryItem from '../components/CountryItem'

const Countries = ({ route }) => {
    const code = route.params.code
    console.log(code)
    const { data, loading } = useQuery(COUNTRY_QUERY, {
        variables: {
            "code": code
        }
    })

    if (loading) {
        return <Text>Fetching data...</Text>;
    }
    if (data.continent.countries.length <= 0) {
        return <Text>Countries not found</Text>
    }

    return (
        <View>
            <Text style={{ color: 'black', fontSize: 25 }}>ALL COUNTRIES</Text>
            <FlatList
                data={data.continent.countries}
                renderItem={({ item }) => <CountryItem country={item} />}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default Countries

const styles = StyleSheet.create({})