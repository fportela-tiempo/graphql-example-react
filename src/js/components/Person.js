import React from 'react';

class Person extends React.Component{
    render() {
        let person = this.props.person;
        let posts = person.posts.map(post =>(
            <li key={`${person.id}_${post.id}`} >{post.title}</li>
        ));
        return (
            <li>
                <b>{ person.firstName } { person.lastName }</b> _ <sub>{ person.email }</sub>
                <ul>
                    { posts }
                </ul>
            </li>
        );
    }
}

export default Person;