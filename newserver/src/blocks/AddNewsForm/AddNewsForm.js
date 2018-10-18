import React, { Component } from 'react';

import { Row, Input } from 'react-materialize';
import { Button } from '../Button/Button';

import './AddNewsForm.css';

export class AddNewsForm extends Component {
    state = {
        title: '',
        description: '',
        imageUrl: '',
    }

    render() {
        return (
            <Row>
                <Input s={12} label="Тема" onChange={(e) => this.updateData('title', e.target.value)}/>
                <Input s={12} label="Описание" onChange={(e) => this.updateData('description', e.target.value)}/>
                <Input s={12} label="Сыылка на кртинку" onChange={(e) => this.updateData('imageUrl', e.target.value)}/>
                <Button text="Добавить" className="right margin-right" onClick={() => this.props.onSubmit(this.state)}/>
            </Row>
        );
    }

    updateData(field, value) {
        this.setState({ [field]: value });
    }
}
