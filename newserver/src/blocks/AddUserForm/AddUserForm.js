import React, { Component } from 'react';

import { Row, Input} from 'react-materialize';
import { Button } from '../Button/Button';

import './AddUserForm.css';

export class AddUserForm extends Component {
    state = {
        name: '',
        phone: '',
        checks: '',
        bonusCard: ''
    }

    render() {
        return (
            <Row>
                <Input s={12} label="Имя" onChange={(e) => this.updateData('name', e.target.value)}/>
                <Input s={12} label="Телефон" onChange={(e) => this.updateData('phone', e.target.value)}/>
                <Input s={12} type='select' label='Количество фишек' defaultValue='1' onChange={(e) => this.updateData('checks', e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </Input>
                <Input s={12} label="Бонусная карта" onChange={(e) => this.updateData('bonusCard', e.target.value)}/>
                <Button text="Добавить" className="right margin-right" onClick={() => this.props.onSubmit(this.state)}/>
            </Row>
        );
    }

    updateData(field, value) {
        this.setState({ [field]: value });
    }
}
