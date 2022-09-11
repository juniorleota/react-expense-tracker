import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h2>
          {this.props.value}
        </h2>
    );
  }
}

export default Header;