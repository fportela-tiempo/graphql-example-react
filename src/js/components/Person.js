import React from 'react';

class Person extends React.Component{
    render() {
        var person = this.props.person;
        return (
            <li>
                {person.firstName}
            </li>
        );
    }
}

export default Person;