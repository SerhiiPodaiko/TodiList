import React, { Component } from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="item-add-form d-flex mt-3">
                <input
                    type="text"
                    className="form-control mr-1"
                    placeholder="What needs to be done"
                    value={this.state.label}
                    onChange={this.onLabelChange}/>
                <button className="btn btn-outline-secondary w-25">Add Item</button>
            </form>
        );
    }
}
