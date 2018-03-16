import React from 'react';
import './music-player.css'

// 音乐
class MusicPlayerSong extends React.Component {
  constructor(props) {
    super(props);

    this.playThis = this.playThis.bind(this);
  }

  playThis (index) {
    this.props.playThis(this.props.index);
  }

  render() {
    return (
      <div 
        className="single-music"
        style={ this.props.current ? {background: '#33BEFF', color: '#FFFFFF'} : null }
      >
        <div className="single-music-play">
          <span 
            className={ this.props.current ? "icon-pause" : "icon-play" }
            onClick={this.playThis}
          ></span>
        </div>
        <div className="single-music-name">{this.props.data.name}</div>
        <div className="single-music-artist">{this.props.data.artist}</div>
        <div className="single-music-del">
          <span className="icon-del"></span>
        </div>
      </div>
    );
  }
}

export default MusicPlayerSong;
