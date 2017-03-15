import React from 'react';
import { gql, graphql } from 'react-apollo';
import PeopleList from './PeopleList';

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
                <PeopleList people={this.props.data.people} />
            </div>
        );
    }
}

export default graphql(People)(App);