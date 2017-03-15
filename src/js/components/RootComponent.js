import React from 'react';
import { gql, graphql } from 'react-apollo';

const People = gql`
    query person{
        people{
            id,
            firstName
            lastName
            email
            posts{
                title
            }
        }
    }
`;

class App extends React.Component{
    render(){
        return(
            <div>
                Ready!
            </div>
        );
    }
}

export default graphql(People)(App);