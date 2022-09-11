import React, {Component} from 'react';
import AddTxInputElem from "./AddTxInputElem";
import AddTxType from "./AddTxType";
import {addTx} from "./TxGlobalState";

class AddTxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <form className={"flex-column"} onSubmit={this.handleSubmit}>
          {this.getErrorMessage()}
          <AddTxInputElem label={"Description"} type={"text"} name={"description"}/>
          <AddTxInputElem label={"Amount"} type={"currency"} name={"amount"}/>
          <AddTxType/>
          <button className={"add-tx-btn"} type={"submit"}>Add transaction</button>
        </form>
    );
  }

  getErrorMessage() {
    if (this.state.isError) {
      return <div className={"error-message"}>Please enter both a description and amount.</div>;
    }
    return <></>;
  }

  handleSubmit(event) {
    const newTx = {
      description: event.target['description'].value,
      amount: parseFloat(event.target['amount'].value),
      type: event.target['type'].value
    };
    if (newTx.description && newTx.amount) {
      addTx(newTx);
      this.setState({isError: false});
    } else {
      this.setState({isError: true});
      event.preventDefault();
    }
  }
}

export default AddTxForm;