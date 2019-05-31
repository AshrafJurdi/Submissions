import React, { Component } from "react";
import VideoDetail from "./components/VideoDetail";
import VideosList from "./components/VideosList";
import './App.css'

class VideoModule extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="video_container">
          <div className="main_video">
            <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
          </div>
          <div className="list_video">
            <h3>Up Next</h3>
            <VideosList videos={this.props.appState.videos} onVideoSelect={this.props.onVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoModule;
