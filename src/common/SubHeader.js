import React, {Component} from 'react';

class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h3>
          {this.props.value}
        </h3>
    );
  }
}

export default SubHeader;