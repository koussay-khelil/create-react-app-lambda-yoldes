import React, {Component, PropTypes} from 'react';
import ReactPlayer from 'react-player'
import qs from 'query-string';
export default class Videos extends Component {
    state = {played : 0, duration: null,
        secondsElapsed: null, remaining: null}
    static propTypes = {
        service: PropTypes.oneOf(['youtube', 'vimeo', 'dailymotion']).isRequired,
        video: PropTypes.string.isRequired
    };

    static urlMap = new Map([
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/'],
        ['youtube', 'https://www.youtube.com/embed/']
    ])

    getIdFromVideoString (vString) {
        const urlArr = vString.split('/');
        const idString = urlArr[urlArr.length - 1];
        const queryParams = qs.extract(vString);

        return (queryParams && qs.parse(queryParams).v) || idString || '';
    }
    currentTime = (played) => {
        console.log(played)
    }
    handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onDuration = (duration) => {
        this.setState({ duration })
        console.log('called')
    }
    onProgress = (progress) => {
        if (!this.state.duration) {
            // Sadly we don't have the duration yet so we can't do anything
            return
        }

        // progress.played is the fraction of the video that has been played
        // so multiply with duration to get number of seconds elapsed
        const secondsElapsed = progress.played * this.state.duration

        if (secondsElapsed !== this.state.secondsElapsed) {
            this.setState({ secondsElapsed })
            console.log('hello',secondsElapsed)
            this.setState({
                remaining : this.state.duration - this.state.secondsElapsed
            })
            console.log('left', this.state.remaining)
        }
    }

    render() {
        const {service, video, ...htmlTags} = this.props;
        const src = `${Videos.urlMap.get(service)}${this.getIdFromVideoString(video)}`;
console.log('the src is here',src)
        return (
            <div style={{margin: 'auto'}}>
               <ReactPlayer playing={true} currentTime={this.currentTime} url={src} youtubeConfig={{ playerVars: { showinfo: 1 } }} onDuration={this.onDuration} onProgress={this.onProgress} />
            </div>


        );
    }
}
