import React from 'react';
import './music-player.css'

// 时间栏
class MusicPlayerTimeBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="time">
        <div className="total-time">{ this.props.totalTime }</div>
        <span>/</span>
        <div className="remain-time">{ this.props.remainTime }</div>
      </div>
    );
  }
}

export default MusicPlayerTimeBar;
