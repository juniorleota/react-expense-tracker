import React, {Component} from 'react';
import TxHistoryListItem from "./TxHistoryListItem";
import {getTxItems, addTx} from "./TxGlobalState"

class TxHistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txList: getTxItems()
    }
  }

  txRows() {
    return this.state.txList.map((tx) => <TxHistoryListItem tx={tx} key={tx.id}/>);
  }

  render() {

    return (
        <div className={"table"}>
          {this.txRows()}
        </div>
    );
  }
}

export default TxHistoryList;