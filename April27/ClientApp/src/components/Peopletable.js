import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PersonForm from './PersonForm.';
import PersonRow from './PersonRow';


class PeopleTable extends Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    onTextChange = e => {
        const person = { ...this.state.person };
        person[e.target.name] =  e.target.value;
        this.setState({ person });
    }

    onClickAdd = () => {
        console.log(this.state.person)
        const people = [...this.state.people, this.state.person];
        this.setState({ people, person: { firstName: '', lastName: '', age: '' } });
    }
    onClickClear = () => {
        this.setState({ people: [] });
    }
    generateBody() {
        return this.state.people.map((p, i) => <PersonRow key={i} person={p} />)
    }
    render() {
        return (
            <div className='container col-md-8'>
                <PersonForm person={this.state.person}
                    onTextChange={this.onTextChange}
                    onClickAdd={this.onClickAdd}
                    onClickClear={this.onClickClear}></PersonForm>
                <table className='table table-hover table-striped table-bordered mt-3'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PeopleTable;
