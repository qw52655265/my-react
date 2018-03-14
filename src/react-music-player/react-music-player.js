import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './react-music-player.css'

let rotateTimer = 0;
class ReactMusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false, // 是否暂停
      isPlayed: false, // 是否播放

      angle: 0, // 音乐图片旋转角度（屏蔽不用）

      currentMusic: {}, // 当前音乐
      musicListShow: false, // 是否显示音乐列表

      totalTime: 0, // 音乐总时间
      remainTime: 0, // 音乐播放剩余时间
      playedLeft: 0,
      volumnLeft: 0
    };
    this.showMusicList = this.showMusicList.bind(this);

    // 播放按钮
    this.last = this.last.bind(this); // 上一首
    this.play = this.play.bind(this); // 播放
    this.next = this.next.bind(this); // 下一首

    // 播放进度条绑定事件
    this.touchMoveProgress = this.touchMoveProgress.bind(this);
    this.touchStartProgress = this.touchStartProgress.bind(this);
    this.clickProgress = this.clickProgress.bind(this);
    this.mouseDownProgress = this.mouseDownProgress.bind(this);
    this.mouseMoveProgress = this.mouseMoveProgress.bind(this);
    this.mouseUpProgress = this.mouseUpProgress.bind(this);
    this.mouseLeaveProgress = this.mouseLeaveProgress.bind(this);
  }

  componentDidMount() {
    let audio = this.refs.audio;
    // 默认第一条记录为当前播放音乐
    this.setState({
      currentMusic: this.props.info[0]
    });
    audio.addEventListener('canplay', () => {
      // 获取总时间
      let totalTime = parseInt(this.refs.audio.duration);
      this.setState({
        totalTime: this.getTime(totalTime),
        remainTime: this.getTime(totalTime),
        // playedLeft: this.refs.palyed.getBoundingClientRect().left,
        // volumnLeft: this.refs.totalVolumn.getBoundingClientRect().left
      });
    });
  }

  /**
   * 显示/隐藏音乐列表
   */
  showMusicList() {
    this.setState({
      musicListShow: !this.state.musicListShow
    });
  }

  /**
   * 上一首
   */
  last() {
    this.setState({
      angle: 0
    });
    if (!this.state.currentMusic.src) {
      return;
    }
    let current = "";
    this.props.info.forEach((value, index) => {
      if (value.src === this.state.currentMusic.src) {
        current = index;
      }
    });
    if (current > 0) {
      this.setState({
        currentMusic: this.props.info[current - 1]
      }, () => {
        this.play();
      });
    } else {
      this.setState({
        currentMusic: this.props.info[this.props.info.length - 1]
      }, () => {
        this.play();
      });
    }
  }
  /**
   * 播放
   */
  play() {
    // 清除定时器
    clearInterval(rotateTimer);
    let audio = this.refs.audio;
    if (audio.paused && this.state.currentMusic.src) {
      audio.play();
      this.setState({
        isPaused: true,
        isPlayed: true
      }, () => {
        rotateTimer = setInterval(() => {
          this.setState({
            angle: this.state.angle + 1
          }, () => {
            // this.refs.musicAvatar.style.transform = `rotate(${this.state.angle}deg)`;
          });
        }, 33);
      });
    } else {
      audio.pause();
      this.setState({
        isPaused: false
      }, () => {
        clearInterval(rotateTimer);
      });
    }

    audio.addEventListener('timeupdate', () => {
      // 设置播放进度条
      let playPer = audio.currentTime / audio.duration;
      this.refs.played.style.width = playPer * 100 + '%';
      // 设置缓冲进度条
      let timeRages = audio.buffered;
      let bufferedTime = 0;
      if (timeRages.length != 0) {
        bufferedTime = timeRages.end(timeRages.length - 1);
      }
      let bufferedPer = bufferedTime / audio.duration;
      this.refs.buffered.style.width = bufferedPer * 100 + '%';
      // 设置剩余时间
      let remainTime = parseInt(audio.duration - audio.currentTime);
      this.setState({
        remainTime: this.getTime(remainTime)
      });
      if (audio.ended) {
        this.next();
      }
    });

  }
  /**
   * 下一首
   */
  next() {
    this.setState({
      angle: 0
    });
    if (!this.state.currentMusic.src) {
      return;
    }
    let current = "";
    this.props.info.forEach((value, index) => {
      if (value.src === this.state.currentMusic.src) {
        current = index;
      }
    });
    if (current < this.props.info.length - 1) {
      this.setState({
        currentMusic: this.props.info[current + 1]
      }, () => {
        this.play();
      });
    } else {
      this.setState({
        currentMusic: this.props.info[0]
      }, () => {
        this.play();
      });
    }
  }

  touchMoveProgress() {}
  touchStartProgress() {}
  clickProgress() {}
  mouseDownProgress() {}
  mouseMoveProgress() {}
  mouseUpProgress() {}
  mouseLeaveProgress() {}

  getTime(musicTime) {
    if(musicTime) {
      if(musicTime<60) {
          musicTime = `00:${musicTime<10?`0${musicTime}`:musicTime}`
      } else {
        musicTime = `${parseInt(musicTime/60)<10?`0${parseInt(musicTime/60)}`:parseInt(musicTime/60)}:${musicTime%60<10?`0${musicTime%60}`:musicTime%60}`
      }
      return musicTime

    }else{
      return `00:00`
    }
  }
  render() {
    return (
      <div id="react-music-player">
        <div className="react-music-player-wrapper">
          <div className="react-music-player-inner">
            <div className="left-control">
              <span className="icon-last" onClick={this.last}></span>
              <span className={this.state.isPaused && this.state.currentMusic.src ? "icon-pause" : "icon-play"} onClick={this.play}></span>
              <span className="icon-next" onClick={this.next}></span>
            </div>
            <div className="music-box">
              <div className="picture"></div>
              <div className="music-info">
                <div className="music-name">
                  {
                    this.state.currentMusic.src ? 
                      // ES6 反单引号
                      (`${this.state.currentMusic.artist}：${this.state.currentMusic.name}`) : `等待播放`
                  }
                </div>
                <div className="progress-wrapper" ref="progress"
                  onTouchMove={this.touchMoveProgress}
                  onTouchStart={this.touchStartProgress}
                  onClick={this.clickProgress}
                  onMouseDown={this.mouseDownProgress}
                  onMouseMove={this.mouseMoveProgress}
                  onMouseUp={this.mouseUpProgress}
                  onMouseLeave={this.mouseLeaveProgress}
                >
                  <div className="progress">
                    <div className="progress-buffered" ref="buffered"></div>
                    <div className="progress-played" ref="played"></div>
                  </div>
                </div>
                <div className="time">
                  <div className="total-time">{this.state.currentMusic.src ? this.state.totalTime : `00:00`}</div>
                  <span>/</span>
                  <div className="remain-time">{this.state.currentMusic.src ? this.state.remainTime : `00:00`}</div>
                </div>
              </div>
            </div>
            <div className="music-list-btn">
              <span className="icon-menu" onClick={this.showMusicList}></span>
            </div>
            <div className="right-control"></div>
            <audio src={this.state.currentMusic.src ? this.state.currentMusic.src : ''} ref="audio"></audio>
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="music-list-show"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            this.state.musicListShow ? 
              <div className="music-list">
                <div className="music-list-title">
                  <span>播放列表</span>
                </div>
                <div className="single-music-wrapper">
                  {
                    this.props.info.map((value, index) => {
                      return (
                        <div className="single-music" key={value.src}>
                          <div className="single-music-play">
                            <span className="icon-play"></span>
                          </div>
                          <div className="single-music-name">{value.name}</div>
                          <div className="single-music-artist">{value.artist}</div>
                          <div className="single-music-del">
                            <span className="icon-del"></span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              : null
          }
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="music-list-model"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {
            this.state.musicListShow ? 
              <div className="model" onClick={this.showMusicList}></div>
              : null
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default ReactMusicPlayer;
