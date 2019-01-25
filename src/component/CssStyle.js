import React, { Component } from 'react';
import './CssStyleBox.css';
import styled from 'styled-components';

class CssStyle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <CssStyleBox />
      <InlineBox />
      <StyledComponentBox />
    </div>
  }
}
//css style
const CssStyleBox = () => (
  <div className="CssStyleBox">
    <p className="CssStyleBox_content">CSS style box</p>
  </div>
);

//inline style
const divStyle = {
  margin: '40px',
  border: '5px solid green'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const InlineBox = () => (
  <div style={divStyle}>
    <p style={pStyle}>Inline style box</p>
  </div>
);

//styled-components
const Div = styled.div`
  margin: 40px;
  border: 5px double blue;
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const StyledComponentBox = () => (
  <Div>
    <Paragraph>styled-components box</Paragraph>
  </Div>
);

export default CssStyle;