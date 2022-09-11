import React, {Component} from 'react';

class AddTxType extends Component {
  render() {
    return (
        <div className={"flex-column"}>
          <label>Type</label>
          <select name={"type"}>
            <option value={"expense"}>Expense</option>
            <option value={"income"}>Income</option>
          </select>
        </div>
    );
  }
}

export default AddTxType;