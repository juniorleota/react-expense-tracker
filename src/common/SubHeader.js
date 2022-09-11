import React, {Component} from 'react';

class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classNames = "subheader";
    if (this.props.underline) {
      classNames += " underlined"
    }
    return (
        <h3 className={classNames}>
          {this.props.value}
        </h3>
    );
  }
}

export default SubHeader;