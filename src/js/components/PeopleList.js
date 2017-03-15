import React from 'react';
import Person from './Person';
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

class PeopleList extends React.Component{
    render(){
        let people = this.props.data.people || [];
        let items = people.map( person => <Person key={person.id} person={person} />);
        return(
            <ul>
                {items}
            </ul>
        );
    }
}

export default graphql(People)(PeopleList);