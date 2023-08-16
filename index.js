import { AppRegistry } from 'react-native';
import React from "react"

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Router from './src/Router';
import { name as appName } from './app.json';

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
    cache: new InMemoryCache()
})

const App = () => (
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => App);
