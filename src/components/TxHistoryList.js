import React, {Component} from 'react';

class TxHistoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={"table"}>
          <div className={"row"}><span>Test</span><span>+100</span></div>
          <div className={"row"}><span>Test</span><span>-100</span></div>
        </div>
    );
  }
}

export default TxHistoryList;