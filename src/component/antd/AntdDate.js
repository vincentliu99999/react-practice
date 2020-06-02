
import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

class AntdDate extends Component {
  state = {
    visible1: false,
    visible2: false,
  };

  handleDateChange = (date, dateString) => {
    console.log('handleDateChange');
    console.log(`
date: ${date}
dateString: ${dateString}`);
  };

  handleRangeChange = (date, dateString) => {
    console.log('handleRangeChange');
    console.log(`
date: ${date}
dateString: ${dateString}`);
  };

  render() {
    return (
      <div>
        <DatePicker onChange={this.handleDateChange} />
        <br />
        <RangePicker onChange={this.handleRangeChange} />
        <p>{this.props.something} from props</p>
      </div>
    );
  }
}

export default AntdDate;
