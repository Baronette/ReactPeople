import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class PeopleForm extends Component {
    render() {
        const { person: { firstName, lastName, age }, onTextChange, onClickAdd, onClickClear } = this.props;
        return (
            <div className='row jumbotron mt-3'>
                <div className='col-md-3'>
                    <input className="form-control" type="text" onChange={onTextChange}
                        placeholder="First Name" value={firstName} name="firstName" />
                </div>
                <div className='col-md-3'>
                    <input className='form-control' type='text' onChange={onTextChange}
                        placeholder='Last Name' value={lastName} name='lastName'/>
                </div>
                <div className='col-md-3'>
                    <input className='form-control' type='text' onChange={onTextChange}
                        placeholder='Age'  value={age} name='age'/>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={onClickAdd}>Add</button>
                    <button className='btn btn-warning ml-3' onClick={onClickClear}>Clear All</button>

                </div>

            </div>
        )
    }
}
export default PeopleForm