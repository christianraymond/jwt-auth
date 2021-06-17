import React, { Component } from "react";

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this._updateValue = this._updateValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _updateValue(value) {
    this.setState({ value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.handleSubmit({
      todo: this.state.value,
      description: this.state.value,
      isComplete: false,
    });
    this.setState({ value: "" });
  }
  render() {
    const { value } = this.state;
    const { _updateValue, _handleSubmit } = this;

    return (
      <div>
        <form onSubmit={_handleSubmit}>
          <input
            type="text"
            onChange={(e) => _updateValue(e.target.value)}
            value={value}
            placeholder="Add your todo"
          />
          <button className="waves-effect waves-light btn blue right">
            Add
          </button>
        </form>
      </div>
    );
  }
}
