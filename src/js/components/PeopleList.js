import React from 'react';
import Person from './Person';

class PeopleList extends React.Component{
    render(){
        let people = this.props.people || [];
        let items = people.map( person => <Person key={person.id} person={person} />);
        return(
            <ul>
                {items}
            </ul>
        );
    }
}

export default PeopleList;