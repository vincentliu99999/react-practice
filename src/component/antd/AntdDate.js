
import React, { Component } from 'react';
import {
  Card, Divider, List, Input, DatePicker
} from 'antd';
import 'antd/dist/antd.css';

import moment from 'moment';
import 'moment/locale/zh-tw';

const { RangePicker } = DatePicker;

class AntdDate extends Component {
  state = {
    clock: moment(),
    testDate: '2020-06-02',
  };

  componentDidMount = () => {
    this.handleClockTick();
  }

  handleTestDateChange = (e) => {
    console.log(e);
    this.setState({ testDate: e.target.value });
  }

  handleDateChange = (date, dateString) => {
    console.log('handleDateChange');
    console.log(`
locale: ${moment.locale()}
date: ${date}
dateString: ${dateString}
moment.isMoment(obj): ${moment.isMoment(date)}
${moment().format('MMMM Do YYYY, h:mm:ss a')}
${moment(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD hh:mm:ss')}
${date.format('YYYY-MM-DD HH:mm:ss')}`);
  };

  handleRangeChange = (date, dateString) => {
    console.log('handleRangeChange');
    console.log(`
date: ${date}
dateString: ${dateString}`);
  };

  handleClockTick = () => {
    this.setState({ clock: moment() });

    setTimeout(() => {
      this.handleClockTick();
    }, 1000);
  }

  render() {
    const momentFormat = [
      'MMMM DD YYYY, h:mm:ss a',
      'YYYY-MM-DD HH:mm:ss',
    ];

    const localeFormat = [
      'LT',
      'LTS',
      'L',
      'l',
      'LL',
      'll',
      'LLL',
      'lll',
      'LLLL',
      'llll',
    ];

    console.log(moment('2016-01-01T23:35:01'));
    console.log(moment.utc('2016-01-01T23:35:01'));
    console.log(moment.parseZone('2013-01-01T00:00:00-13:00'));


    return (
      <div>
        <Divider orientation="left">clock</Divider>
        <Card style={{ width: 600 }}>
          <p>{this.state.clock.format()}</p>
        </Card>
        <Divider orientation="left">testDate</Divider>
        <Input placeholder="date to parse" value={this.state.testDate} onChange={this.handleTestDateChange} />
        <Card style={{ width: 300 }}>
          <p>this.state.testDate: {this.state.testDate}</p>
          <p>moment.isDate(ISO 8601, RFC 2822): {`${moment(this.state.testDate).isValid()}`}</p>
          <p>locale: {moment.locale()}</p>
        </Card>
        <Divider orientation="left">DatePicker</Divider>
        <DatePicker onChange={this.handleDateChange} />
        <br />
        <DatePicker onChange={this.handleDateChange} showTime />
        <br />
        <RangePicker onChange={this.handleRangeChange} />
        <br />
        <Divider orientation="left">Locale</Divider>
        <List
          size="small"
          bordered
          dataSource={moment.locales()}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Divider orientation="left">Moment Date Format</Divider>
        <List
          size="small"
          bordered
          dataSource={momentFormat}
          renderItem={item => <List.Item>{moment().format(item)}</List.Item>}
        />
        <Divider orientation="left">Moment Date Locale Format</Divider>
        <List
          size="small"
          bordered
          dataSource={localeFormat}
          renderItem={item => <List.Item>{`${item} ${moment().format(item)}`}</List.Item>}
        />
      </div>
    );
  }
}

export default AntdDate;
