import React from 'react';
import './music-player.css'

// 控制按钮
class MusicPlayerControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: false
    };

    this.last = this.last.bind(this);
    this.play = this.play.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      current: props.current
    }));
  }

  last() {
    this.props.last();
  }
  play() {
    this.props.play();
  }
  next() {
    this.props.next();
  }

  render() {
    return (
      <div className="left-control">
        <span className="icon-last" onClick={this.last}></span>
        <span className={ this.props.current ? "icon-pause" : "icon-play"} onClick={this.play}></span>
        <span className="icon-next" onClick={this.next}></span>
      </div>
    );
  }
}

export default MusicPlayerControlBar;
