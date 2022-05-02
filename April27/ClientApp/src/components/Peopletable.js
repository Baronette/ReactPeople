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
        person[e.target.name] = e.target.value;
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
        if (this.state.people.length == 0) {
            return <h1>No people yet. Add people to fill table.</h1>
        }
        return <table className='table table-hover table-striped table-bordered mt-3'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.people.map((p, i) => <PersonRow key={i} person={p} />)}
            </tbody>
        </table>
    }
    render() {
        return (
            <div className='container col-md-9'>
                <PersonForm person={this.state.person}
                    onTextChange={this.onTextChange}
                    onClickAdd={this.onClickAdd}
                    onClickClear={this.onClickClear}></PersonForm>
                {this.generateBody()}
            </div>
        );
    }
}

export default PeopleTable;
