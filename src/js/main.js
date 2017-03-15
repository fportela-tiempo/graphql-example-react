import  { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDom from 'react-dom';
import RootComponent from './components/RootComponent';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3000/graphql',
        opts: {
            method: 'GET'
        }
    }),
});

ReactDom.render(
  <ApolloProvider client={client}>
      <RootComponent></RootComponent>
  </ApolloProvider>
, document.getElementById('root'));