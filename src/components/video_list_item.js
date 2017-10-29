import React from 'react';
import VideoList from './video_list'

const VideoListItem = (props) => {
  return (
    <li>{props.video.snippet.title}</li>
  )
}
export default VideoListItem;