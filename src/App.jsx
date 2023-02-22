import React from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation.jsx'
import Video from './components/Video.jsx'
import Playlist from './components/Playlist.jsx'
import Suggested from './components/Suggested.jsx'
import Comments from './components/Comments.jsx'
import data from "./data.js"
import './App.css'

export default function App(){
  // console.clear();
  console.log('app rendered')

  const videoMap = new Map(
    data.items.map((video)=>{
      return [video.snippet.resourceId.videoId, video]
    })
  );


  const [state, setState] = React.useState({...data, currentVideo:"7aS7KStPgNA", videoMap:videoMap})
  console.log(state);

  return (
    <main>
      <Navigation />
      <Video state={state} setState={setState} currentVideo={state.currentVideo}/>
      <Playlist state={state} setState={setState}/>
      <Suggested />
      <Comments />
    </main>
  )
}
