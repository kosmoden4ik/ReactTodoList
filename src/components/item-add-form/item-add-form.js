import React, { Component } from "react";
import "./item-add-form.css";
import AddItem from "../app/app";
import app from "../app/app";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmitik = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ""
    });
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmitik}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">AddItem</button>
      </form>
    );
  }
}
