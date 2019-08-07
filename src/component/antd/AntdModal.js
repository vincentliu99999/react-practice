
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

class AntdModal extends Component {
  state = {
    visible1: false,
    visible2: false,
  };

  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };

  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
      visible2: true,
    });
  };

  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };

  handleOk2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2= (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal1}>
          Open Modal 1
        </Button>
        <Modal
          title="Basic Modal 1"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal 2"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          footer={[
            <Button key="back" onClick={this.handleCancel2}>
              Close
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk2}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default AntdModal;
