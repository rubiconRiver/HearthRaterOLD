import React from "react";
import "./Picture.css";

class Picture extends React.Component {
  state = {
    hover: false
  };

  mouseOver() {
    this.setState({ hover: true });
  }
  mouseOut() {
    this.setState({ hover: false });
  }
  render() {
    return (
      <div className="Picture">
        <img className="Img" src={this.props.id} alt="HS Card" />
        {this.state.hover ? (
          <img className="Preview" src={this.props.id} alt="HS Card" />
        ) : null}
      </div>
    );
  }
}

export default Picture;
