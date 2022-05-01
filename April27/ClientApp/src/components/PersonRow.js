import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonRow extends Component {
    
    render() {
        const {firstName, lastName, age} = this.props.person
        return (
            <tr className= {age > 65?'table-danger': ''} > 
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
            </tr>
        )
    }
}
export default PersonRow;
