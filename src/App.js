import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Videos from './videos';




const button ={
  position: 'relative',
padding: '10px 40px',
margin: '0px 10px 10px 0px',
float: 'left',
borderRadius: '10px',
fontFamily: 'Pacifico',
fontSize: '25px',
color: '#FFF',
textDecoration: 'none',
  backgroundColor: '#3498DB',
borderBottom: '5px solid #2980B9',
textShadow: '0px -2px #2980B9',
}

const nothing = {
  display: 'none'
}



var videosIsmail = [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/4Z1Flp5U2qM '
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/mKhtyGwx1X4'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/tvnQzscMv38'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/Q7jfoXEmbYk'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/04rIWeqx0c0'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/bEqGqynr01U'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/IU8dfBJyztY'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/xX5VeFgpDm4'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/YSWfqMoa61w'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/mhzntHKb8yk'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/dJHpYudAJ98'
  },
]
var videosKoussay= [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/UUolmivT3Uw'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/p-UzWc8-_yE'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/0c6YmBLrdXg'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/q_URslN7aFE'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/mIMLpP2vDqo'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/k3Zzr0AqBcQ'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/2F3f2Mp3r8U'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/GjLOyvg3CDk'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/wgnIPoM2tfY'
  },
  {
    service: 'youtube',
    video: 'https://youtube/embed/lh0YpkDNmHE'
  }
]
var videos = [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/bPu3N7BRRo0 '
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/Q806Mk9ad-s '
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/od-TXRFntzY '
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/uaPhVTBqFos '
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/Ss7Dx2Ook9c'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/embed/UcUDQB5EzUM'
  }
];

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      who: videos,
      firstVideos: true,
      story: false,
      videoIndex: 1,
      choiceA : null,
      choiceB: null
    };
  }

  goToVideo (index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }

  goToChoiceA (index) {
    if (this.state.who === videosIsmail){
      console.log('Ismail')
      switch(index){
        case 1 :
          this.setState({videoIndex : 2, choiceA : 'Search for a job in my field of expertise', choiceB: 'Search for most on Demand jobs'})
          break;
        case 2:
          this.setState({videoIndex: 3, choiceA: 'Keep on searching', choiceB: 'check notification'})
              break;
        case 3 :
          this.setState({videoIndex: 4, choiceA: 'Keep on searching', choiceB: 'check notification'})
              break;
        case 4:
          this.setState({videoIndex: 8})
              break;
        case 7:
          this.setState({videoIndex: 9, choiceA: 'Do not apply', choiceB: 'Nothing  '})
              break;
        case 5:
          this.setState({videoIndex: 7, choiceA: 'Check notification', choiceB: 'Search for best coding schools'})
              break;
        case 6:
          this.setState({videoIndex: 10, choiceA: 'Nothing', choiceB: 'Do not apply'})
          break;
      }
    }
    if (this.state.who === videosKoussay){
      switch(index){
        case 1 :
          this.setState({videoIndex : 2, choiceA : 'Improve my skills', choiceB: 'Check notification'})
          break;
        case 2:
          this.setState({videoIndex: 3, choiceA : 'Do not Apply', choiceB: 'Apply'})
              break;
        case 3:
          this.setState({videoIndex: 6, choiceA : 'Nothing', choiceB: 'Nothing'})
              break;
        case 9:
          this.setState({videoIndex:4, choiceA : 'Do not Apply', choiceB: 'Apply'})
              break;
        case 4:
          this.setState({videoIndex: 8, choiceA : 'Nothing', choiceB: 'Nothing'})

      }
    }
    if (this.state.who === videos){
      console.log('Aziza')
      switch(index){
        case 1 :
          this.setState({videoIndex : 2, choiceA : 'Do not check', choiceB: 'Check Ad'})
          break;
        case 3:
          this.setState({videoIndex: 5, choiceA : 'Nothing', choiceB: 'Nothing'})
      }
    }
    console.log('choice A')
  }

  goToChoiceB (index) {
    if (this.state.who === videosIsmail){
      console.log('Ismail')
      switch(index){
        case 1 :
          this.setState({videoIndex : 2, choiceA : 'Search for a job in my field of expertise', choiceB: 'Search for most on Demand jobs'})
          break;
        case 2:
          this.setState({videoIndex: 5, choiceA : 'Check Notifications', choiceB: 'Search for Best Coding schools'})
              break;
        case 5:
          this.setState({videoIndex: 6, choiceA : 'Nothing', choiceB: 'Do not apply'})
              break;
        case 3:
          this.setState({videoIndex: 7, choiceB : 'Nothing', choiceA: 'Do not apply'})
              break;
        case 7:
          this.setState({videoIndex: 9, choiceA : 'Nothing', choiceB: 'Nothing'})
              break;
        case 6:
          this.setState({videoIndex: 10, choiceA : 'Nothing', choiceB: 'Do not apply'})
              break;
      }
    }
    if (this.state.who === videosKoussay){
      console.log('Koussay')
      switch(index){
        case 1 :
          this.setState({videoIndex : 9, choiceA : 'Check Notification', choiceB: 'Keep scrolling'})
          break;
        case 9:
          this.setState({videoIndex: 5, choiceA : 'Nothing', choiceB: 'Nothing'})
         break;
        case 3:
          this.setState({videoIndex: 7, choiceA : 'Nothing', choiceB: 'Nothing'})
      }
    }
    if (this.state.who === videos){
      console.log('Aziza')
      switch(index){
        case 1 :
          this.setState({videoIndex : 3, choiceA : 'Search for GoMyCode', choiceB: 'Search For Most Paying Jobs'})
          break;
        case 2:
          this.setState({videoIndex: 5, choiceA : 'Nothing', choiceB: 'Nothing'})
              break;
        case 3:
          this.setState({videoIndex: 4, choiceA : 'Apply', choiceB: 'Do not Apply'})
      }
    }
    console.log('choice A')
  }
  goToIsmail ()  {
    this.setState({
      who : videosIsmail,
      firstVideos: false,
      story: true,
      choiceA : 'Search for a job in my field of expertise',
      choiceB: 'Search for most on Demand jobs'
    })
    console.log('worked ?')
  }
  goToKoussay ()  {
    this.setState({
      who : videosKoussay,
      firstVideos: false,
      story: true,
      choiceA : 'Check Job',
      choiceB: 'Keep Scrolling'
    })
    console.log('worked ?')
  }
  goToAziza ()  {
    this.setState({
      who : videos,
      firstVideos: false,
      story: true,
      choiceA : 'I hate this job lets quit',
      choiceB: 'Stay here and wait  '
    })
    console.log('worked ?')
  }

  render() {
    const {service, video} = this.state.who[this.state.videoIndex];
    return (
        <div>
        <div style={{display: this.state.firstVideos ?  'flex' : 'none'}}>
          <div>
          <ReactPlayer playing={true} url={videosIsmail[0].video} />
          <button style={button} onClick={this.goToIsmail.bind(this)}>
            1
          </button>
          </div>
          <div>
          <ReactPlayer playing={true} url={videosKoussay[0].video}  />
            <button style={button} onClick={this.goToKoussay.bind(this)}>
              2
            </button>
          </div>
          <div style={{alignItems: 'center', height: '100vh'}}>
          <ReactPlayer playing={true} url={videos[0].video}  />
            <button style={button} onClick={this.goToAziza.bind(this)}>
              3
            </button>
          </div>
        </div>
          <div style={{display: this.state.story ?  'block' : 'none'}}>
          <Videos service={service} video={video} width={500} height={600} />
          <button style={  button } onClick={this.goToChoiceB.bind(this, this.state.videoIndex)}>
            {this.state.choiceB}
          </button>
          <button style={ button} onClick={this.goToChoiceA.bind(this, this.state.videoIndex)}>
            {this.state.choiceA}
          </button>
          </div>
        </div>
    );
  }
}
