import React, {Component} from 'react';
import SubHeader from "../common/SubHeader";
import AddTxForm from "./AddTxForm";

class AddTx extends Component {
  render() {
    return (
        <div className={"add-tx"}>
          <SubHeader value={"Add New Transaction"} underline={true}/>
          <AddTxForm/>
        </div>
    );
  }
}

export default AddTx;