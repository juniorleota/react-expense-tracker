import React, {Component} from 'react';
import TxHistoryListItem from "./TxHistoryListItem";
import {getTxItems, clearAllTx} from "./TxGlobalState"

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
        <div className={"flex-column"}>
          {this.txRows()}
          <button onClick={this.updateTxList}>Clear All</button>
        </div>
    );
  }

  updateTxList() {
    this.state = {
      txList: []
    }
    clearAllTx();
  }
}

export default TxHistoryList;