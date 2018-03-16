import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './music-player.css'

// 遮罩
class MusicPlayerModel extends React.Component {
  constructor(props) {
    super(props);
    this.showMusicList = this.showMusicList.bind(this);
  }

  showMusicList() {
    this.props.showMusicList();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="music-list-model"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {
          this.props.musicListShow ? 
            <div className="model" onClick={this.showMusicList}></div>
            : null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

export default MusicPlayerModel;
