import React, {Component} from 'react';

class AddTxInputElem extends Component {
  render() {
    return (
        <div className={"flex-column"}>
          <label>{this.props.label}</label>
          <input placeholder={this.props.placeholder} type={this.props.type} name={this.props.name}/>
        </div>
    );
  }
}

export default AddTxInputElem;