import React, {Component} from 'react';
import SubHeader from "../common/SubHeader";

class AddTx extends Component {
  render() {
    return (
        <div>
          <SubHeader value={"Add New Transaction"} underline={true}/>
        </div>
    );
  }
}

export default AddTx;