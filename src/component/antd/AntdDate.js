
import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import moment from 'moment';
import 'moment/locale/zh-tw';

const { RangePicker } = DatePicker;

class AntdDate extends Component {
  state = {
    visible1: false,
    visible2: false,
  };

  handleDateChange = (date, dateString) => {
    console.log('handleDateChange');
    console.log(`
locale: ${moment.locale()}
date: ${date}
dateString: ${dateString}
moment.isMoment(obj): ${moment.isMoment(date)}
${moment().format('MMMM Do YYYY, h:mm:ss a')}
${moment(date, 'YYYY-MM-DD hh:mm:ss').format('YYYY-MM-DD hh:mm:ss')}
${date.format('YYYY-MM-DD hh:mm:ss')}`);
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
        <DatePicker onChange={this.handleDateChange} showTime />
        <br />
        <RangePicker onChange={this.handleRangeChange} />
        <p>{this.props.something} from props</p>
      </div>
    );
  }
}

export default AntdDate;
