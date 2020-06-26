import React from 'react';
import ReactPlayer from 'react-player';

class WSPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      player: null,
      videoURL: '',
      playing: false,
    };
  }

  componentDidMount = () => {
    const { videoURL, playing } = this.props;

    this.setState({ videoURL, playing });
  };

  handleProgress = () => {
    // We only want to update time slider if we are not currently seeking
    // if (!seeking) {
    //   // this.setState(state)
    // }
  };

  ref = (player) => {
    this.setState({ player });
  };

  render() {
    const { width = 640, height = 360, videoURL, playing } = this.props;

    return (
      <ReactPlayer
        ref={this.ref}
        url={videoURL}
        playing={playing}
        onProgress={this.handleProgress}
        controls={true}
        onError={this.onReactPlayerError}
        width={width}
        height={height}
      />
    );
  }
}

export default WSPlayer;
