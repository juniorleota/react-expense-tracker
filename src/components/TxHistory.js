import React, {Component} from 'react';
import SubHeader from "../common/SubHeader";
import TxHistoryList from "./TxHistoryList";

class TxHistory extends Component {
  render() {
    return (
        <div>
          <SubHeader value={"History"} underline={true}/>
          <TxHistoryList/>
        </div>
    );
  }
}

export default TxHistory;