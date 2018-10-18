import React, { Component } from 'react';

import { Button } from '../Button/Button';
import { AddNewsForm } from '../AddNewsForm/AddNewsForm';
import { Modal } from 'react-materialize';

import './News.css';

export class News extends Component {
  render() {
    return (
        <div className="panel">
            <div className="row no-margin">
                <div className="col l12 s12 m12 panel-header">
                    <h5>Новости</h5>
                    <Modal
                        header='Добавить новость'
                        trigger={<Button text="Добавить новость"/>} actions={''}>
                        <AddNewsForm onSubmit={this.props.onSubmit}/>
                    </Modal>
                </div>
            </div>
            <div className="row">
            {!this.props.data.length && (<div className="no-news">Нет новостей</div>) || this.props.data.map(item => (
                <div className="col s12 m6 l4">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
  }
}
