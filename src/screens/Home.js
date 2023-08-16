import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";
import ContinentItem from '../components/ContinentItem';

const Home = () => {
    const { data, loading } = useQuery(CONTINENT_QUERY); //execute query

    if (loading) {
        return <Text>Fetching data...</Text> //while loading return this
    }

    if (data.continents.length <= 0) {
        return <Text>Continents not found</Text>
    }

    return (
        <>
            <Text style={{ color: 'black', fontSize: 25 }}>ALL CONTINENTS</Text>
            <FlatList
                data={data.continents}
                renderItem={({ item }) => <ContinentItem continent={item} />}
                keyExtractor={(item, index) => index}
            />
        </>
    );
}

export default Home

const styles = StyleSheet.create({})