/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

// Styles
import "./ProgressiveImage.css";

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }
  render() {
    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");
    return (
      <span>
        <img
          {...filteredProps}
          className={`original`}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
          src={this.props.src}
        />
        <img
          {...filteredProps}
          className={`${this.props.className} overlayStyles`}
          {...(highResImageLoaded && { style: { opacity: "0" } })}
          src={overlaySrc}
        />
      </span>
    );
  }
}
