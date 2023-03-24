
import React, { Component } from 'react';

class BaiTap3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    const timeString = date.toLocaleTimeString();

    return (
      <div>
        <h2>Xin chào các bạn !</h2>
        <p>Bây giờ là: {timeString}</p>
      </div>
    );
  }
}

export default BaiTap3;
