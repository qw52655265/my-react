import React from 'react';
import MusicPlayer from './music-player/music-player'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songInfo: [
        {
          src:"http://qqma.tingge123.com:83/123/2016/10/青蛙乐队 - 小跳蛙.mp3",
          artist:"青蛙乐队",
          name:"小跳蛙",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg",
          id:"66575568441"
        },
        {
          src:"http://qqma.tingge123.com:83/20081119/甜甜的.mp3",
          artist:"周杰伦",
          name:"甜甜的",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20171026/20171026100450393.jpg",
          id:"66575568442"
        },
        {
            src:"http://qqma.tingge123.com:83/20081120/不得不爱.mp3",
            artist:"潘玮柏",
            name:"不得不爱",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=781787101,1026788150&fm=27&gp=0.jpg",
            id:"66575568443"
        },
        {
          src:"http://qqma.tingge123.com:83/123/2016/07/张韶涵 - 再见之前.mp3",
          artist:"张韶涵",
          name:"再见之前",
          img:"http://games.enet.com.cn/jzimages/201009/s1283410316.jpg",
          id:"66575568444"
        },
        {
          src:"http://qqma.tingge123.com:83/123/2016/05/G.E.M.邓紫棋 - 画.mp3",
          artist:"邓紫棋",
          name:"画",
          img:"http://img.18183.com/uploads/allimg/140510/41-140510145612.jpg",
          id:"66575568445"
        },
        {
          src:"http://qqma.tingge123.com:83/123/2014/12/无字碑-张靓颖.mp3",
          artist:"张靓颖",
          name:"无字碑",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20170628/20170628110356447.jpg",
          id:"66575568446"
        },
        {
          src:"http://qqma.tingge123.com:83/123/2010/09/叶子-阿桑.mp3",
          artist:"阿桑",
          name:"叶子",
          img:"http://star.kuwo.cn/star/starheads/180/66/26/1776695622.jpg",
          id:"66575568447"
        },
        {
          src:"http://qqma.tingge123.com:83/20081117/认真的雪.mp3",
          artist:"薛之谦",
          name:"认真的雪",
          img:"http://img14.3lian.com/201512/02/9478d19283ce6f990741fbac92203132.jpg",
          id:"66575568449"
        },
        {
          src:"http://qqma.tingge123.com:83/20081117/杀手.mp3",
          artist:"林俊杰",
          name:"杀手",
          img:"http://wenwen.soso.com/p/20070621/20070621060503-1458706809.jpg",
          id:"66575568448"
        }, {
          src: 'http://music.163.com/song/media/outer/url?id=185709.mp3',
          artist:"周杰伦",
          name:"稻香",
          img:"http://p1.music.126.net/uKR6EQ1dLq4i1UBhXmvXtQ==/721279627833133.jpg",
          id:"66575568999"
        }, {
          src: 'http://music.163.com/song/media/outer/url?id=64453.mp3',
          artist:"陈奕迅",
          name:"浮夸",
          img:"http://p1.music.126.net/7dbK-A_In2Wol92TDMYIGw==/6636652185368776.jpg",
          id:"66575568998"
        }
      ]
    };
    this.delSong = this.delSong.bind(this);
  }

  delSong(i, id) {
    console.log('delete song id:', id);
    this.state.songInfo.splice(i, 1);
  }

  render() {
    return (
      <MusicPlayer 
        info = {this.state.songInfo}
        onDel = {this.delSong} />
    );
  }
}

export default App;
