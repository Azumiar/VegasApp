import React, { Component } from 'react';

import { Button } from '../Button/Button';
import { AddUserForm } from '../AddUserForm/AddUserForm';
import { Modal } from 'react-materialize';

import './Users.css';

export class Users extends Component {
  render() {
    return (
        <div className="panel">
        <div className="col l12 s12 m12 panel-header">
            <h5>Пользователи</h5>
            <Modal
                header='Добавить пользователя'
                trigger={<Button text="Добавить пользователя"/>} actions={''}>
                <AddUserForm onSubmit={this.props.onSubmit}/>
            </Modal>
        </div>
        {!this.props.data.length && (<div className="no-users">Нет пользователей</div>) || (
            <ul className="collection">
                {this.props.data.map(user => (
                    <li className="collection-item">{user.name}</li>
                ))}
            </ul>
        )}
    </div>
    );
  }
}
