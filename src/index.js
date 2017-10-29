// javascript modules makes different files that dont get access
// to eachother unless you grant it
// React is used to manage components
// to run this project npm start then localhost:8080
import React, { Component } from 'react';

// ReactDOM is used to managed the virtual DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDCfZxen4AEzy8ZDncKzF5Qrwi3MspsUvw';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      videos: []
    }
      
      YTsearch({key: API_KEY, term: ''}, (videos) => {
        // if key and value are same name can reduce down to one {videos: videos} = { videos }
        this.setState({ videos });
        });

    };
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}
// insert it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<App />, document.getElementsByClassName('container'));