import React, { Component } from "react";

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this._updateValue = this._updateValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _updateValue = (value) => {
      this.setState({ value })
  }

_handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.value.trim()) {
        return ;
    }
    this.props._handleSubmit({ description: this.state.value, isCoomplete: false});
    this.setState({value: ''})
}
  render() {
    const { value } = this.state;
    const { _handleSubmit, _updateValue } = this;
    return (
      <div>
        <form onSubmit={_handleSubmit}>
          <label className='text-danger'>Add New Todo</label>
          <input type="text" onChange={(e) => _updateValue(e.target.value)} value={value} />
        </form>
      </div>
    );
  }
}
