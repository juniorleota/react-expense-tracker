import React, {Component} from 'react';
import SubHeader from "../common/SubHeader";

class Balance extends Component {
  render() {
    return (
        <div>
         <SubHeader value={"Balance"} underline={true}/>
        </div>
    );
  }
}

export default Balance;