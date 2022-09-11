import React, {Component} from 'react';

class AddTxInputElem extends Component {
  render() {
    let input = <input placeholder={this.props.placeholder} type={this.props.type} name={this.props.name}/>;
    if (this.props.type === 'currency') {
      input = <input placeholder={this.props.placeholder} type={"number"} name={this.props.name} min={"0"} step={"any"}/>;
    }
    return (
        <div className={"flex-column"}>
          <label>{this.props.label}</label>
          {input}
        </div>
    );
  }
}

export default AddTxInputElem;