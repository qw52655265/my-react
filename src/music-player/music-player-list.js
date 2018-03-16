import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './music-player.css'

import MusicPlayerSong from './music-player-song'

// 音乐列表
class MusicPlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMusic: {},
      isPlayed: false,

    };

    this.playThis = this.playThis.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentMusic: this.props.currentMusic,
      isPlayed: this.props.isPlayed
    });
  }

  playThis(index) {
    this.props.playThis(index);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="music-list-show"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {
          this.props.musicListShow ? 
          <div className="music-list">
            <div className="music-list-title">
              <span>播放列表</span>
            </div>
            <div className="single-music-wrapper">
              {
                this.props.info.map((value, index) => {
                  return (
                    <MusicPlayerSong 
                      data={value}
                      index={index} 
                      key={index}
                      current={this.props.currentMusic.src === value.src && this.props.isPlayed}
                      playThis={this.playThis}
                    ></MusicPlayerSong>
                  )
                })
              }
            </div>
          </div>
          : null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

export default MusicPlayerList;
